import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  apiKey = '0762c970c10a41af86c6257f0bfe0414';
  apiUrl = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey' + this.apiKey;
  headlines: any = [];

  constructor(private http: HttpClient) {};

  ngOnInit() {
    this.grabHeadlines();
  };

  updateHeadlines(provider) {
    this.http.get('https://newsapi.org/v1/articles?source' + provider + '&sortBy=top&apiKey=' + this.apiKey)
    .subscribe(data => {
      let info = data;
      this.headlines = info['articles'];
    })
  };

  grabHeadlines() {
    this.http.get(this.apiUrl)
    .subscribe(data => {
      let info = data;
      this.headlines = info['articles'];
    });
  };
}
