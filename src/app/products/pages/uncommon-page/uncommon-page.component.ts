import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'David';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPrural
  public clients: string[] = ['María','Fernando','Eduardo','David','Melissa','Natalia','Pedro'];
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

  //Keyvalue Pipe
  public person = {
    name:'Fernando',
    age: '36',
    address: 'Ottowa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value))
  );

  public primiseValue: Promise<string> = new Promise((resolve,reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data en la promesa..');
      console.log(('Tenemos data en la promesa..'));
      this.person.name = 'Otro nombre';
    },3500);
  })

}
