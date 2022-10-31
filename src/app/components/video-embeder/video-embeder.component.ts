import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embeder',
  templateUrl: './video-embeder.component.html',
  styleUrls: ['./video-embeder.component.scss']
})
export class VideoEmbederComponent implements OnInit {
  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;

  youtubeUrl = 'https://www.youtube.com/embed/'
  vimeoUrl = 'https://www.vimeo.com/embed/';

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {

   }

  ngOnInit(): void {
    switch(this.site){
      case 'YouTube':
        this.videoUrl = this.getSafeUrl(this.youtubeUrl + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl(this.vimeoUrl + this.key);
        break;
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
