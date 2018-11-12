import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'estadisticas', loadChildren: './estadisticas/estadisticas.module#EstadisticasPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
