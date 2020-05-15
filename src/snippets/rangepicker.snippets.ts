import { ISnippets } from "./interface";

export default  [{
    prefix: "frangepick",
    body: `
        <RangePicker
            value={value}
            onChange={value => setValue(value)}
            format="YYYY-MM-DD HH:mm:ss"
            timePicker
        /> 
    `,
    description: 'fun range picker single'
}] as ISnippets[];

