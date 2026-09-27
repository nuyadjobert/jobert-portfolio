import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ResumeComponent } from './pages/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '' },
];
