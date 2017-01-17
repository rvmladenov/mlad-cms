import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FileService } from './file.service';

declare var tinymce: any;

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}" class="tinymce-editor"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  constructor(private fileService: FileService) { }

  ngAfterViewInit() {
    var that = this;
    var imageFilePicker = function (field_name, url, type, win) {
      tinymce.activeEditor.windowManager.open({
        title: 'File and Image Picker',
        automatic_uploads: false,
        html: `<input type="file" id="file" name="sampleFile" />`,
        width: 700,
        height: 100,
        buttons: [{
          text: 'Insert',
          onclick: function (context) {
            // TODO: Need to add validation here
            let file = context.view.document.getElementById("file");

            // Should there be done anything else here                    
            that.fileService.uploadFile(file).subscribe(
              data => {
                win.document.getElementById(field_name).value = data.location;
              },
              err => { console.log(err) }
            );

            //do some work to select an item and insert it into TinyMCE
            tinymce.activeEditor.windowManager.close();
          }
        },
        {
          text: 'Close',
          onclick: 'close'
        }],
      });
    };

    tinymce.init({
      selector: '#' + this.elementId,
      file_browser_callback: function (field_name, url, type, win) {
        imageFilePicker(field_name, url, type, win);
      },
      plugins:
      [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools toc'
      ],
      height: 300,
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}