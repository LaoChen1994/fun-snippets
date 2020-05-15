
  import { ISnippets } from "./interface";

  export default  [{
      body: `
      <Dialog
        maskClosable={false}
        visible={visible}
        title="新建联系人"
        onClose={() => setVisible(false)}
        footer={
          <div>
            <Button type="primary">确定</Button>
          </div>
        }
      >
        <div>内容</div>
      </Dialog>
      `,
      prefix: `fdialog`,
      description: 'fun dialog'
    }, {
      prefix: 'fun dialog static',
      body: `
        Dialog.openDialog({
          dialogId: 'num89757',
          title: '使用 openDialog 直接打开对话框',
          children: <div>内容</div>,
          footer: (
            <Button type="primary" onClick={() => Dialog.closeDialog('num89757')}>
              关闭
            </Button>
          )
        })
      `,
      description: 'fun dialog static'
    }] as ISnippets[];
