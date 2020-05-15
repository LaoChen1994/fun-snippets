
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fslider",
      body: `
        <Slider value={value} onChange={value => setValue(value)} />
      `,
      description: 'fun slider base',
    }] as ISnippets[];
