import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css'],
})
export class MenuTopoComponent implements OnInit {
  estaAutenticado: boolean = true;
  menus: any = [
    { rota: 'calculadora', titulo: 'Calculadora' },
    { rota: 'calcular-media', titulo: 'Calcular Média' },
    { rota: 'apolice', titulo: 'Apólice' },
    { rota: 'apolice-seguro', titulo: 'Apólice Seguro' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
