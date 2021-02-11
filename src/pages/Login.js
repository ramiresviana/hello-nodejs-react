/* eslint-disable */

import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

import AppContext from '../context'

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [auth, setAuth] = useContext(AppContext)
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();

    fetch("api/login", {
      method: "POST",
      body: { user, password }
    }).then((res) => {
      if (!res.ok) {
        setError(true)
        throw new Error()
      }

      return res
    }).then((res) => {
      setAuth(true)
      history.replace("/")
    })
  }

  return (
    <div class="container py-5">
      <h1 class="my-5 pb-5 text-center">Hello Bootstrap</h1>

      <div class="d-flex justify-content-md-center">
        <form class="col-md-8 col-lg-6 shadow-sm bg-light p-5" onSubmit={onSubmit}>
          <div class="form-group">
            <label>Username</label>
            <input class="form-control" value={user} onChange={(event) => setUser(event.target.value)}></input>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" value={password} onChange={(event) => setPassword(event.target.value)}></input>
          </div>
          <button type="submit" class="btn btn-block btn-lg btn-primary mt-5">Submit</button>
          <br/>
          {error &&
          <div class="alert alert-danger">
            <ul>
              <li>Invalid credentials</li>
            </ul>
          </div>
          }
        </form>
      </div>
    </div>
  )
}