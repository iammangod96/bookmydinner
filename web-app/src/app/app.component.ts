import { Component } from '@angular/core';
import { UserboardComponent } from './userboard/userboard.component'; 
import { AdminboardComponent } from './adminboard/adminboard.component';
import { ReportComponent } from './report/report.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
}
