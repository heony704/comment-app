import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommentsService from '../services/CommentsService';
import { Comment } from '../types';

const initialState: Comment[] = [];

export const createComment = createAsyncThunk(
  'comment/CREATE',
  async (comment: Omit<Comment, 'id'>) => {
    const res = await CommentsService.create(comment);
    return res.data;
  },
);

export const readComments = createAsyncThunk('comment/READ', async () => {
  const res = await CommentsService.getAll();
  return res.data;
});

export const updateComment = createAsyncThunk(
  'comment/UPDATE',
  async (comment: Comment) => {
    const res = await CommentsService.update(comment.id, {
      profile_url: comment.profile_url,
      author: comment.author,
      content: comment.content,
      createdAt: comment.createdAt,
    });
    return res.data;
  },
);

export const deleteComment = createAsyncThunk(
  'comment/DELETE',
  async ({ id }: { id: number }) => {
    await CommentsService.remove(id);
    return { id };
  },
);

const commentsSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createComment.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(readComments.fulfilled, (state, action) => [...action.payload])
      .addCase(updateComment.fulfilled, (state, action) => {
        const index = state.findIndex(
          comment => comment.id === action.payload.id,
        );
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      });
  },
});

const { reducer } = commentsSlice;
export default reducer;
