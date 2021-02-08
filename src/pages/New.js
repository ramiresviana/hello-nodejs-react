/* eslint-disable */

import React from 'react';

export default function Edit() {
  return (
    <div class="container py-5">
      <h1 class="my-5 pb-5">Hello Bootstrap</h1>

      <form class="shadow-sm bg-light p-5">
        <div class="form-group">
          <label>Title</label>
          <input class="form-control"></input>
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea rows="6" class="form-control"></textarea>
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