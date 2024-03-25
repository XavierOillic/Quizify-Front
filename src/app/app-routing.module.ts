import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { PageResultsComponent } from './pages/page-results/page-results.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: '', component: PageCreationComponent },
  { path: 'quiz', component: PageQuizComponent },
  { path: 'quiz/5', component: PageGameComponent },
  { path: 'quiz/5/results', component: PageResultsComponent },
  { path: '', component: PageStatsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
