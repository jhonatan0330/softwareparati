import { Route } from '@angular/router';
import { Error404Component } from 'app/layout/common/error-404/error-404.component';

export const error404Routes: Route[] = [
    {
        path     : '',
        component: Error404Component
    }
];
