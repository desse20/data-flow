import { CommentService } from './../../services/comments/comment-service';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommentInterface } from '../../models/comment';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments  implements OnInit {
    commentsList : CommentInterface [] =[];
    CommentService = inject(CommentService);
    private cdr = inject(ChangeDetectorRef);
    loadingComments: boolean = false;
    ngOnInit(): void {
      this.getComments();
  }

  getComments() {
    this.loadingComments = true;
    this.CommentService.getComments().subscribe({
      next: (result : any) => {
        this.commentsList = result;
        this.loadingComments = false;
        this.cdr.detectChanges();
      },
        error: (err) => {
          console.log(err);
          this.loadingComments = false;
          this.cdr.detectChanges();
        },
    });
  }

}
