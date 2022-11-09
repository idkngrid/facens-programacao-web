import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { PaiComponent } from './pai/pai.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculadora2/:num1/:num2', component: CalculadoraComponent },
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'apolice', component: ApoliceComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  {
    path: 'pai',
    component: PaiComponent,
    children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
