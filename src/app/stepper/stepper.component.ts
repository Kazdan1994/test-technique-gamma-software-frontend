import { Component, OnInit } from '@angular/core';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Upload file',
        routerLink: '',
      },
      {
        label: 'Select header row',
        routerLink: 'header',
      },
      {
        label: 'Match Columns',
        routerLink: 'columns',
      },
      {
        label: 'Validate data',
        routerLink: 'validate',
      },
    ];
  }
}
