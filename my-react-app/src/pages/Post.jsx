import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  // pretend fetch / useEffect for real app
  const fakePost = {
    id,
    title: `Post #${id}`,
    body: `This is a sample post with id ${id}.`
  };

  return (
    <article>
        <h2>welcome to my blog</h2>
        <button className="button" onClick={() => navigate(-1)}>Back</button>
        <h1>{fakePost.title}</h1>
        <p>{fakePost.body}</p>
    </article>
  );
}
