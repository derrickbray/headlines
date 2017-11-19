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

  Sources: any = [
    {name: 'ABC News (AU)', url:'abc-news-au'},
    {name: 'Al Jazeera English', url:'al-jazeera-english'},
    {name: 'Ars Technica', url:'ars-technica'},
    {name: 'The Associated Press', url:'associated-press'},
    {name: 'BBC News', url:'bbc-news'},
    {name: 'BBC Sport', url:'bbc-sport'},
    {name: 'Bloomberg', url:'bloomberg'},
    {name: 'Business Insider', url:'business-insider'},
    {name: 'Business Insider (UK)', url:'business-insider-uk'},
    {name: 'Buzzfeed', url:'buzzfeed'},
    {name: 'CNBC', url:'cnbc'},
    {name: 'CNN', url:'cnn'},
    {name: 'Daily Mail', url:'daily-mail'},
    {name: 'Engadget', url:'engadget'},
    {name: 'Entertainment Weekly', url:'entertainment-weekly'},
    {name: 'ESPN', url:'espn'},
    {name: 'ESPN Cric Info', url:'espn-cric-info'},
    {name: 'Financial Times', url:'financial-times'},
    {name: 'Football Italia', url:'football-italia'},
    {name: 'Fortune', url:'fortune'},
    {name: 'FourFourTwo', url:'four-four-two'},
    {name: 'Fox Sports', url:'fox-sports'},
    {name: 'Google News', url:'google-news'},
    {name: 'Hacker News', url:'hacker-news'},
    {name: 'IGN', url:'ign'},
    {name: 'Independent', url:'independent'},
    {name: 'Mashable', url:'mashable'},
    {name: 'Metro', url:'metro'},
    {name: 'Mirror', url:'mirror'},
    {name: 'MTV News', url:'mtv-news'},
    {name: 'National Geographic', url:'national-geographic'},
    {name: 'New Scientist', url:'new-scientist'},
    {name: 'Newsweek', url:'newsweek'},
    {name: 'New York Magazine', url:'new-york-magazine'},
    {name: 'NFL News', url:'nfl-news'},
    {name: 'Polygon', url:'polygon'},
    {name: 'Recode', url:'recode'},
    {name: 'Reddit/r/all', url:'reddit-r-all'},
    {name: 'Reuters', url:'reuters'},
    {name: 'TalkSport', url:'talksport'},
    {name: 'TechCrunch', url:'techcrunch'},
    {name: 'TechRadar', url:'techradar'},
    {name: 'The Economist', url:'the-economist'},
    {name: 'The Guardian (AU)', url:'the-guardian-au'},
    {name: 'The Guardian (UK)', url:'the-guardian-uk'},
    {name: 'The Hindu', url:'the-hindu'},
    {name: 'The Huffington Post', url:'the-huffington-post'},
    {name: 'The Washington Post', url:'the-washington-post'},
    {name: 'The Lad Bible', url:'the-lad-bible'},
    {name: 'The New York Times', url:'the-new-york-times'},
    {name: 'The Next Web', url:'the-next-web'},
    {name: 'The Sport Bible', url:'the-sport-bible'},
    {name: 'The Telegraph', url:'the-telegraph'},
    {name: 'The Times of India', url:'the-times-of-india'},
    {name: 'The Verge', url:'the-verge'},
    {name: 'The Wall Street Journal', url:'the-wall-street-journal'},
    {name: 'The Washington Post', url:'the-washington-post'},
    {name: 'Time', url:'time'},
    {name: 'USA Today', url:'usa-today'}
  ];

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
      console.log(info)
    });
  };
}
