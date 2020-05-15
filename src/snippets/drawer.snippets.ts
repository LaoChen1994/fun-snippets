
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <Drawer visible={visible} onVisibleChange={setVisible} title="标题">
        <p>基础用法</p>
      </Drawer>
      `,
      prefix: "fdrawer",
      description: 'fun drawer'
    }, {
      prefix: "fdrawernomask",
      body: `
      <Drawer visible={visible} onVisibleChange={setVisible} title="标题" mask={false}>
        <p>无Mask用法</p>
      </Drawer>
      `,
      description: "fun drawer without mask"
    }] as ISnippets[];
