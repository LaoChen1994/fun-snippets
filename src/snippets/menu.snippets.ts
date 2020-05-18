import { ISnippets } from "./interface";

export default  [{
    prefix: "fmenu",
    body: `
        <Menu className="test">
            <MenuItem onClick={$1}>类别1</MenuItem>
            <MenuItem onClick={$1}>类别2</MenuItem>
        </Menu>
    `,
    description: 'fun menu base'
}] as ISnippets[];