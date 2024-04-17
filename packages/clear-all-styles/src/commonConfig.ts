/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-disable no-mixed-spaces-and-tabs */
import { Bold, Italic, List, Autoformat } from "./plugins";
export const commonConfig = {
  toolbar: {
    items: [
      "previousPage",
      "nextPage",
      "pageNavigation",
      "|",
      "comment",
      "|",
      "heading",
      "|",
      "fontFamily",
      "fontSize",
      "fontColor",
      "bold",
      "italic",
      "superscript",
      "subscript",
      "removeFormat",
      "|",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "uploadImage",
      "insertTable",
      "|",
      "undo",
      "redo",
      '|',
        'sourceEditing'
    ],
  },
  lineHeight: {
    // specify your otions in the lineHeight config object. Default values are ['default', '1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2', '2.5']
    options: ["1", "1.2", "1.4", "1.5", "1.6", "2"],
  },
  image: {
    insert: {
      type: "auto",
    },
    // toolbar: [
    //   'imageStyle:inline',
    //   'imageStyle:wrapText',
    //   'imageStyle:breakText',
    //   '|',
    //   'toggleImageCaption',
    //   'imageTextAlternative',
    // ],
    styles: ["alignCenter", "alignLeft", "alignRight"],
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "|",
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "imageStyle:side",
      "|",
      "resizeImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
      "|",
      "toggleTableCaption",
    ],
  },

  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5",
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6",
      },
    ] as any,
  },
  fontSize: {
    options: [
      "default",
      {
        title: "一号",
        model: "28pt",
      },
      {
        title: "二号",
        model: "21pt",
      },
      {
        title: "小二",
        model: "18pt",
      },
      {
        title: "三号",
        model: "15.75pt",
      },
      {
        title: "四号",
        model: "14pt",
      },
      {
        title: "小四",
        model: "12pt",
      },
      {
        title: "五号",
        model: "10.5pt",
      },
      {
        title: "小五",
        model: "9pt",
      },
      {
        title: "六号",
        model: "7.875pt",
      },
      {
        title: "七号",
        model: "5.25pt",
      },
    ],
  },

  fontFamily: {
    options: [
      "default",
      {
        model: "SimSun",
        title: "宋体",
        view: {
          name: "span",
          styles: {
            "font-family": "SimSun",
          },
        },
      },
      {
        model: "FangSong",
        title: "仿宋",
        view: {
          name: "span",
          styles: {
            "font-family": "FangSong",
          },
        },
      },
      {
        model: "SimHei",
        title: "黑体",
        view: {
          name: "span",
          styles: {
            "font-family": "SimHei",
          },
        },
      },
      {
        model: "Microsoft YaHei",
        title: "微软雅黑",
        view: {
          name: "span",
          styles: {
            "font-family": "Microsoft YaHei",
          },
        },
      },
      "Times new Roman",
      "Arial",
      "Calibri",
    ],
  },

  indentBlock: {
    // offset: 2,
    // unit: 'em',
    classes: [
      "indent-1", // The first step - smallest indentation.
      "indent-2",
      "indent-3",
      "indent-4",
      "indent-5", // The last step - biggest indentation.
    ],
  },

  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
  },

  comments: {
    editorConfig: {
      // The list of plugins that will be included in the comments editors.
      extraPlugins: [Bold, Italic, List, Autoformat],
    },
  },
  pagination: {
    // A4
    pageWidth: "21cm",
    pageHeight: "29.7cm",

    pageMargins: {
      top: "20mm",
      bottom: "20mm",
      right: "12mm",
      left: "12mm",
    },
  },

  // SimpleUploadConfig
  simpleUpload: {
    // The URL the images are uploaded to.
    uploadUrl: "/design/doc-write!saveCkeditorPicture",

    // Headers sent along with the XMLHttpRequest to the upload server.
    headers: {},
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "zh-cn",
  licenseKey:
    "cDJiYWF0YlI1WU5QSHMySGdQcnVINkU5MDdzajZ3RFhkR0xlTU44cGlCNU5sSjM2WHh5bWU4eW5kekU3LU1qQXlOREF5TVRVPQ==",
};
