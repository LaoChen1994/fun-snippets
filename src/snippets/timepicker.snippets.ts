
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftimepicker",
      body: `
      <TimePicker value={value} onChange={value => setValue(value)} />
      `,
      description: 'fun timepicker base'
    }, {
      prefix: 'ftimepickerm',
      body: `
      <TimePicker valueType="Moment" value={value} onChange={value => setValue(value)} />
      `,
      description: 'fun timepicker with moment type'
    }] as ISnippets[];
