import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthButtonComponent } from './auth/auth-button.component';
import { FileGuard } from './file/guard/file.guard';

const routes: Routes = [
  {path: '', component: AuthButtonComponent},
  //{ path: '', pathMatch: 'full', redirectTo: '/file' },

  { path: 'file', loadChildren: () => import('./file/file.module').then(m => m.FileModule)},

  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
