// vite.config.js
import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );
const postcssPresetEnv = require('postcss-preset-env');

import { defineConfig } from 'vite';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

export default defineConfig( {
    
    
    css:{
        postcss:{
            plugins: [
                /* other plugins */
                /* remove autoprefixer if you had it here, it's part of postcss-preset-env */
                postcssPresetEnv({
                    stage: 0
                })
            ]
        }
    },
    plugins: [
        ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
    ],
} );
