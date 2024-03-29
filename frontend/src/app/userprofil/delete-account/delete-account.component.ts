import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Authservice } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private http: HttpClient,
    public authservice: Authservice,
    private router: Router,
    private _snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private profilService: ProfilService) { }

  //even when account is deleted
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }  

  ngOnInit(): void {
  }

  // send to the api server the id of the deleting "artisan" 
  async deleteAccount(){
    //send my data to the backend server
    try {                                                       //j'envoie a l'Api id de l'utilisateur qui est connecter 
      let result = await this.profilService.deleteArtisan(this.authservice.userId);
      if (result.success) {
        this.router.navigate(['/']); //route   when data was updated well 
        this.matDialog.closeAll();
        this.authservice.isConnected= false;
        this.openSnackBar("vos informations ont été mise a jour ! ", 'close');
      }
    } catch (error) {
      console.log(error);
    }
  }

}
