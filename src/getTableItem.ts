import { readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const snippetsPath = resolve(__dirname, './snippets');
const fileList = readdirSync(snippetsPath);

const getItems = () => {
  const items: Promise<any>[] = [];

  fileList.map(file => {
    file.endsWith('\.snippets\.ts') && items.push(
      import(`${snippetsPath}/${file}`)
    );
    
  });

  Promise.all(items).then(handleSnippets); 
};


const handleSnippets = (data: any) => {
  const itemInfo: string[] = [];

  data.map((item: any) => {
    item.default.map((x: any) => {
      const {prefix, description} = x;
      itemInfo.push(`|${prefix}|${description}|\n`);
    });
  });
  writeFileSync(resolve(__dirname, '../README.md'), itemInfo.join(""), {encoding: "utf8", flag: "a+"});
  console.log('update readme over');
};

getItems();