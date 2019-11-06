import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.storage.set('userLogin', false);
    this.navCtrl.navigateRoot('/login');
  }

}
