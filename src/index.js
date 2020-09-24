import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model, Factory } from "miragejs"

createServer({
  models: {
    article: Model
  },

  factories: {
    article: Factory.extend({
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

    this.post("/api/articles", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.articles.create(attrs);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);