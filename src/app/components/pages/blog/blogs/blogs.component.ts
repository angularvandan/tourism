import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs:any[]=[
    {
      img:'../../../../assets/blogs/img1.png',
      title:'Discover the Hidden Gems of the Philippines',
      
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
}
