import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ListDemonsComponent } from './list-demons/list-demons.component'
import { SummonDemonComponent } from './summon-demon/summon-demon.component'

const routes: Routes = [
  {path:'', pathMatch:'full', component: HomeComponent},
  {path:"list", component: ListDemonsComponent},
  {path:"summon", component: SummonDemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
