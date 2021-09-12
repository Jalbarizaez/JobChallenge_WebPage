import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPackagesComponent } from './components/list-packages/list-packages.component';
import { CreatePackageComponent } from './components/create-package/create-package.component';

const routes: Routes = [
  { path: '',redirectTo: 'list-packages', pathMatch: 'full' },
  { path: 'list-packages', component: ListPackagesComponent },
  { path: 'create-package', component: CreatePackageComponent },
  { path: '**', redirectTo: 'list-packages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
