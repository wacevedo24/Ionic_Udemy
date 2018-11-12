import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { ListaPageModule } from '../lista/lista.module';
import { FavoritosPageModule } from '../favoritos/favoritos.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ListaPageModule,
    FavoritosPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
