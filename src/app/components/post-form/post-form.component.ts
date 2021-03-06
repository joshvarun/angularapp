import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(editedPost => {
      console.log("Post Updated");
      this.isEdit = false;
      this.updatedPost.emit(editedPost);
    });
  }
  
}
