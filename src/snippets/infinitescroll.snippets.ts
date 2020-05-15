
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <InfiniteScroll hasMore loadMore={loadMore}>
        {loading => <List data={data} loading={loading} />}
      </InfiniteScroll>
      `,
      prefix: `finfinitescroll`,
      description: 'fun infinitescroll base'
    }] as ISnippets[];
