import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticleService } from '../service/article.service';
import { Article } from './models/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  articles$ !: Observable<Article[]>;

  constructor(private readonly articleService : ArticleService) { }

  ngOnInit(): void {

    this.articles$ = this.articleService.articles$;

  }

}

