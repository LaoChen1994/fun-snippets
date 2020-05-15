
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <Collapse>
        <Collapse.Panel title="Panel1 header" key="1">
          <div>Panel1</div>
        </Collapse.Panel>
        <Collapse.Panel title="Panel2 header" key="2">
          <div>Panel2</div>
        </Collapse.Panel>
        <Collapse.Panel title="Panel3 header" key="3">
          <div>Panel3</div>
        </Collapse.Panel>
      </Collapse>
      `,
      prefix: `fcollapse`,
      description: 'fun collapse'
    }] as ISnippets[];
