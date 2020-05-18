
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fnotification",
      body: `
      Notification.open({
        message: "$1",
        description:
          '',
        'topCenter',
        onClick() {
          console.log('点击')
        },
        onClose() {
          console.log('通知已关闭')
        }
      })
      `,
      description: 'fun notification base'
    }] as ISnippets[];
