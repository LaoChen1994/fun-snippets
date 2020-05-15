
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fprogresscir",
      body: `
        <Progress type="circle" percent={50} />
      `,
      description: 'fun progress circle'
    },{
      prefix: "fprocess",
      body: `
      <Progress percent={50} />
      `,
      description: 'fun progress base'
    }] as ISnippets[];
