
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftreeselect",
      body: `
      <TreeSelect data={data} placeholder={'please choose'} clearable value={value} onChange={this.onChange} />
      `,
      description: 'fun treeselect base'
    }] as ISnippets[];
