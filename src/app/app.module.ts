import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';
import { File } from '../services/io/file.service'
import { Factory } from '../services/objects/factory.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SectionsPage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SectionsPage,
    DetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, File, Factory]
})
export class AppModule { }
