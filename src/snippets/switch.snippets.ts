
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fswitch",
      body: `
      <Switch checked={checked} onChange={checked => setChecked(checked)} />
      `,
      description: 'fun switch base'
    }] as ISnippets[];
