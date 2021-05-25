import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {
  loadPhoto = false;

  constructor() { }

  ngOnInit() {
  }
  displayPhoto(){
    this.loadPhoto = true;
    
  }
}
