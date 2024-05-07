// main.ts

import DecoupledEditor from "./src/ckeditor";
import html from "./src/data/demo.html?raw";

class CommentsIntegration {
  editor: DecoupledEditor;
  constructor(editor: DecoupledEditor) {
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
DecoupledEditor
  // Note that you do not have to specify the plugin and toolbar configuration — using defaults from the build.
  .create(document.querySelector("#app") as HTMLElement, {
    extraPlugins: [CommentsIntegration],
    sidebar: {
      container: document.getElementById("sidebar") as HTMLElement,
    },
  })
  .then((editor) => {
    const toolbarContainer = document.getElementById('toolbar') as HTMLElement;
    toolbarContainer.appendChild(editor.ui.view.toolbar.element as HTMLElement);
    console.timeEnd("init");
    console.log("Editor was initialized", editor);

    editor.setData(html)

  })
  .catch((error) => {
    console.error(error.stack);
  });
