import { Component, OnInit } from '@angular/core';
import {menuItem} from '../models/menuItem';
import {MatTableDataSource} from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: ['./userboard.component.css']
})
export class UserboardComponent implements OnInit {
  
    dummyMenu: menuItem[] = [
        {id:1,name:'Chole Bhature',price:2,available: true},
        {id:2,name:'Biryani',price:5,available: true},
        {id:3,name:'Veg Biryani',price:5,available: false},
        {id:4,name:'Chapathi',price:10,available: true},
    ];
    
    displayedColumns: string[] = [
        'ID', 'Item Name','Select Item'
    ];
    datasource = new MatTableDataSource<menuItem>(this.dummyMenu);
    form : FormGroup;
    selectedEntry = this.dummyMenu[0];
    
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
      console.log(this.dummyMenu);
      this.form = this.fb.group({
        'empId' : new FormControl('',Validators.required)  
      });
  }
    
  onSubmit() {
      if(this.form.valid) {
        const empId = this.form.get('empId').value;
        console.log(empId);
        console.log(this.selectedEntry);   
      }
  }

    onSelectionChange(item) {
        this.selectedEntry = item;
    }
}
