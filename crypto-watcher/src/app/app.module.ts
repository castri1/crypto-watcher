import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMaterialModuleModule } from './app-material-module/app-material-module.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';


var firebaseConfig = {
  apiKey: "AIzaSyDCwbUKZdqBF1rb1cRD5nWwqIMX3szL-2w",
  authDomain: "crypto-monitor-a09a0.firebaseapp.com",
  databaseURL: "https://crypto-monitor-a09a0.firebaseio.com",
  projectId: "crypto-monitor-a09a0",
  storageBucket: "crypto-monitor-a09a0.appspot.com",
  messagingSenderId: "461645356201"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModuleModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFireDatabaseModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
