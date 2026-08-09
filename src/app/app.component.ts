import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';
  publicKey:any;
  constructor(){
    this.publicKey= environment.publicKey;
    console.log(environment.publicKey);

  }
}
