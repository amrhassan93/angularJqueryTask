import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTempComponent } from './components/my-temp/my-temp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MyTempComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
