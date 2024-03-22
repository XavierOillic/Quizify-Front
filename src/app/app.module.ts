import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardThemeComponent } from './components/card-theme/card-theme.component';
import { CardIconeComponent } from './components/card-icone/card-icone.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageCreationComponent,
    PageQuizComponent,
    PageStatsComponent,
    FooterComponent,
    CardThemeComponent,
    CardIconeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}