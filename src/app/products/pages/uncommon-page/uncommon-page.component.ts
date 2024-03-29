import { Component } from '@angular/core';

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
}
