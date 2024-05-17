// main.ts

import ClassicEditor from "./src/ckeditor";

class CommentsIntegration {
  editor: ClassicEditor;
  constructor(editor: ClassicEditor) {
    this.editor = editor;
  }

  static get requires() {
    return ["CommentsRepository"];
  }

  init() {
    const usersPlugin = this.editor.plugins.get("Users");

    // Load the users data.
    const users = [
      {
        id: "user-1",
        name: "Mex Haddox",
      },
      {
        id: "user-2",
        name: "Zee Croce",
      },
    ];
    for (const user of users) {
      usersPlugin.addUser(user);
    }

    // Set the current user.
    usersPlugin.defineMe("user-1");
  }
}

console.time("init");
ClassicEditor
  // Note that you do not have to specify the plugin and toolbar configuration — using defaults from the build.
  .create(document.querySelector("#app") as HTMLElement, {
    extraPlugins: [CommentsIntegration],
    sidebar: {
      container: document.getElementById("sidebar") as HTMLElement,
    },
  })
  .then((editor) => {

     /**
     * method 1
     * result: text color was not cleared.
     */
    // editor.editing.view.document.on('clipboardInput', (evt: any, data: any) => {
    //   if (data.method === 'paste') {
    //     const dataTransfer = data.dataTransfer;
    //     let htmlContent = dataTransfer.getData('text/html');
    //     const styleReg = /(\s+(style|align)="[^"]*")|(<\/?(u|b|i|strong|o:p)(\s.*?)?>)/gi;
    //     htmlContent = htmlContent.replace(styleReg, '');
    //       data.dataTransfer.setData('text/html', htmlContent);
    //       data.content = editor.data.htmlProcessor.toView(htmlContent);
    //   }
    // });

    /**
     * method 2
     * result: image src is null
     */
    editor.plugins.get('ClipboardPipeline').on('inputTransformation', (evt: any, data: any) => {
      let pasteHtml = editor.data.htmlProcessor.toData(data.content);
      const styleReg = /(\s+(style|align)="[^"]*")|(<\/?(u|b|i|strong|o:p)(\s.*?)?>)/gi;
      pasteHtml = pasteHtml.replace(styleReg, '');

      data.content = editor.data.htmlProcessor.toView(pasteHtml);
    });

   
    console.timeEnd("init");
    console.log("Editor was initialized", editor);

  })
  .catch((error) => {
    console.error(error.stack);
  });
