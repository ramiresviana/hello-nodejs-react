/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context'

export default function Home() {
  const [articles, setArticles] = useState();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [articlesCount, setArticlesCount] = useState();

  const [auth, setAuth] = useContext(AppContext)

  useEffect(() => {
    setArticles(null)

    fetch("api/articles/page/" + page)
      .then((res) => res.json())
      .then((res) => {
        setArticlesCount(res.articlesCount)
        setPageCount(res.pageCount)
        setArticles(res.articles)
      })
  }, [page])

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
            <a href="#" class="dropdown-item" onClick={() => setAuth(false)} > Logout </a>
          </div>
        </div>
        <p class="pb-4">There are {articlesCount} posts</p>
      </>
    )
  }

  function Pagination() {
    if (pageCount == 1) {
      return null
    }

    return (
      <>
        {page > 1 && <a class="btn btn-primary mt-3 mr-1" onClick={() => setPage(page - 1)}>Previous page</a>}
        {page < pageCount && <a class="btn btn-primary mt-3" onClick={() => setPage(page + 1)}>Next page</a>}
      </>
    )
  }

  return (
    <div class="container py-5">
      <h1 class="mt-5 pb-4">Hello Bootstrap</h1>

      {auth && <Actions />}

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