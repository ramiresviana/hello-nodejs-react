/* eslint-disable */

import React from 'react';

export default function Login() {
  return (
    <div class="container py-5">
      <h1 class="my-5 pb-5 text-center">Hello Bootstrap</h1>

      <div class="d-flex justify-content-md-center">
      <form class="col-md-8 col-lg-6 shadow-sm bg-light p-5">
        <div class="form-group">
          <label>Username</label>
          <input class="form-control"></input>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control"></input>
        </div>
        <button type="submit" class="btn btn-block btn-lg btn-primary mt-5">Submit</button>
      </form>
      </div>
    </div>
  )
}