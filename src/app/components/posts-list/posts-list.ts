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
  loadingComments: { [postId: number]: boolean } = {};
  loadingPosts: boolean = false;
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.loadingPosts = true;
    this.PostService.getPosts().subscribe({
      next: (result : any) => {
        this.postsList = result;
        this.loadingPosts = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.loadingPosts = false;
        this.cdr.detectChanges();
      },
    });
  }

  toggleComments(postId: number) {
    // Create a new object to trigger change detection
    this.expandedPosts = {
      ...this.expandedPosts,
      [postId]: !this.expandedPosts[postId]
    };

    // Load comments only if expanding and not already loaded
    if (this.expandedPosts[postId] && !this.commentsMap[postId]) {
      this.loadingComments = {
        ...this.loadingComments,
        [postId]: true
      };
      this.getCommentsByPostId(postId);
    }

    // Force change detection
    this.cdr.detectChanges();
  }

  getCommentsByPostId(postId: number) {
    this.CommentService.getCommentsByPostId(postId).subscribe({
      next: (comments: any) => {
        this.commentsMap[postId] = comments;
        this.loadingComments = {
          ...this.loadingComments,
          [postId]: false
        };
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.loadingComments = {
          ...this.loadingComments,
          [postId]: false
        };
        this.cdr.detectChanges();
      }
    });
  }
}
