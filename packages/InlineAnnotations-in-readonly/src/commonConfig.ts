/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import {format} from 'date-fns/format';

/* eslint-disable no-mixed-spaces-and-tabs */
export const commonConfig = {
  toolbar: {
    items: [
      'toggler',
      "|",
      "comment",
    ],
  },


  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "zh-cn",
  locale: {
    dateTimeFormat: (date:Date) => format( date, 'yyyy-MM-dd' )
},
  licenseKey:
    "xxx",
};
