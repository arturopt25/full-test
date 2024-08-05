import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../store/actions';

const Posts = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const { title, content } = postData;

  const onChange = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData, token));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <textarea
        placeholder="Content"
        name="content"
        value={content}
        onChange={onChange}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default Posts;
