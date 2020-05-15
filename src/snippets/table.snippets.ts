
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
    }] as ISnippets[];
