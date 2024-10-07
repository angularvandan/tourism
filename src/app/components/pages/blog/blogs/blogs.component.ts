import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  innerBlogStatus:boolean=false;

  blogs:any[]=[
    {
      img:'../../../../assets/blogs/img1.png',
      title:'Discover the Hidden Gems of the </br> Philippines',
      
    },
    {
      img:'../../../../assets/blogs/img2.png',
      title:'Wanderlust Unleashed: Your Ultimate Travel Guide',
      
    },
    {
      img:'../../../../assets/blogs/img3.png',
      title:'Journeys Beyond Borders: Travel Stories & Tips',
      
    },
    {
      img:'../../../../assets/blogs/img4.png',
      title:'Paradise Found: Your Guide to Exploring the Philippines',
      
    },
    {
      img:'../../../../assets/blogs/img5.png',
      title:'Philippine Escapades: Where Every Journey is a Story',
      
    },
    {
      img:'../../../../assets/blogs/img6.png',
      title:'Unwind in Paradise: Discover Boracay’s Beauty'
    },
    {
      img:'../../../../assets/blogs/img7.png',
      title:'Boracay Vibes: White Sands and Crystal Waters Await',
      
    },
    {
      img:'../../../../assets/blogs/img8.png',
      title:'Island Dreaming: Explore Boracay’s Hidden Treasures',
      
    },
    {
      img:'../../../../assets/blogs/img9.png',
      title:'Island Hopping Through the Wonders of the Philippines',
      
    }
  ];
  innerBlogData:any;
  ngOnInit(): void {
      
  }

  innerBlog(blog:any){
    this.innerBlogStatus=true;
    this.innerBlogData=blog;
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
