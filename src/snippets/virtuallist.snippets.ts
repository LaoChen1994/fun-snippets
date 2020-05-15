
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fvirtuallist",
      body: `
      <VirtualList dataSource={list} itemHeight={80}>
        {({ positionStyle, item, index }) => {
          return (
            <div key={item.id}>
              Index: {item.index}
            </div>
          )
        }}
      </VirtualList>
      `,
      description: 'fun virtuallist base'
    }] as ISnippets[];
