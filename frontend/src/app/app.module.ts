import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './home/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './signuser/login/login.component';
import { SignupComponent } from './signuser/signup/signup.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserprofilComponent } from './userprofil/userprofil.component';
import { MapComponent } from './map/map.component';
import { AroundMeComponent } from './around-me/around-me.component';
import { LocationService } from './services/location.service';
import { ResearchService } from './services/research.service';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CategoriesProfessionellesService } from './services/categories-professionnelles.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Authservice } from './services/auth.service';
import { ArtisanUpdatePersInfoComponent } from './userprofil/artisan-update-pers-info/artisan-update-pers-info.component';
import { DeleteAccountComponent } from './userprofil/delete-account/delete-account.component';
import { ArtisanUpdateBusInfoComponent } from './userprofil/artisan-update-bus-info/artisan-update-bus-info.component';
import { ProfilInfosservice } from './services/profil-infos.service';
import { ArtisanUpdatePasswordComponent } from './userprofil/artisan-update-password/artisan-update-password.component';
import { ArtisanUpdateTravauxComponent } from './userprofil/artisan-update-travaux/artisan-update-travaux.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ArtisanUpdateTravauxListComponent } from './userprofil/artisan-update-travaux-list/artisan-update-travaux-list.component';
import { ProfilService } from './services/profil.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    LoginComponent,
    SignupComponent,
    UserprofilComponent,
    MapComponent,
    AroundMeComponent,
    ArtisanUpdatePersInfoComponent,
    DeleteAccountComponent,
    ArtisanUpdateBusInfoComponent,
    ArtisanUpdatePasswordComponent,
    ArtisanUpdateTravauxComponent,
    ArtisanUpdateTravauxListComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatStepperModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [
    LocationService,
    ResearchService,
    ProfilInfosservice,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    CategoriesProfessionellesService,
    Authservice,
    ProfilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
