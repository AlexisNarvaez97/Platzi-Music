import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'Email no valido' }
    ],
    password: [
      { type: 'required', message: 'El password es requerido'},
      { type: 'minlength', message: 'Minimo 5 letras para el password'}
    ],
    nombre: [
      { type: 'required', message: 'El nombre es requerido'}
    ],
    apellido: [
      { type: 'required', message: 'El apellido es requerido'}
    ]
  }

  // tslint:disable-next-line: max-line-length
  constructor(private FormBuilder: FormBuilder, private storage: Storage, private navCtrl: NavController, private authService: AutenticacionService ) { 


    this.registerForm = this.FormBuilder.group({
      // tslint:disable-next-line: max-line-length
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),

      // tslint:disable-next-line: max-line-length
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),

      nombre: new FormControl('', Validators.compose([Validators.required])),

      apellido: new FormControl('', Validators.compose([Validators.required]))
    });

  }

  ngOnInit() {
  }

  register(userData) {

    this.authService.registerUser(userData).then( () => {
      this.navCtrl.navigateBack('/login');
    });
    // console.log(crecenciales);
  }

  goLogin() {
    this.navCtrl.navigateBack('/login');
  }

}
