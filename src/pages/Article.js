/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Article() {
    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/api/articles/" + id)
            .then((res) => res.json())
            .then((res) => setArticle(res.article))
    }, [])

    function Actions() {
        return (
            <>
                <hr class="my-5" />
                <button type="button" class="btn btn-lg btn-primary">Edit</button>
                <button type="button" class="btn btn-lg btn-danger">Remove</button>
            </>
        )
    }
    return (
        <div class="container py-5">
            <h1 class="my-5 pb-5">Hello Bootstrap</h1>

            <img src={article.image} class="w-100" />

            <h2 class="mt-4 mb-3">{article.title}</h2>
            <p>{article.content}</p>

            <Actions />
        </div>
    )
}