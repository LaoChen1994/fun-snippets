import { ISnippets } from "./snippets/interface";
import { writeFileSync, readdirSync } from "fs";
import { resolve, join } from "path";

const getSnippetsTemp = () => {
  const basePath = resolve(__dirname, "./snippets");
  const snippetFiles = readdirSync(basePath).filter((item) =>
    item.match(".snippets.ts")
  );

  let st: Promise<{ default: ISnippets[] }>[] = [];
  let snippets: ISnippets[] = [];
  snippetFiles.forEach((module) => {
    st.push(import(join(basePath, module)));
  });

  Promise.all(st)
    .then((data) => {
      data
        .forEach((item) => {
          // @ts-ignore
          const module = item?.default ?? [];
          snippets = [...snippets, ...module];
        });
      writeSnippetsInJSON(snippets);
    })
    .catch((err) => {
      console.log(
        JSON.stringify(
          err.filter(
            (item: PromiseRejectedResult) => item.status === "rejected"
          ),
          null,
          2
        )
      );
    });
};

const handleIndentation = (item: string) => {
  const charList = item.split("").findIndex(item => item !== '');
  if (charList) {return item.slice(charList / 2);}
  return item;
};

function formatSnippets(component: ISnippets) {
  const { prefix, body, description } = component;
  const strList = body.split("\n");
  const cutIndex = strList.find(item => item)?.split("").findIndex(item => item !== " ")!;
  
  return {
    prefix,
    body: strList.map(item => {
      return item.length <= cutIndex ? item : handleIndentation(item.slice(cutIndex));
    }),
    description,
  };
}

function writeSnippetsInJSON(compList: ISnippets[]) {
  const formatComps = compList.reduce((p, c, i) => {
    return {
      ...p,
      [i]: formatSnippets(c),
    };
  }, {});
  writeFileSync(
    resolve(__dirname, "./snippets/snippets.json"),
    JSON.stringify(formatComps)
  );
  console.log("Set Over");
}

getSnippetsTemp();