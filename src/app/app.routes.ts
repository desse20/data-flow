import { Routes } from '@angular/router';
import { PostsList } from './components/posts-list/posts-list';
import { PostDetail } from './components/post-detail/post-detail';
import { UserDetail } from './components/user-detail/user-detail';
import { UsersList } from './components/users-list/users-list';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { Comments } from './components/comments/comments';

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
    path: 'posts',
    component:PostsList
  },
  {
    path:'posts/:id',
    component:PostDetail
  },
  {
    path:'users',
    component:UsersList
  },
  {
    path:'users/:id',
    component:UserDetail
  },

  {
    path:'comments',
    component:Comments
  },
  {
    path: '**',
    component:NotFound
  }
];
