import { ClassicEditor, Essentials, Bold, Italic, Paragraph, List,ListProperties,Plugin ,ButtonView,Heading} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

declare module '@ckeditor/ckeditor5-core' {
  interface EditorConfig {
      timestamp?: { utc: boolean };
  }

  interface PluginsMap {
      [ Timestamp.pluginName ]: Timestamp;
  }
}

class Timestamp extends Plugin {
  public static get pluginName() {
      return 'Timestamp' as const;
  }

  public init(): void {
      const editor = this.editor;

      const utc = editor.config.get( 'timestamp.utc' );

      editor.ui.componentFactory.add( 'timestamp', () => {
          const button = new ButtonView();

          button.set( {
              label: 'Timestamp',
              withText: true
          } );

          button.on( 'execute', () => {
              const now = new Date();

              const date = utc ? now.toUTCString() : now.toString(); // If the configuration option is present, we show a UTC timestamp.

              editor.model.change( writer => {
                  editor.model.insertContent( writer.createText( date ) );
              } );
          } );

          return button;
      } );
  }
}

ClassicEditor
    .create( document.querySelector( '#app' ) as HTMLDivElement, {
        plugins: [ Essentials, Bold, Italic, Paragraph, List,ListProperties ,Timestamp,Heading],
        toolbar: {
            items: [ 'undo', 'redo', '|', 'heading','bold', 'italic',"|",
            "bulletedList",
            "numberedList", 
          'timestamp']
        },
        licenseKey: 'cDJiYWF0YlI1WU5QSHMySGdQcnVINkU5MDdzajZ3RFhkR0xlTU44cGlCNU5sSjM2WHh5bWU4eW5kekU3LU1qQXlOREF5TVRVPQ=='
    } )
    .then( /* ... */ )
    .catch( /* ... */ );
