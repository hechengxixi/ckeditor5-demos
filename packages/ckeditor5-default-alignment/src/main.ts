import { ClassicEditor, Essentials, Bold, Italic, Paragraph, List,ListProperties,Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar ,Heading,Alignment} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import './style.css'


ClassicEditor
    .create( document.querySelector( '#app' ) as HTMLDivElement, {
        plugins: [ Essentials, Bold, Italic, Paragraph, List,ListProperties ,Alignment,Heading,Table,
            TableCaption,
            TableCellProperties,
            TableColumnResize,
            TableProperties,
            TableToolbar,],
        toolbar: {
            items: [ 'undo', 'redo', '|', 'heading','bold', 'italic','alignment',"|",
            "bulletedList",
            "numberedList", 
          'insertTable']
        },
        table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties',
				'toggleTableCaption',
			],
            tableCellProperties: {
                defaultProperties: {
                    horizontalAlignment: 'center',
                    verticalAlignment: 'middle',
                }
            }
		},
        licenseKey: 'cDJiYWF0YlI1WU5QSHMySGdQcnVINkU5MDdzajZ3RFhkR0xlTU44cGlCNU5sSjM2WHh5bWU4eW5kekU3LU1qQXlOREF5TVRVPQ=='
    } )
    .then( /* ... */ )
    .catch( /* ... */ );
