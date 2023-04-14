import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-artistic-nav',
  templateUrl: './artistic-nav.component.html',
  styleUrls: ['./artistic-nav.component.css'],
})
export class ArtisticNavComponent implements AfterViewInit {
  ngAfterViewInit() {
    const elementsL = document.querySelectorAll('.from-left');
    const elementsR = document.querySelectorAll('.from-right');
    const elementsT = document.querySelectorAll('.from-top');
    const elementsB = document.querySelectorAll('.from-bottom');

    elementsL.forEach(element => {
      gsap.set(element, { x: '-100%', opacity: 0 });
    });

    elementsR.forEach(element => {
      gsap.set(element, { x: '100%', opacity: 0 });
    });

    elementsT.forEach(element => {
      gsap.set(element, { y: '-50%', opacity: 0 });
    });

    elementsB.forEach(element => {
      gsap.set(element, { y: '50%', opacity: 0 });
    });

    const animateElements = () => {
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;

      elementsL.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + rect.height / 2;

        if (rect.top - windowHeight <= -200) {
          gsap.to(element, { duration: 1.3, x: 0, opacity: 1 });
        } else {
          gsap.to(element, { duration: 1.3, x: '-100%', opacity: 0 });
        }
      });

      elementsR.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + rect.height / 2;

        if (rect.top - windowHeight <= -200) {
          gsap.to(element, { duration: 1.3, x: 0, opacity: 1 });
        } else {
          gsap.to(element, { duration: 1.3, x: '100%', opacity: 0 });
        }
      });

      elementsT.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + rect.height / 2;

        if (rect.top - windowHeight <= -200) {
          gsap.to(element, { duration: 1.3, y: 0, opacity: 1 });
        } else {
          gsap.to(element, { duration: 1.3, y: '-50%', opacity: 0 });
        }
      });

      elementsB.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + rect.height / 2;

        if (rect.top - windowHeight <= 200) {
          gsap.to(element, { duration: 1.3, y: 0, opacity: 1 });
        } else {
          gsap.to(element, { duration: 1.3, y: '50%', opacity: 0 });
        }
      });
    };

    const windowWidth = window.innerWidth;
    if (windowWidth > 1200) {
      animateElements();

      window.addEventListener('scroll', () => {
        animateElements();
      });
    }
  }
} 