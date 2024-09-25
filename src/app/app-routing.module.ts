import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'blogs', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'tours', loadChildren: () => import('./components/pages/destinations/destinations.module').then(m => m.DestinationsModule)
  },
  { 
    path: 'about', loadComponent: () => import('./components/pages/aboutus/aboutus.component').then(c => c.AboutusComponent)
  },
  { 
    path: 'contact', loadComponent: () => import('./components/pages/contactus/contactus.component').then(c => c.ContactusComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
