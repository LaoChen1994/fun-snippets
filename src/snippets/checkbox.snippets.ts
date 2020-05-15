import { ISnippets } from "./interface";

export default  [{
    prefix: "fcheckbox",
    body: `
    <Checkbox.Group
        value={value}
        disabled={disabled}
        onChange={value => setValue(value)}
        readOnly={readOnly}
    >
        { data.map((item) => <Checkbox value={item.value}>{item.label}</Checkbox> ) }
    </Checkbox.Group>
    `,
    description: 'fun checkbox多选框'
}, {
    prefix: "fcheckbtn",
    body: `
    <Checkbox.Group
        value={value}
        disabled={disabled}
        onChange={value => setValue(value)}
    >
        <Checkbox.Button value="Apple">苹果</Checkbox.Button>
        <Checkbox.Button value="Pear">梨子</Checkbox.Button>
        <Checkbox.Button value="Orange">橘子</Checkbox.Button>
    </Checkbox.Group>
  `,
  description: 'fun checkbox带button'
}] as ISnippets[];