import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageCreationComponent } from './pages/page-creation/page-creation.component';
import { PageQuizComponent } from './pages/page-quiz/page-quiz.component';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';
import { PageCreateCategorieComponent } from './pages/page-create-categorie/page-create-categorie.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: '', component: PageCreationComponent },
  { path: 'createCategorie', component: PageCreateCategorieComponent},
  { path: '', component: PageQuizComponent },
  { path: '', component: PageStatsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
