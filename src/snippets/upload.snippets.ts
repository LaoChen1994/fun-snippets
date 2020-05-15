
  import { ISnippets } from "./interface";

  export default  [{
      prefix: "fupload",
      body: `
        <Upload
          action="url"
          placeholder="请选择上传的文件"
          value={fileList}
          onChange={newFileList => setFileList(newFileList)}
        />
      `,
      description: 'fun upload'
    }] as ISnippets[];
