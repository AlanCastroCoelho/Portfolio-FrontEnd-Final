import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent{
  prevScrollpos = window.pageYOffset;
  hideNav = false;
  blurNav = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:Event) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.hideNav = false;
    } else if (currentScrollPos > 1050) {
      this.hideNav = true;
    }
    this.prevScrollpos = currentScrollPos;
  }
}
