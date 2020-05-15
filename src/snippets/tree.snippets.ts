
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftree",
      body: `
      <Tree
        defaultCheckedKeys={['3']}
        data={data}
        checkable={checkable}
        expandOnSelect={expandOnSelect}
        checkStrictly={checkStrictly}
      />
      `,
      description: 'fun tree base'
    }] as ISnippets[];
