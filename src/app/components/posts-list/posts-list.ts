import { PostService } from './../../services/posts/post-service';
import { CommentService } from './../../services/comments/comment-service';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PostInterface } from '../../models/post';
import { CommentInterface } from '../../models/comment';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList  implements OnInit {
  postsList :PostInterface [] = [];
  PostService = inject(PostService);
  CommentService = inject(CommentService);
  private cdr = inject(ChangeDetectorRef);
  commentsMap: { [postId: number]: CommentInterface[] } = {};
  expandedPosts: { [postId: number]: boolean } = {};
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.PostService.getPosts().subscribe({

      next: (result : any) => {
        //debugger;
        this.postsList = result;
        this.cdr.detectChanges();
      },
        error: (err) => {
          console.log(err);
        },
    });
  }

  toggleComments(postId: number) {
    this.expandedPosts[postId] = !this.expandedPosts[postId];

    if (this.expandedPosts[postId] && !this.commentsMap[postId]) {
      this.getCommentsByPostId(postId);
    }
  }

  getCommentsByPostId(postId: number) {
    this.CommentService.getCommentsByPostId(postId).subscribe({
      next: (comments: any) => {
        this.commentsMap[postId] = comments;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
