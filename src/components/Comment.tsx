import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../store';
import { deleteComment } from '../slices/comments';
import { CommentType } from '../types';

const CommentWrap = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Comment({ comment }: { comment: CommentType }) {
  const dispatch = useDispatch<AppDispatch>();

  const removeComment = () => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <CommentWrap>
      <img src={comment.profile_url} alt="" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button>
        <button type="button">수정</button>
        <button onClick={removeComment} type="button">
          삭제
        </button>
      </Button>

      <hr />
    </CommentWrap>
  );
}

export default Comment;
