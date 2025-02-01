import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'summarizer', loadComponent: () => import('./ai-summarizer/ai-summarizer.component').then(m => m.AiSummarizerComponent) }

];
