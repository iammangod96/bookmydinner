import { Component, OnInit } from '@angular/core';
import {reportItem} from '../models/reportItem';
import {MatTableDataSource} from '@angular/material';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    dummyReport: reportItem[] = [
        {name: 'Biryani', quantity: 15},
        {name: 'Chapathi', quantity: 20}
    ];     
    
    displayedColumns: string[] = [
        'Item Name','Quantity'
    ];
    datasource = new MatTableDataSource<reportItem>(this.dummyReport);
    
   today = new Date();
    
  constructor() {
      
  }

  ngOnInit() {
  }

}
