import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  blogs:any[]=[];
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
      this.getBlogs();
  }

  getBlogs(){
    this.api.getBlogs().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.blogs=[...res];
      },error:(err:any)=>{
        console.log(err);
      }
    })
  }


  shareLink() {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this link!',
        text: 'Here is something interesting for you.',
        url: 'https://example.com' // Replace with the actual link you want to share
      }).then(() => {
        console.log('Link shared successfully.');
      }).catch((error) => {
        console.error('Error sharing the link: ', error);
      });
    } else {
      // Fallback: Copy link to clipboard or use mailto for sharing via email
      this.copyToClipboard('https://example.com');
      alert('Sharing not supported on this browser. Link copied to clipboard.');
    }
  }
  copyToClipboard(link: string) {
    const input = document.createElement('textarea');
    input.value = link;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}
