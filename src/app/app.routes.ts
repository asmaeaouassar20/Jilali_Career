import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddNote } from './pages/add-note/add-note';
import { Review } from './pages/review/review';
import { CareerAdvice } from './pages/career-advice/career-advice';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'jilaliapp',
        canActivate : [authGuard],
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'new-note',
                component: AddNote
            },
            {
                path: 'review',
                component: Review
            },
            {
                path: 'career',
                component: CareerAdvice
            },
        ]
    }
];
