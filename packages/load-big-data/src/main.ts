// main.ts

import ClassicEditor from "./ckeditor";
import html from "./data/demo.html?raw";

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
    editor.editing.view.domConverter.unsafeElements = ["script"];
    console.timeEnd("init");
    console.log("Editor was initialized", editor);

    console.time("load");
    editor.setData(html);
    console.timeEnd("load");
  })
  .catch((error) => {
    console.error(error.stack);
  });
