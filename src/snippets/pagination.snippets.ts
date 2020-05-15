import { ISnippets } from "./interface";

export default  [{
    prefix: "fpab",
    body: `
        <Pagination
        total={50}
        current={current}
        onChange={page => setCurrent(page)}
        />
    `,
    description: 'fun分页器基础用法'
}, {
    prefix: "fpamini",
    body: `
        <Pagination
            total={1000}
            current={current}
            size="small"
            onChange={page => setCurrent(page)}
        />
  `,
  description: 'fun分页器mini'
}, {
    prefix: 'fpajump',
    body: `
        <Pagination
            current={current}
            total={10000}
            pageSize={pageSize}
            pageSizeOptions={[10, 20, 30]}
            showQuickJumper
            onChange={handleChange}
        />
  `,
  description: 'fun分页器带快速跳转'
}] as ISnippets[]