
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authservice } from './auth.service';


@Injectable({ providedIn: 'root' })
export class ProfilInfosservice {

  constructor(
    public authservice: Authservice,
    private http: HttpClient) {
  }

  // get all the informations of the current user
  getProfilInfo() {
    var data = {
      id: '' + this.authservice.userId
    }
    return this.http.get('http://localhost:8000/api/profil', { params: data });
  }

  // get all the informations of the current user by a given id
  getProfilInfoById(id) {
    var data = {
      id: '' + id
    }
    return this.http.get('http://localhost:8000/api/profil', { params: data });
  }
}
