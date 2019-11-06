import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: 'required', message: ' El email es requerido' },
      { type: 'pattern', message: 'Email no valido' }
    ],
    password: [
      { type: 'required', message: ' El password es requerido' },
      { type: 'minlength', message: 'Minimo 5 letras para el password' }
    ]
  };

  errorMessage: string = "";

  loginForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private navCtrl: NavController, private storage: Storage) {


    this.loginForm = this.formBuilder.group({

      // tslint:disable-next-line: max-line-length
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),

      // tslint:disable-next-line: max-line-length
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    });
   }

  ngOnInit() {
  }

  loginUser(credenciales) {

    this.autenticacionService.loginUser(credenciales).then( resp => {
      this.errorMessage = '';
      this.storage.set('userLogin', true);
      this.navCtrl.navigateForward('/menu/home');
      console.log(resp);
    }).catch( err => {
      this.errorMessage = err;
    });
    console.log(credenciales);

  }


  goRegister() {
    this.navCtrl.navigateForward('/register');
  }

}
