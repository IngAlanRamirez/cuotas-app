import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonButton,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonCol,
    IonRow,
    IonGrid,
    IonCardSubtitle,
    IonButton,
    IonItem,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
