import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '@app/_interfaces/book.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments:Comment[]=[];
  @Input() isRoot=false;
  @Output() replyEvent= new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  replyComment(){
  }
  selectCommentToReply(comment:Comment){
    console.log({comment});
    this.replyEvent.emit(comment);
  }


}
