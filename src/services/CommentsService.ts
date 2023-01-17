import http from './http';
import { Comment } from '../types';

const getAll = () => http.get('/comments');

const get = (id: number) => http.get(`/comments/${id}`);

const create = (comment: Omit<Comment, 'id'>) =>
  http.post('/comments', comment);

const update = (id: number, comment: Omit<Comment, 'id'>) =>
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
