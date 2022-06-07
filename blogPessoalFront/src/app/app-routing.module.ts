import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  { /* Rota fixa quando abre o site, redirecionando para 'entrar' e dar
     * uma varredura, checar se a rota realmente existe. */
    path: '', redirectTo: 'entrar', pathMatch: 'full'
  },

  { /* Conecta um componente em uma rota, quando formos para a rota
     * 'entrar', para poder navegar entre os componentes. */
    path: 'entrar', component: EntrarComponent
  },

  { /* Conecta um componente em uma rota, quando formos para a rota
     * 'cadastrar', para poder navegar entre os componentes. */
    path: 'cadastrar', component: CadastrarComponent
  },

  {
    path: 'inicio', component: InicioComponent
  },

  {
    path: 'tema', component: TemaComponent
  },

  {
    path: 'tema-edit/:id', component: TemaEditComponent
  },

  {
    path: 'tema-delete/:id', component: TemaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
