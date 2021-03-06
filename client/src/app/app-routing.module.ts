
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'students',loadChildren:()=>import('./students/students.module').then(m=>m.StudentsModule)},
  {path:'teachers',loadChildren:()=>import('./teachers/teachers.module').then(m=>m.TeachersModule)},
  {path:'schedules',loadChildren:()=>import('./schedules/schedules.module').then(m=>m.SchedulesModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
