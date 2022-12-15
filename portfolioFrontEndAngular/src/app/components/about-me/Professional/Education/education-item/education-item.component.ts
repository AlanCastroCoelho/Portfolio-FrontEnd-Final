import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Models/education';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
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

deleteEducation(i:number){

  }

 editEducation(i:number){
    this.isEditing=!this.isEditing;
  }


}
