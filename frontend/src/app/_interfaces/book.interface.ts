import { User } from "./user.interface";

export interface Book {
    id: number;
    filename: string;
    type: string;
    domain: string;
    faculty: string;
    author: User;
    liked:number;
    disliked:number;
    commented:number;
    commentsWithReply:Comment[];
    rating:number;
    rated:number;
    accepted:number;
    description?: string;
    file?:string;
    image?:string;
  }

export interface Comment {
    id: number;
    text: string;
    parentId: number;
    showReplies: boolean;
    author: User;
    replyComment: Comment[];
    created_at: Date;
}

