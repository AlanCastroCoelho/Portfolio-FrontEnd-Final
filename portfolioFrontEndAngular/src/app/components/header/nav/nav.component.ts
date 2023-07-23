import { Component, OnInit, ElementRef, AfterViewInit, QueryList, ViewChildren, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.min.css'],
})
export class NavComponent implements OnInit, AfterViewInit{
 
  @ViewChildren('menuItems') menuItems!: QueryList<ElementRef>;

  isLogged = false;
  openMenu = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
    if (this.openMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMenu() {
    this.openMenu = false;
    document.body.classList.remove('no-scroll');
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  }

 ngAfterViewInit(): void {
     this.letterEffect();
 }
 
   letterEffect():void{
    this.menuItems.forEach(item => {
      let word = item.nativeElement.children[0].children[0].innerText.split('');
      item.nativeElement.children[0].innerHTML = '';
      word.forEach((letter: string, idx: number) => {
        item.nativeElement.children[0].innerHTML += `<span style="--index: ${idx};color:white">${letter}</span>`;
      })
  
      let cloneDiv = item.nativeElement.children[0].cloneNode(true);
  
      cloneDiv.style.position = 'absolute';
      cloneDiv.style.top = '0';
      cloneDiv.style.width = '100%';
      item.nativeElement.appendChild(cloneDiv);
    });
  }

}
