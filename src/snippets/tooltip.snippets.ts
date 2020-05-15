
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftooltip",
      body: `
      <Tooltip trigger="hover" placement="topLeft" title="这是Tooltip的title">
        <Button>topLeft</Button>
      </Tooltip>
      `,
      description: 'fun tooltip base'
    }] as ISnippets[];
