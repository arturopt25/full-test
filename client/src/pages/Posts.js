import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, resetPostSuccess } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import './Posts.scss'

const Posts = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const postSuccess = useSelector((state) => state.posts.success);

  const { title, content } = postData;

  const onChange = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData, token)).then(() => {
      navigate('/');
    });
  };

  useEffect(() => {
    if (postSuccess) {
      dispatch(resetPostSuccess());
    }
  }, [postSuccess, navigate, dispatch]);

  return (
    <div className='create-post-container'>
    <form className='create-form' onSubmit={onSubmit}>
      <h1>Create a Post</h1>
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
    </div>
  );
};

export default Posts;
