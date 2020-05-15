
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftaginput",
      body: `
        <TagInput value={value} placeholder="输入数据，按回车确认" onChange={value => setValue(value)} />
      `,
      description: 'fun taginput base'
    }, {
      prefix: 'ftaginputsplit',
      body: `
      <TagInput
        value={value}
        placeholder="输入数据，按回车确认"
        pasteSeparator={pasteSeparator}
        onChange={value => setValue(value)}
      />
      `,
      description: 'fun taginput with separator'
    }] as ISnippets[];
