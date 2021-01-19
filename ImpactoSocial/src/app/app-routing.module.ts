import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColecaoComponent } from './colecao/colecao.component';
import { HomeComponent } from './home/home.component';
import { SaberMaisComponent } from './saber-mais/saber-mais.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},

  {path:'home', component: HomeComponent},
  {path:'saberMais', component: SaberMaisComponent},
  {path:'colecao', component: ColecaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
