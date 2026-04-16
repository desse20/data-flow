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
    ngOnInit(): void {
      this.getComments();
  }

  getComments() {
    this.CommentService.getComments().subscribe({

      next: (result : any) => {
        //debugger;
        this.commentsList = result;
        this.cdr.detectChanges();
      },
        error: (err) => {
          console.log(err);
        },
    });
  }

}
