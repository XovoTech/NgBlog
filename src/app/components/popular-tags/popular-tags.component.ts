import { Component } from '@angular/core';

@Component({
  selector: 'popular-tags',
  styleUrls: ['./popular-tags.component.css'],
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent{
  tags= ['tag1', 'tag2'];
}
