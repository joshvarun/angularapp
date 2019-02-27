import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Posts";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styles: []
})
export class PostsComponent implements OnInit {
  currentPost: Post = {
    id: 0,
    title: "",
    body: ""
  };
  posts: Post[];
  isEdit: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  
}
