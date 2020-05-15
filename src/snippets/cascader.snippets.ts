import { ISnippets } from "./interface";

export default  [{
    prefix: "fcassingle",
    body: `
        <Cascader options={data} value={value} onChange={handleChange} />
    `,
    description: 'fun 单选级联'
}, {
    prefix: 'fcasmulti',
    body: `
        <Cascader
            options={data}
            multiple={true}
            value={value}
            onChange={handleChange}
        />
    `,
    description: 'fun 多选级联'
}] as ISnippets[]