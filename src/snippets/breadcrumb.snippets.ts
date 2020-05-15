import { ISnippets } from "./interface";

export default  [{
    prefix: "fbreadit",
    body: `
    <Breadcrumb>
        <Breadcrumb.Item href="//www.youzan.com" name="首页" />
        <Breadcrumb.Item href="//www.youzan.com" name="应用中心" />
        <Breadcrumb.Item name="营销中心" />
    </Breadcrumb>
    `,
    description: 'fun面包屑导航使用item'
}, {
    prefix: "fbreadbase",
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
    description: 'breadcrumb面包屑组件带breads'
}] as ISnippets[];