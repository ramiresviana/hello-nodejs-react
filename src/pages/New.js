/* eslint-disable */

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Edit() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();

    fetch("api/articles", {
      method: "POST",
      body: { title, content }
    })
      .then(() => history.replace("/"))
  }

  return (
    <div class="container py-5">
      <h1 class="my-5 pb-5">Hello Bootstrap</h1>

      <form class="shadow-sm bg-light p-5" onSubmit={onSubmit}>
        <div class="form-group">
          <label>Title</label>
          <input class="form-control" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea rows="6" class="form-control" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
        <div class="form-group">
          <label>File</label>
          <input type="file" class="form-control-file"></input>
        </div>
        <button type="submit" class="btn btn-block btn-lg btn-primary mt-5">Submit</button>
      </form>
    </div>
  )
}