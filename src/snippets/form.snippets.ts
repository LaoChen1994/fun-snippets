import { ISnippets } from "./interface";

export default [{
  prefix: "fformb",
  body: `
  <Form layout="horizontal" state={$1} onChange={() => {}}>
      {bindField => (
          <Form.Item label="用户名">
              {bindField(<Input name="username" />)}
          </Form.Item>
      )}
  </Form>
  `,
  description: "fun form with bind",
}, {
    prefix: 'fformitemb',
    body: `
    {bindField => (
        <Form.Item label="用户名">
            {bindField(<Input name="username" />)}
        </Form.Item>
    )}
    `,
    description: 'fun form item with bind'
}, {
    prefix: 'fformitem',
    body: `
    <Form.Item label="类目一">
        <span>未使用Form.Preview</span>
    </Form.Item>
    `,
    description: 'fun form item'
}]as ISnippets[];
