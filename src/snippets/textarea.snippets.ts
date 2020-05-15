
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftextarea",
      body: `
      <TextArea placeholder="Please input the content" value={value} onChange={value => setValue(value)} />
      `,
      description: 'fun textarea base'
    }] as ISnippets[];
