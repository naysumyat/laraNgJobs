import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { EditComponent } from './pages/edit/edit.component';

import { JobsService } from './jobs.service';
import { ShowComponent } from './pages/show/show.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs/:id', component: ShowComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'edit/:id', component: EditComponent },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SubmitComponent,
    NotfoundComponent,
    EditComponent,
    ShowComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
