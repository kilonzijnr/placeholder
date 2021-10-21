import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService}  from 'src/app/post.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {  
  post:Array<any>
  constructor(private json:PostService){ 

    this.post= new Array<any>()

  };  
  getPost(){
    this.json.getData().subscribe((post) => {
      console.log(post)
      this.post = post
    })
  }
  
ngOnInit():void{
  this.getPost()
}

}   
