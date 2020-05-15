import { ISnippets } from "./interface";

export default  [{
    prefix: "fstep",
    body: `
        <Steps status={"process"} current={"1"} direction="horizontal">
            <Steps.Step key="1" title="状态1" description="第一步" />
            <Steps.Step key="2" title="状态2" description="第二步" />
            <Steps.Step key="3" title="状态3" description="第三步" />
            <Steps.Step key="4" title="状态4" description="第四步" />
        </Steps>
    `,
    description: 'fun steps组件'
}] as ISnippets[]