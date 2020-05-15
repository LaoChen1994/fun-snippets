
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fpopover",
      body: `
      <Popover placement="bottomLeft">
        <Popover.Trigger.Click>
          <Button id="trigger" type="primary">
            Click Me
          </Button>
        </Popover.Trigger.Click>
        <Popover.Content className="test" style={{ color: '#000' }}>
          <div style={{ border: '1px solid #d5d5d5' }}>
            <p>popover content</p>
          </div>
        </Popover.Content>
      </Popover>
      `,
      description: 'fun popover base'
    }] as ISnippets[];
