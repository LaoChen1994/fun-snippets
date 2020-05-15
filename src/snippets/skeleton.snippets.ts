
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fskeleton",
      body: `
      <Skeleton />
      `,
      description: 'fun skeleton base'
    }, {
      prefix: 'fskeletonfull',
      body: `
        <Skeleton avatar={true} title={{ rows: 4, split: false }} paragraph={{ rows: 5 }} />
      `,
      description: 'fun skeleton with avatar and paragraph'
    }] as ISnippets[];
