import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css'],
})
export class ApoliceSeguroComponent implements OnInit {
  nomeAssegurado: string;
  sexo: string;
  idade: number;
  valorAutomovel: number;
  resultado: number;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nomeAssegurado = this.route.snapshot.params['nomeAssegurado']
      ? this.route.snapshot.params['nomeAssegurado']
      : '';
    this.sexo = this.route.snapshot.params['sexo']
      ? this.route.snapshot.params['sexo']
      : '';
    this.idade = this.route.snapshot.params['idade']
      ? parseFloat(this.route.snapshot.params['idade'])
      : 0;
    this.valorAutomovel = this.route.snapshot.params['valorAutomovel']
      ? parseFloat(this.route.snapshot.params['valorAutomovel'])
      : 0;
  }

  calcularApoliceSeguro() {
    let valorApoliceSeguro: number = 0;

    if (this.sexo === 'M' && this.idade <= 25) {
      valorApoliceSeguro = this.valorAutomovel * 0.15;
    }

    if (this.sexo === 'M' && this.idade > 25) {
      valorApoliceSeguro = this.valorAutomovel * 0.1;
    }

    if (this.sexo === 'F') {
      valorApoliceSeguro = this.valorAutomovel * 0.08;
    }

    this.resultado = valorApoliceSeguro;
  }
}
