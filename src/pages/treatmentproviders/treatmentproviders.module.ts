import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreatmentprovidersPage } from './treatmentproviders';
import {NguiMapModule} from '@ngui/map';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    TreatmentprovidersPage,
  ],
  imports: [
    NguiMapModule,
    IonicPageModule.forChild(TreatmentprovidersPage),
  ],
})
export class TreatmentprovidersPageModule {}
