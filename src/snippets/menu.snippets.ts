import { ISnippets } from "./interface";

export default  [{
    prefix: "fmenu",
    body: `
        <Menu className="test">
            <MenuItem onClick={'$1'}>视频分类</MenuItem>
            <MenuItem onClick={'$1'}>语音分类</MenuItem>
        </Menu>
    `,
    description: 'fun menu base'
}] as ISnippets[];