
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class SettingsPage {

  constructor(private navCtrl: NavController) { }
  irahome() {
    this.navCtrl.navigateRoot('/tabs/home');
  }

  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('/auth/login');
  }

  volver() {
    this.navCtrl.back();
  }

}
