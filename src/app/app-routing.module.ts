import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { PracticeComponent } from './tutorial/practice/practice.component';
import { NgcontentComponent } from './tutorial/ngcontent/ngcontent.component';
import { PromiseComponent } from './tutorial/promise/promise.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
  {path: '', component:PracticeComponent},
  {path: 'practice', component:PracticeComponent},
  {path:'ngcontent', component:NgcontentComponent},
  {path:'promise', component: PromiseComponent},
  {path: 'employees',loadChildren:'./emp/employee.module#EmployeeModule'},
  {path:'404', component:NotfoundComponent},
  {path: '**', redirectTo:'/404'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
