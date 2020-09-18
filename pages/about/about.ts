import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
})
export class AboutPage {
  termValue: number;
  gadgetValue: number;
  oldValue: number;
  faValue: number;
  mpValue: number;
  tipValue: number;


  constructor(public navCtrl: NavController) {

  }


  compute() {
  this.faValue = this.gadgetValue - this.oldValue;
  this.tipValue = (this.faValue * 0.0130 / 100) * this.termValue;
  this.mpValue = (this.faValue + this.tipValue) / this.termValue;

  }
}