import { Component, OnInit } from '@angular/core';
import {menuItem} from '../models/menuItem';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    dummyMenu: menuItem[] = [
        {id:1,name:'Chole Bhature',price:2,available: true},
        {id:2,name:'Biryani',price:5,available: true},
        {id:3,name:'Veg Biryani',price:5,available: false},
        {id:4,name:'Chapathi',price:10,available: true},
    ];
    
    displayedColumns: string[] = [
        'Select Item','Item Name'
    ];
    datasource = new MatTableDataSource<menuItem>(this.dummyMenu);
    
  constructor() { }

  ngOnInit() {
  }
    selection = new SelectionModel<menuItem>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datasource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
