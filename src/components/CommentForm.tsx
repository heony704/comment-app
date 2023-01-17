import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createComment } from '../slices/comments';
import { AppDispatch } from '../store';

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentForm() {
  const initialCommentState = {
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  };
  const [comment, setComment] = useState(initialCommentState);

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const saveComment = () => {
    dispatch(createComment(comment))
      .unwrap()
      .then(data => {
        setComment({
          profile_url: data.profile_url,
          author: data.author,
          content: data.content,
          createdAt: data.createdAt,
        });
      })
      .catch(e => console.log(e));
  };

  return (
    <FormStyle>
      <form>
        <input
          value={comment.profile_url || ''}
          onChange={handleChange}
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          value={comment.author || ''}
          onChange={handleChange}
          type="text"
          name="author"
          placeholder="작성자"
        />
        <br />
        <textarea
          value={comment.content || ''}
          onChange={handleChange}
          name="content"
          placeholder="내용"
          required
        />
        <br />
        <input
          value={comment.createdAt || ''}
          onChange={handleChange}
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="button" onClick={saveComment}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default CommentForm;
