import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/app/Models/education';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})

export class EducationEditComponent {
 
  @Input() educationItem?: Education;
  @Output() onItemDelete: EventEmitter<any> = new EventEmitter();
  @Output() onItemUpdate: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;


  myPortfolio:any;
  educationList:any;

  educationListTwo: Education[]=[];
  name:string='';
  img:string='';
  info:string='';
  status:string='';


  constructor(private portfolioData:PortfolioService) { }

  onDelete() {
    this.onItemDelete.emit(this.educationItem);
  }

  ngOnInit(): void {
    this.portfolioData.getInfo().subscribe(data =>{
    this.myPortfolio=data;
    this.educationList=data.education;
    });
    }
    
    EducationEdit(){
      const educattion:Education = {
        name: this.name,
        img: this.img,
        info: this.info,
        status: this.status
      }
      this.isEditing = !this.isEditing;

      this.educationListTwo.push(educattion);
      this.name='';
      this.img='';
      this.info='';
      this.status='';
  }

}
