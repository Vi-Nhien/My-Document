import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, shareReplay } from "rxjs/operators"
import { Article } from "../home/models/article";


@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  constructor() {

  }

  get articles$() {
    return of<Article[]>([
      { title: 'tilte 1', body: 'hello world', slug: 'slug 1' },
      { title: 'tilte 2', body: 'hello world', slug: 'slug 2' }
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string): Observable<Article | undefined > {
    return this.articles$.pipe(
      map(articles => articles.find(ar => ar.slug === slug))
    );
  }

}
