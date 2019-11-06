import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private storage: Storage) { }

  async loginUser(credential) {

    const user = await this.storage.get('user');

    return new Promise( (resolve, reject) => {

      if (user.email === credential.email  && user.password === btoa(credential.password)) {
        resolve('Login correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }


  registerUser(userData) {
    userData.password  = btoa(userData.password);
    return this.storage.set('user', userData);
  }


}
