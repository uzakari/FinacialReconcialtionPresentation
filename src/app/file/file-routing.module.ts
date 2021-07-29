import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file.component';
import { FileGuard } from './guard/file.guard';

const routes: Routes = [
  {path: '', component: FileComponent, canActivate: [FileGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
