import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddNote } from './pages/add-note/add-note';
import { Review } from './pages/review/review';
import { CareerAdvice } from './pages/career-advice/career-advice';
import { authGuard } from './guards/auth-guard';
import { CareerAdvice2 } from './pages/career-advice2/career-advice2';
import { SuccessStories } from './pages/success-stories/success-stories';
import { Settings } from './pages/settings/settings';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/jilaliapp/dashboard',
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
        path: 'career2',
        component: CareerAdvice2
    },
    {
        path: 'jilaliapp',
        canActivate: [authGuard],
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
            {
                path : 'success-stories',
                component : SuccessStories
            },
            {
                path : 'settings',
                component : Settings
            }
        ]
    }
];
