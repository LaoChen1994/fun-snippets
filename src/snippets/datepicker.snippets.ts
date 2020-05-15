import { ISnippets } from "./interface";

export default  [{
    prefix: "fdateuc",
    body: `
    <DatePicker
        disabled
        valueType="Moment"
        onChange={handleChange}
        defaultValue={moment('2017-01-01')}
    />
    `,
    description: 'fun 日期选择器非受控'
}, {
    prefix: 'fdatec',
    body: `
    <DatePicker
        valueType="Moment"
        value={momentValue}
        onChange={handleMomentValueChange}
    />
    `,
    description: 'fun 日期选择器受控'
}] as ISnippets[];