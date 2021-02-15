import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model, Factory, Response } from "miragejs"

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';

const articlesPerPage = 5

const imgs = [
  img1,
  img2,
  img3
]

const titles = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Cras malesuada ligula erat, non egestas risus congue sit amet.',
  'Vivamus euismod a tellus eget interdum. Aenean ac.'
]

const contents = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper quam et ultricies porta. Suspendisse semper pulvinar justo at maximus. Etiam a ex eu libero laoreet molestie. Nam tristique iaculis eros, vel efficitur urna lobortis in. Praesent consectetur quam quis nisi pellentesque vulputate. Aliquam vitae nibh libero. Morbi consequat ultricies enim quis tristique. Duis at odio non eros ornare volutpat et sed libero. Sed at turpis odio.',
  'Cras malesuada ligula erat, non egestas risus congue sit amet. Vestibulum pretium non odio sit amet vehicula. Nunc lobortis tristique sapien, ac condimentum lorem interdum eget. Aenean imperdiet felis finibus metus aliquam euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales, ipsum faucibus consequat tincidunt, enim leo posuere neque, sed auctor nisi velit sit amet nisl.',
  'Aliquam vulputate mi in vulputate aliquam. Mauris ultrices vel felis eget tempus. Morbi a est at lacus malesuada ultrices ac quis turpis. Curabitur ante metus, malesuada eget neque eu, ornare suscipit ligula. Aliquam suscipit cursus eros, ut tincidunt nulla laoreet a. Donec aliquam urna vel pellentesque sodales.'
]

function randomImg() {
  let index = Math.floor(Math.random() * 3)
  return imgs[index]
}

function randomTitle() {
  let index = Math.floor(Math.random() * 3)
  return titles[index]
}

function randomContent() {
  let index = Math.floor(Math.random() * 3)
  return contents[index]
}

createServer({
  models: {
    article: Model
  },

  factories: {
    article: Factory.extend({
      image: () => randomImg(),
      title: () => randomTitle(),
      content: () => randomContent()
    })
  },

  seeds(server) {
    server.createList('article', 16);
  },

  routes() {
    this.get("/api/articles", (schema) => {
      let articles = schema.articles.all().sort((a, b) => {
        return b.id - a.id;
      });

      return articles;
    });

    this.get("/api/articles/page/:page", (schema, request) => {
      let articles = schema.articles.all().sort((a, b) => {
        return b.id - a.id;
      });

      let articlesCount = articles.length
      let pageCount = Math.ceil(articlesCount / articlesPerPage)
      let page = request.params.page - 1;

      let start = page * articlesPerPage
      let end = start + articlesPerPage

      articles = articles.slice(start, end).models

      return {articles, pageCount, articlesCount}
    });

    this.get("/api/articles/:id", (schema, request) => {
      let id = request.params.id;
      return schema.find('article', id);
    });

    this.patch("/api/articles/:id", (schema, request) => {
      let id = request.params.id;
      let attrs = request.requestBody;
      return schema.find('article', id).update(attrs);
    });

    this.del("/api/articles/:id", (schema, request) => {
      let id = request.params.id;
      return schema.find('article', id).destroy();
    });

    this.post("/api/articles", (schema, request) => {
      let attrs = request.requestBody;
      return schema.articles.create({...attrs, image: randomImg()});
    });

    this.post("/api/login", (schema, request) => {
      let attrs = request.requestBody;

      if (attrs.user === 'admin' && attrs.password === 'admin') {
        return new Response(200)
      }

      return new Response(403)
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);