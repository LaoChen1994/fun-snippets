
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "ftimeline",
      body: `
      <Timeline>
        <Timeline.Item>
          Stage1
        </Timeline.Item>
        <Timeline.Item>
          Stage2
        </Timeline.Item>
      </Timeline>
      `,
      description: 'fun timeline base'
    }, {
      prefix: 'ftimelineicon',
      body: `
      <Timeline>
        <Timeline.Item icon="check-circle" iconColor="#2da641">
          Stage1
        </Timeline.Item>
        <Timeline.Item color="grey">
          Stage2
        </Timeline.Item>
      </Timeline>
      `,
      description: 'fun timeline with custom icon'
    }] as ISnippets[];
