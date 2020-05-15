
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <CopyText text="普通复制字段">
        <Button>复制</Button>
      </CopyText>
      `,
      prefix: `fcopytext`,
      description: 'fun copytext基础用法'
    }, {
      body: `
      <Button
        onClick={() => {
          CopyText.copy({
            text: '静态方法复制'
          })
        }}
      >
        复制
      </Button>  
      `,
      prefix: "fcopytextstatic",
      description: 'fun copytext 静态用法'
    }] as ISnippets[];
