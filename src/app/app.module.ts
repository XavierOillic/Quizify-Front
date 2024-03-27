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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormCreateCategorieComponent } from './components/form-create-categorie/form-create-categorie.component';
import { PageCreateCategorieComponent } from './pages/page-create-categorie/page-create-categorie.component';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { PageResultsComponent } from './pages/page-results/page-results.component';
import { IconeComponent } from './components/icone/icone.component';
import { FormQuestionReponseComponent } from './components/form-question-reponse/form-question-reponse.component';
import { PostStatsComponent } from './components/post-stats/post-stats.component';

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
    PageNotFoundComponent,
    FormCreateCategorieComponent,
    PageCreateCategorieComponent,
    PageGameComponent,
    PageResultsComponent,
     IconeComponent,
     FormQuestionReponseComponent,
     PostStatsComponent,
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
