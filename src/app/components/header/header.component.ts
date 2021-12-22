import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MyTempComponent } from '../my-temp/my-temp.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,AfterViewInit{

  constructor(private _myTemp:MyTempComponent) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this._myTemp.injectScripts();
  }
}
