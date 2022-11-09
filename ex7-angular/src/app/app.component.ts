import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Aula10';
  num1: number = 10;
  variavel2: any = "Rafael";
  inativo: boolean = true;
  estiloBotao: string = "btn btn-dark";
  nome : any = "Rafael";

  ngOnInit(): void {
    // this.num1 = "20";
    // this.title = 100;
    this.variavel2 = 50;
  }

  alterarVariavel2() {
    this.variavel2 += 1;
  }
}
