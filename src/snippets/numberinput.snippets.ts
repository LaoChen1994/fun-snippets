
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fnumberinput",
      body: `
      <NumberInput value={5} step={1} onChange={value => console.log(value)} />
      `,
      description: 'fun numberinput base'
    }] as ISnippets[];
