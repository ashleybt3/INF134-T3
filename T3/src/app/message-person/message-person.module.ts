import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePersonPageRoutingModule } from './message-person-routing.module';

import { MessagePersonPage } from './message-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePersonPageRoutingModule
  ],
  declarations: [MessagePersonPage]
})
export class MessagePersonPageModule {}
