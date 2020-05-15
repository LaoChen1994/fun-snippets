import { ISnippets } from "./interface";

export default  [{
    prefix: "fgrid",
    body: `
        <Grid gutter={8}>
            <Grid.Item span={3}>
            <'$1'>3</'$1'>
            </Grid.Item>
            <Grid.Item span={3}>
            <'$1'>3</'$1'>
            </Grid.Item>
            <Grid.Item span={3}>
            <'$1'>3</'$1'>
            </Grid.Item>
            <Grid.Item span={3}>
            <'$1'>3</'$1'>
            </Grid.Item>
        </Grid>
    `,
    description: 'fun 网格组件'
}, {
    prefix: 'fgriditem',
    body: `
    <Grid.Item span={'$1'}>
        <div></div>
    </Grid.Item>
    `,
    description: 'fun grid item'

}] as ISnippets[];