import { Component, OnInit } from '@angular/core';
import template from './data-binding.component.html';

@Component({
  selector: 'data-binding',
  template,
})
export class DataBinding implements OnInit {
  url: string = 'https://github.com/duarte2025';
  cursoAngular: boolean = true;
  urlImage ='http://lorempixel.com/400/200/sports/'
  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }
  constructor() { }

  ngOnInit() {}

}
