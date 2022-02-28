import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category/:category',
        component: DetailsComponent
      }
    ]
  },
  // {
  //   path: 'category',
  //   component: c
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
