import { ISnippets } from "./interface";

export default  [{
    prefix: "ftabpan",
    body: `
        <Tabs defaultActiveKey="1">
            <Tabs.TabPanel title="标签一" key="1">
                标签一内容
            </Tabs.TabPanel>
            <Tabs.TabPanel title="标签二" key="2">
                标签二内容
            </Tabs.TabPanel>
            <Tabs.TabPanel title="标签三" key="3">
                标签三内容
            </Tabs.TabPanel>
        </Tabs>
    `,
    description: 'fun tabs with tabpanel'
}, {
    prefix: "ftabtabs",
    body: `
    <Tabs
        defaultActiveKey="1"
        tabs={[
            {
                key: '1',
                title: (
                <div>
                    标签一
                    <Icon
                        type="edit"
                        style={{
                            fontSize: '16px',
                            marginLeft: '10px',
                            verticalAlign: 'middle',
                        }}
                    />
                </div>
                ),
            },
            {
                key: '2',
                title: (
                <div>
                    标签二
                    <Icon
                        type="edit"
                        style={{
                            fontSize: '16px',
                            marginLeft: '10px',
                            verticalAlign: 'middle',
                        }}
                    />
                </div>
                ),
            }
        ]}
    />
    `,
    description: 'fun tab with tabs'
}] as ISnippets[];