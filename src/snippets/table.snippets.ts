
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftable",
      body: `
      <Table rowKey="id" dataSource={data} columns={columns} />
      `,
      description: 'fun table base'
    }, {
      prefix: "ftablestrip",
      body: `
      <Table striped rowKey="id" dataSource={data} columns={columns} />
      `,
      description: 'fun table with description'
    },{
      prefix: "ftablepage",
      body: `
      <Table
        rowKey="id"
        pagination
        dataSource={data}
        columns={columns}
      />
      `,
      description: 'funtable with pagination'
    },{
      prefix: "ftableexpand",
      body: `
      <Table rowKey="key" dataSource={data} columns={columns} expand={{ mode: 'expend' }} />
      `,
      description: 'fun table with expanded'
    }, {
      prefix: "ftablejsx",
      body: `
      <Table rowKey="id" bordered dataSource={data}>
        <ColumnGroup title="名称">
          <Column title="titile1" dataIndex="key1" />
          <Column title="title2" dataIndex="key2" />
        </ColumnGroup>
        <Column title="title3" dataIndex="key3">
          {
            (name, record) => {
              if (record.status === 1) {
                return (
                  <Tag bordered={false} type="success" size="small">
                      已启用
                  </Tag>
                )
              }
              return (
                <Tag bordered={false} type="error" size="small">
                    已禁用
                </Tag>
              )
            }
          }
        </Column>
        <Column title="title3" dataIndex="key4" />
      </Table>
      `,
      description: 'fun table jsx'
    }, {
      prefix: 'fcolumn',
      body: `
      <Column title="别名" dataIndex="alias" />
      `,
      description: 'fun column'
    }, {
      prefix: 'fcolumnchild',
      body: `
      <Column title="title3" dataIndex="key3">
        {
          (name, record) => {
            if (record.status === 1) {
              return (
                <Tag bordered={false} type="success" size="small">
                    已启用
                </Tag>
              )
            }
            return (
              <Tag bordered={false} type="error" size="small">
                  已禁用
              </Tag>
            )
          }
        }
      </Column>
      `,
      description: 'fun column with children expanded'

    }] as ISnippets[];
