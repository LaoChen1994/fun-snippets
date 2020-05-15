
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fsearchinput",
      body: `
      <SearchInput
        placeholder="搜索相关内容"
        clearable
        value={value}
        onChange={value => setValue(value)}
        onSearch={value => console.log('onSearch', value)}
      />
      `,
      description: 'fun searchinput base'
    }] as ISnippets[];
