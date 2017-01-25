import { Component } from '@angular/core';

import { NavController, Nav} from 'ionic-angular';
import { CoursePage } from '../course/course';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cursePage = CoursePage;

  constructor(
    public navCtrl: NavController,
    private nav: Nav
  ) { 
    
  }

  goToCourse() {
    this.nav.push( CoursePage );
    console.log("Entro en el enlace")
  }

}
