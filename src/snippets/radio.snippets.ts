import { ISnippets } from "./interface";

export default  [{
    prefix: "fradio",
    body: `
        <Radio.Group value={value} onChange={value => setValue(value)}>
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
        </Radio.Group>
    `,
    description: 'fun radio base'
}] as ISnippets[];