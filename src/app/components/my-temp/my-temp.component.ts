import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-temp',
  templateUrl: './my-temp.component.html',
  styleUrls: ['./my-temp.component.scss']
})
export class MyTempComponent implements OnInit ,AfterViewInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = '../../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = '../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = '../../assets/vendor/jquery.easing/jquery.easing.min.js';
    this.elementRef.nativeElement.appendChild(s);


    s.src = '../../assets/vendor/isotope-layout/isotope.pkgd.min.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = '../../assets/vendor/venobox/venobox.min.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = '../../assets/vendor/owl.carousel/owl.carousel.min.js';
    this.elementRef.nativeElement.appendChild(s);

    s.src = '../../assets/vendor/aos/aos.js';
    this.elementRef.nativeElement.appendChild(s);
   
  }

}
