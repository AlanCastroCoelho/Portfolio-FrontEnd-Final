import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skillsInfo:any;
programsList:any;
frontEndList:any;
softSkillsList:any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getInfo().subscribe(data =>{
this.skillsInfo=data.skills;
this.programsList=data.skills.programs;
this.frontEndList=data.skills.frontEnd;
this.softSkillsList=data.skills.softSkills;
      });
  }

}
