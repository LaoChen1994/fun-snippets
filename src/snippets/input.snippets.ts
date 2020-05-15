import { ISnippets } from "./interface";

export default  [{
    prefix: 'finput',
    body: `
    <Input
        value={value}
        onChange={handleChange}
        placeholder="base"
    />
    `,
    description: 'fun input base'
}, {
    prefix: "finputpre",
    body: `
    <Input
        placeholder="prefix"
        prefix={<Icon type="info-circle-o" />}
        value={value}
        onChange={handleChange}
    />
    `,
    description: 'fun input with prefix'
}, {
    prefix: 'finputenter',
    body: `
    <Input
        placeholder="invoke onPressEnter callback"
        value={value}
        onChange={value => setValue(value)}
        onPressEnter={handlePressEnter}
        innerRef={inputRef}
    />
    `,
    description: 'fun input with enter event'
}] as ISnippets[];