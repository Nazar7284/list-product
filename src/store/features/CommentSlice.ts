import { IComment } from "../../types/Comment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
  comments: IComment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<IComment[]>) {
      state.comments = action.payload;
    },
    removeComment(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});

export const { setComments } = commentSlice.actions;

export default commentSlice.reducer;
