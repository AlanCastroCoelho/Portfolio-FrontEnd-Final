import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RedesServiceService } from 'src/app/services/redes-service.service';
import { Redes } from 'src/app/Models/redes';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent implements OnInit {

  selectedRed: Redes = null;
  editRedForm: FormGroup;

  constructor( private router: Router,
    public modal: NgbActiveModal,
    public formbuilder: FormBuilder,
    private sRed: RedesServiceService) { }

  ngOnInit(): void {
    console.log(this.selectedRed);
    const id = this.selectedRed.id;
    this.setForm(id);
  }

  onUpdate() {
    this.selectedRed = this.editRedForm.value;
    this.sRed.update(this.selectedRed.id, this.selectedRed).subscribe(
      (data) => {
        this.router.navigateByUrl('');
      },
      (err) => {}
    );
  }

  private setForm(id: number) {
    this.editRedForm = this.formbuilder.group({
      id: [this.selectedRed.id],
      nombreR: [this.selectedRed.nombreR],
      urlRed: [this.selectedRed.urlRed],
      urlIcon: [this.selectedRed.urlIcon]
    });
  }
}