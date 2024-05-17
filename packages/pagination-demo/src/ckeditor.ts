// ckeditor.ts

import { DecoupledEditor  as DecoupledEditorBase } from "@ckeditor/ckeditor5-editor-decoupled";
import * as Plugins from "./plugins";
import { commonConfig } from "./commonConfig";

export default class DecoupledEditor extends DecoupledEditorBase {}

DecoupledEditor.builtinPlugins = Object.values(Plugins);

DecoupledEditor.defaultConfig = commonConfig as any;
