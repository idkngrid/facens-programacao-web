import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';



@NgModule({
  declarations: [
    ListaAlunoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListaAlunoComponent
  ]
})
export class AlunoModule { }
