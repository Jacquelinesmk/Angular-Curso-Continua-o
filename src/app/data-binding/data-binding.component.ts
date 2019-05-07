import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.google.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/';

  valorAtual: string = '';
  valorSalvo;

  isMouseOver: boolean = false;

  /*
  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }
  */

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    //console.log((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
  }

}
