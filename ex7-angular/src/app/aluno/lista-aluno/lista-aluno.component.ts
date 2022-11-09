import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  @Input() num1 : number = 2;
  @Output() num1Change = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  alterarNum1(){
    this.num1 *= 2;
    this.num1Change.emit(this.num1);
  }

}
