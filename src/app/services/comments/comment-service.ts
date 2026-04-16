import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
    http = inject(HttpClient);
    getComments() {
      return this.http.get('https://jsonplaceholder.typicode.com/comments');
    }
    getCommentsByPostId(postId: number) {
      return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    }
  }
