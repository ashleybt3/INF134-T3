import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPage2PageRoutingModule } from './item-page2-routing.module';

import { ItemPage2Page } from './item-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPage2PageRoutingModule
  ],
  declarations: [ItemPage2Page]
})
export class ItemPage2PageModule {}
