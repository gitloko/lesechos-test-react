export interface Article {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export interface ArticlesBySite {
  [site: string]: Article[];
}
