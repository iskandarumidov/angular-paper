import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HundredPComponent } from './hundred-p/hundred-p.component';
import { InitialPageComponent } from './initial-page/initial-page.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'hundredp', component: HundredPComponent },  // you must add your component here

  // { path: '', pathMatch: 'full', redirectTo: 'initial-page' },
  { path: 'initialpage', component: InitialPageComponent }, // move all your appcomponent code to this component
  { path: 'hundredp', component: HundredPComponent },
  // { path: 'signup-form', component: SignupFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HundredPComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
