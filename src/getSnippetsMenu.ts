// const fs = require('fs');
// const path = require('path');

import { readdirSync, writeFile } from 'fs';
import { resolve } from 'path';

const getTemp = (prefix: string, componentName: string) => `
  import { ISnippets } from "./interface";

  export default  [{
      body: "",
      prefix: \`${prefix}\`,
      description: \'fun ${componentName}\'
    }] as ISnippets[]
`;

const docPath = resolve(__dirname, '../../../YouZan/fun/packages/fun/src/components');
const snippetsPath = resolve(__dirname, './snippets');

const fileList = readdirSync(docPath).filter(item => !item.includes('.')).map(item => item.toLocaleLowerCase());
const currSnippets = readdirSync(snippetsPath);

const newSnppetsMap: { [key: string]: string } = fileList.reduce((p, c) => {
  const filename = c + '\.snippets\.ts';
  const prefix = `f${c}`;
  return !currSnippets.includes(filename) ? { ...p, [filename]: getTemp(prefix, c) } : p;
}, {});

const stack: Promise<void>[] = [];

Object.keys(newSnppetsMap).map((path) => {
  stack.push(new Promise((resolve, reject) => writeFile(`${snippetsPath}/${path}`, newSnppetsMap[path], (err) => {
    if (err) { return reject(`${path} is not written`); };
    resolve();
  })));
});


Promise.all(stack).then(() => { console.log('new temp is created'); }).catch(err => console.log(err));