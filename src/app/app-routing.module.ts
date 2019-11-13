import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { CosaComponent } from './cosa/cosa.component';

const routes: Routes = [
 { path: 'ProRchile',
 component: MainComponent},

 {path: 'cosa',
component: CosaComponent},

 {path: '**',
component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
} )

export class AppRoutingModule { }
