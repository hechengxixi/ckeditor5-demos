// ckeditor.ts

import { ClassicEditor as ClassicEditorBase } from "@ckeditor/ckeditor5-editor-classic";
import * as Plugins from "./plugins";
import { commonConfig } from "./commonConfig";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = Object.values(Plugins);

ClassicEditor.defaultConfig = commonConfig;