/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-disable no-mixed-spaces-and-tabs */
// import { Bold, Italic, List, Autoformat } from "./plugins";
export const commonConfig = {
  toolbar: {
    items: [
      "comment",
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

  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "zh-cn",
  licenseKey:
    "cDJiYWF0YlI1WU5QSHMySGdQcnVINkU5MDdzajZ3RFhkR0xlTU44cGlCNU5sSjM2WHh5bWU4eW5kekU3LU1qQXlOREF5TVRVPQ==",
};
