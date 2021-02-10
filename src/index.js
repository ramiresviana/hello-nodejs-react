import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model, Factory, Response } from "miragejs"

import img from './assets/img.jpg';

createServer({
  models: {
    article: Model
  },

  factories: {
    article: Factory.extend({
      image: img,
      title: 'Vivamus euismod a tellus eget interdum. Aenean ac.',
      content: 'Aliquam vulputate mi in vulputate aliquam. Mauris ultrices vel felis eget tempus. Morbi a est at lacus malesuada ultrices ac quis turpis. Curabitur ante metus, malesuada eget neque eu, ornare suscipit ligula. Aliquam suscipit cursus eros, ut tincidunt nulla laoreet a. Donec aliquam urna vel pellentesque sodales.'
    })
  },

  seeds(server) {
    server.createList('article', 3);
  },

  routes() {
    this.get("/api/articles", (schema) => {
      return schema.articles.all();
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
      return schema.articles.create({...attrs, image: img});
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