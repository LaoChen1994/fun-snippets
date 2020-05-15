
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <Card
      title="默认尺寸"
      extra={
        <Button type="text" size="small">
          更多操作
        </Button>
      }
      >
        {"$1"}
      </Card>
      `,
      prefix: `fcard`,
      description: 'fun card.snippets.ts'
    }, {
      prefix: "fcardaction",
      body: `
      <Card
        title="卡片标题"
        actions={[
          <Icon
            type="edit"
            key="edit"
            size={20}
            style={{ verticalAlign: 'middle' }}
          />,
        ]}
      >
        <Card.Meta
          avatar={<Icon type="youzan" fill="red" />}
          title="标题"
          description="描述"
        />
      </Card>
      `,
      description: "fun card with action"
    }] as ISnippets[];
