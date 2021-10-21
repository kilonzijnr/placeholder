import { Component, OnInit } from '@angular/core'/'httpclient';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {  
  constructor(httpclient: HttpClient) {  
    http.get('https://jsonplaceholder.typicode.com/posts')  
      .subscribe(response => {  
        console.log(response);  
      });  
  }  
}   
