import http from './http';
import { CommentType } from '../types';

const getAll = () => http.get('/comments');

const get = (id: number) => http.get(`/comments/${id}`);

const create = (comment: Omit<CommentType, 'id'>) =>
  http.post('/comments', comment);

const update = (id: number, comment: Omit<CommentType, 'id'>) =>
  http.put(`/comments/${id}`, comment);

const remove = (id: number) => http.delete(`/comments/${id}`);

const CommentsService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default CommentsService;
