import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriesProfessionellesService } from '../services/categories-professionnelles.service';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories;
  defaultActivity = "1";
  defaultCodePostal = "";

  constructor(private router: Router, public dialog: MatDialog, private catProService: CategoriesProfessionellesService) { }

  //initialization
  ngOnInit(): void {
    this.getAllCategories();
  }

  //submit the form
  onSubmit(form: NgForm) {
    this.router.navigate(['research', form.value.cp, form.value.act]);
  }

  // open the "savoir faire" dialog
  openDialog() {
    this.dialog.open(DialogComponent,
      {
        width: '600px',
      });
  }

  //get all the categories
  getAllCategories() {
    return this.catProService.getAllCategories().subscribe(
      (result: any) => {
        this.categories = result;
      },
      error => {
        console.log(error);
      }
    );
  }

}






