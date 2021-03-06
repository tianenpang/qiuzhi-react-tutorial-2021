/// <reference types="react-scripts" />

declare interface IBlog {
  id: number;
  body: string;
  title: string;
  author: string;
}

declare interface IArticleParam {
  id: string;
}

declare interface IBlogForm {
  title: string;
  author: string;
  content: string;
}
