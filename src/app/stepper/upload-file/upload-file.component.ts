import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { convertExcelFile } from '../../../utils';
import type { FileUploadHandlerEvent } from 'primeng/fileupload/fileupload.interface';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  submitted: boolean = false;

  constructor(
    private uploadService: UploadService,
    private router: Router,
  ) {}

  uploadFile(event: FileUploadHandlerEvent) {
    const uploadedFile = event.files[0];

    if (
      uploadedFile &&
      uploadedFile.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const buffer = new Uint8Array(fileReader.result as ArrayBuffer);
        const data = convertExcelFile(buffer);

        this.uploadService.setData(data);

        this.router.navigate(['header']);
      };

      fileReader.readAsArrayBuffer(uploadedFile);
      return;
    }

    this.submitted = true;
  }
}
