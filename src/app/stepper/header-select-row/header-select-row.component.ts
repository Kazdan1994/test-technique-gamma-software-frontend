import { Component } from '@angular/core';
import { UploadService } from '../../upload.service';
import { ExcelData } from '../../../utils';
import { TableRowSelectEvent } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-select-row',
  templateUrl: './header-select-row.component.html',
  styleUrls: ['./header-select-row.component.scss'],
})
export class HeaderSelectRowComponent {
  readonly data: ExcelData[];

  selectedRow: ExcelData;

  constructor(
    private uploadService: UploadService,
    private router: Router,
  ) {
    this.data = this.uploadService.getData();

    this.selectedRow = this.data[0];
  }

  onRowSelect($event: TableRowSelectEvent) {
    this.selectedRow = $event.data;

    this.uploadService.setHeaderRow(Object.values(this.selectedRow));
  }

  nextPage(): void {
    this.router.navigate(['columns']);
  }

  prevPage(): void {
    this.router.navigate(['']);
  }
}
