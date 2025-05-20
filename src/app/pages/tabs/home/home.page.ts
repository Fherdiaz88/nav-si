import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('400ms', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomePage  {

  constructor(private navCtrl: NavController) { }
  irasettings(){
    this.navCtrl.navigateRoot('/settings');
  }
  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('/auth/login');
  }

 




}
