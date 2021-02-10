/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("api/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res.articles))
  }, [])

  function Article(props) {
    return (
      <Link to={"/article/" + props.id}>
        <article class="mb-5 text-dark">
          <div class="media d-block d-md-flex">
            <img src={props.img} class="mr-3" />
            <div class="media-body">
              <h4 class="my-3">{props.title}</h4>
              <p>{props.content}</p>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  function Actions() {
    return (
      <>
        <div class="dropdown mb-2">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">Logged as admin</button>
          <div class="dropdown-menu">
            <Link to={"/new"} class="dropdown-item"> Add article </Link>
            <Link to={"/logout"} class="dropdown-item"> Logout </Link>
          </div>
        </div>
        <p class="pb-4">There are 100 posts</p>
      </>
    )
  }

  function Pagination() {
    return (
      <button type="button" class="btn btn-primary mt-3">Next page</button>
    )
  }

  return (
    <div class="container py-5">
      <h1 class="mt-5 pb-4">Hello Bootstrap</h1>

      <Actions />

      {articles && articles.map((article) =>
        <Article
          img={article.image}
          id={article.id}
          title={article.title}
          content={article.content}
        />
      )}

      <Pagination />
    </div>
  )
}