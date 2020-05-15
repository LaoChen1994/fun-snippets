
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fpreviewimage",
      body: `
        PreviewImage({
          images: imgArr,
          index: imgArr.indexOf(e.target.src),
          className: 'preImg-extra-class'
        })
      `,
      description: 'fun previewimage base'
    }] as ISnippets[];
