import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PresensiComponent } from './presensi/presensi.component';
const routes: Routes = [
  {
    path:'',component:MainComponent,
    children: [
      { path: 'presensi', component: PresensiComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
