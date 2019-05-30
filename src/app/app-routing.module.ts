import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'cadastro-avaliado', loadChildren: './pages/cadastro-avaliado/cadastro-avaliado.module#CadastroAvaliadoPageModule' },
  { path: 'avaliacao-fisica', loadChildren: './pages/avaliacao-fisica/avaliacao-fisica.module#AvaliacaoFisicaPageModule' },
  { path: 'anamnese', loadChildren: './pages/anamnese/anamnese.module#AnamnesePageModule' },
  { path: 'imc', loadChildren: './pages/imc/imc.module#ImcPageModule' },
  { path: 'medidas', loadChildren: './pages/medidas/medidas.module#MedidasPageModule' },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
