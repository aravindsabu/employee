import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddeployeeComponent } from './addeployee/addeployee.component';
import { ReadComponent } from './read/read.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddeployeeComponent
  },
  {
    path:"search",component:SearchemployeeComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AddeployeeComponent,
    ReadComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
