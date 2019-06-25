import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  para="this is test";
  flag=false;

  chnageFlag=function(){
    this.flag=!this.flag;
  }
}
