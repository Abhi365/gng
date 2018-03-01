import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'subscription', loadChildren: 'app/admin/account-management/subscription/subscription.module#SubscriptionModule' },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);