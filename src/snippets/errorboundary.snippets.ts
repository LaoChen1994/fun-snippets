
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <ErrorBoundary onError={handleOnError}>
        <ErrorComponent />
      </ErrorBoundary>
      `,
      prefix: `ferrorboundary`,
      description: 'fun errorboundary.snippets.ts'
    }] as ISnippets[];
