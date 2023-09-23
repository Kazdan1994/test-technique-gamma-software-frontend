import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import type { ExcelData } from '../utils';

@Injectable()
export class UploadService {
  private data: ExcelData[];
  private headerRow: string[] = [];

  constructor() {
    this.data = [];
  }

  private dataComplete = new Subject<any>();

  dataComplete$ = this.dataComplete.asObservable();

  getData(): ExcelData[] {
    const storedData = localStorage.getItem('data');

    if (storedData) {
      this.data = JSON.parse(storedData);
    }

    return this.data;
  }

  setData(data: ExcelData[]): void {
    this.data = data;

    localStorage.setItem('data', JSON.stringify(data));
  }

  getHeaderRow(): string[] {
    const storedData = localStorage.getItem('headerRow');

    if (storedData) {
      this.headerRow = JSON.parse(storedData);
    }

    return this.headerRow;
  }

  setHeaderRow(headerRow: string[]): void {
    this.headerRow = headerRow;

    localStorage.setItem('headerRow', JSON.stringify(headerRow));
  }
}
