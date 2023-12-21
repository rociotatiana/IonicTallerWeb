import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guard/home.guard';
import { NoHomeGuard } from './guard/no-home.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[HomeGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  /*{
    path: 'editar-proyecto',
    loadChildren: () => import('./home/editar-proyecto/editar-proyecto.module').then( m => m.EditarProyectoPageModule),
    canActivate:[HomeGuard]
  }, */
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate:[NoHomeGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    //canActivate:[NoHomeGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[HomeGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }