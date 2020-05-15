
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fnav",
      body: `
      <Nav
        defaultOpenKeys={['/path1', '/path1/path2/path3']}
        defaultSelectedKeys={['/path1', '/path1/path2/path3', '/path1/path2/path3/1']}
        onClick={e => console.log('Nav.Item Clicked', e)}
      >
        <Nav.SubNav title="name1" icon="phone-o" key="/path1">
          <Nav.Item title="subname1" key="/path1/path2/1" />
          <Nav.SubNav title="subname2" key="/path1/path2/path3">
            <Nav.Item title="tname1" key="/path1/path2/path3/1" />
            <Nav.Item title="tname2" key="/path1/path2/path3/2" />
          </Nav.SubNav>
        </Nav.SubNav>
        <Nav.Item title="name2" icon="work-order-o" key="/ticket" />
      </Nav>
      `,
      description: 'fun nav base'
    }] as ISnippets[];
