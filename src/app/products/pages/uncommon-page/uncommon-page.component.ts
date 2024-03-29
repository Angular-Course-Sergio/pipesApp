import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // #region i18nSelect
  public name: string = 'Sergio';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invatarla',
  };

  changeClient(): void {
    this.name = 'Vanessa';
    this.gender = 'female';
  }

  //#endregion

  // #region i18nPlural

  public clients: string[] = [
    'Sergio',
    'Vanessa',
    'Armida',
    'Juan',
    'Mariana',
    'María',
    'Raúl',
    'Guillermo',
    'Roberto',
    'Esteban',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente espereando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //#endregion

  //#region KeyValue

  public person = {
    name: 'Sergio',
    age: 24,
    gender: 'male',
  };

  //#endregion

  //#region Async

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3500);
  });

  //#endregion
}
