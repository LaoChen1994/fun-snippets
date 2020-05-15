
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftagselect",
      body: `
      <TagSelect value={value} onChange={value => setValue(value)}>
        <TagSelect.Option value="tag1">分类1</TagSelect.Option>
        <TagSelect.Option value="tag2">分类2</TagSelect.Option>
        <TagSelect.Option value="tag3">分类3</TagSelect.Option>
      </TagSelect>
      `,
      description: 'fun tagselect base'
    }] as ISnippets[];
