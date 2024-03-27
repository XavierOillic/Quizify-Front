import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';
import { PageCreateCategorieComponent } from './pages/page-create-categorie/page-create-categorie.component';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { PageResultsComponent } from './pages/page-results/page-results.component';
import { PageCreateQuestionComponent } from './pages/page-create-question/page-create-question.component';
 //chemin de mes pages
const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'creation', component: PageCreationComponent },
  { path: 'createCategorie', component: PageCreateCategorieComponent },
  {
    path: 'creerQuestion/:categorieId',
    component: PageCreateQuestionComponent,
  }, ///:categorieId
  { path: 'quiz', component: PageQuizComponent },
  { path: 'quiz/5', component: PageGameComponent },
  { path: 'quiz/5/results', component: PageResultsComponent },
  { path: 'stats', component: PageStatsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
