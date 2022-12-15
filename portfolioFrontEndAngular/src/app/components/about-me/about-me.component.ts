import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Models/education';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  myPortfolio:any;
  educationList:any;
  educationListTwo: Education[]=[];
  isEditing: boolean = false;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getInfo().subscribe(data =>{
    this.myPortfolio=data;
    this.educationList=data.education;
    });
  }

  
}
