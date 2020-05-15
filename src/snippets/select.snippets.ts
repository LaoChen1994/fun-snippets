import { ISnippets } from "./interface";

export default  [{
    prefix: "fselect",
    body: `
    <Select
        value={value}
        placeholder="请选择"
        onChange={value => setValue(value)}
    >
        {
            data.map(elem => (
                <Select.Option value={elem.value}>{elem.label}</Select.Option>
            ))
        }
    </Select>
    `,
    description: 'fun select base'
}, {
    prefix: 'fselectmul',
    body: `
        <Select
            value={value}
            multiple
            placeholder="请选择"
            onChange={value => setValue(value)}
        >
            <Option value="apple">apple</Option>
            <Option value="cherry">cherry</Option>
            <Option value="peach">peach</Option>
            <Option value="strawberry">strawberry</Option>
            <Option value="orange">orange</Option>
        </Select>
    `,
    description: 'fun multi select'
}] as ISnippets[];