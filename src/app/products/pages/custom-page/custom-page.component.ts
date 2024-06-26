import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export class CustomPageComponent {
  public isUpperCase: boolean = false;

  public filter?: keyof Hero;

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Green Lantern', canFly: true, color: Color.green },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  filterByProperty(value: keyof Hero): void {
    this.filter = value;
  }
}
