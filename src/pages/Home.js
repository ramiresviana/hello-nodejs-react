/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

import img from '../assets/img.jpg';

export default function Home() {
  function Article(props) {
    return (
      <Link to="article">
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
            <a class="dropdown-item" href="#">Add article</a>
            <a class="dropdown-item" href="#">Logout</a>
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

      <Article
        img={img}
        title="Vivamus euismod a tellus eget interdum. Aenean ac."
        content="Aliquam vulputate mi in vulputate aliquam. Mauris ultrices vel felis eget tempus. Morbi a est at lacus malesuada ultrices ac quis turpis. Curabitur ante metus, malesuada eget neque eu, ornare suscipit ligula. Aliquam suscipit cursus eros, ut tincidunt nulla laoreet a. Donec aliquam urna vel pellentesque sodales."
      />

      <Article
        img={img}
        title="Vivamus euismod a tellus eget interdum. Aenean ac."
        content="Aliquam vulputate mi in vulputate aliquam. Mauris ultrices vel felis eget tempus. Morbi a est at lacus malesuada ultrices ac quis turpis. Curabitur ante metus, malesuada eget neque eu, ornare suscipit ligula. Aliquam suscipit cursus eros, ut tincidunt nulla laoreet a. Donec aliquam urna vel pellentesque sodales."
      />

      <Article
        img={img}
        title="Vivamus euismod a tellus eget interdum. Aenean ac."
        content="Aliquam vulputate mi in vulputate aliquam. Mauris ultrices vel felis eget tempus. Morbi a est at lacus malesuada ultrices ac quis turpis. Curabitur ante metus, malesuada eget neque eu, ornare suscipit ligula. Aliquam suscipit cursus eros, ut tincidunt nulla laoreet a. Donec aliquam urna vel pellentesque sodales."
      />

      <Pagination />
    </div>
  )
}