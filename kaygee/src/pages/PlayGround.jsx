import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PlayGround() {
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
        <h2>I have tried to express the terrible passions of humanity by means of red and purple</h2>
        <button className="button" onClick={() => navigate(-1)}>Back</button>
        <h1>{fakePost.title}</h1>
        <p>{fakePost.body}</p>
    </article>
  );
}
