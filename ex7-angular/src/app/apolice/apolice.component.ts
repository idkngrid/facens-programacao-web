import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css'],
})
export class ApoliceComponent implements OnInit {
  ra: number;
  nome: string;
  email: string;
  celular: string;

  constructor() {}

  ngOnInit(): void {}
}
