
import { Command, Plugin,Editor } from '@ckeditor/ckeditor5-core';
import { SwitchButtonView } from '@ckeditor/ckeditor5-ui';


export class Toggler extends Plugin {
    static get pluginName() {
        return 'Toggler'
    }

    static get requires() {
        return [ TogglerUI, TogglerCommand ]
    }


    init() {
        const editor = this.editor;

        editor.commands.add( 'toggler', new TogglerCommand( editor ) );

    }
};

class TogglerUI extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'toggler', locale => {
            const view = new SwitchButtonView( locale );
            const command = editor.commands.get( 'toggler' );

            view.set( {
                label: 'ReadOnly',
                withText: true,
                tooltip: true,
                isToggleable: true,
                isEnabled:true,
                isOn:false
            } );

            // A callback executed once the button is clicked.
            view.on( 'execute', () => {
                editor.execute( 'toggler' );
            } );

            view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

            return view;
        } );
    }
};

class TogglerCommand extends Command {
    constructor( editor:Editor ) {
        super( editor );

        // This command will remain enabled even when the editor is read-only.
        this.affectsData = false;
    }
    refresh() {
        // Disable the command if the editor is in the read-only mode.
        this.isEnabled = true;
    }

    execute() {
        // Activate pasting plain text.
        this.value = !this.value;

        if(this.value){
            this.editor.enableReadOnlyMode("1")
        }else{
            this.editor.disableReadOnlyMode("1")
        }
    }
}
