import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ListaPage } from '../lista/lista.page';
import { FavoritosPage } from '../favoritos/favoritos.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(lista:lista)',
        pathMatch: 'full',
      },
      {
        path: 'lista',
        outlet: 'lista',
        component: ListaPage
      },
      {
        path: 'favoritos',
        outlet: 'favoritos',
        component: FavoritosPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(lista:lista)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
