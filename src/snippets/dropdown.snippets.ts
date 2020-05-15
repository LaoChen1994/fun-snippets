import { ISnippets } from "./interface";

export default  [{
    prefix: "fddone",
    body: `
        <Dropdown>
            <Button type="primary">
                menus
                <Icon type="fold" />
            </Button>
            <Dropdown.Overlay>
            <Menu onClick={handleMenuClick}>
                <MenuItem key="category_a">a1</MenuItem>
                <MenuItem key="category_b">a2</MenuItem>
            </Menu>
            </Dropdown.Overlay>
        </Dropdown>
    `,
    description: 'fun一级下拉菜单'
}, {
    prefix: "fddtwo",
    body: `
    () => {
        const dataList = [
            { name: '首页', href: '//www.youzan.com' },
            { name: '应用中心', href: '//www.youzan.com' },
            { name: '营销中心' },
        ];
        
        return <Breadcrumb breads={dataList} />;
    }
    `,
    description: 'fun二级下拉菜单'
}] as ISnippets[]