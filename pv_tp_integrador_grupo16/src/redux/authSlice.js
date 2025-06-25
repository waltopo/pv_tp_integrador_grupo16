import { createSlice } from '@reduxjs/toolkit';

const getSessionUser = () => {
  const sessionUser = localStorage.getItem('sessionUser');
  return sessionUser ? JSON.parse(sessionUser) : null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getSessionUser(),
    error: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem('sessionUser', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.error = null;
      localStorage.removeItem('sessionUser');
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  }
});

export const { login, logout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;