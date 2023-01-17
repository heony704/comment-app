import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readComments } from '../slices/comments';
import { RootState, AppDispatch } from '../store';
import Comment from './Comment';

function CommentList() {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch<AppDispatch>();

  const initFetch = useCallback(() => {
    dispatch(readComments());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
