/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import AppContext from '../context'

export default function Article() {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  const [auth, setAuth] = useContext(AppContext)

  useEffect(() => {
    fetch("/api/articles/" + id)
      .then((res) => res.json())
      .then((res) => setArticle(res.article))
  }, [])

  function Actions() {
    return (
      <>
        <hr class="my-5" />
        <Link to={"/edit/" + id} class="btn btn-lg btn-primary">Edit</Link>
        <Link to={"/remove/" + id} class="btn btn-lg btn-danger">Remove</Link>
      </>
    )
  }
  return (
    <div class="container py-5">
      <h1 class="my-5 pb-5">Hello Bootstrap</h1>

      <img src={article.image} class="w-100" />

      <h2 class="mt-4 mb-3">{article.title}</h2>
      <p>{article.content}</p>

      { auth && <Actions />}
    </div>
  )
}