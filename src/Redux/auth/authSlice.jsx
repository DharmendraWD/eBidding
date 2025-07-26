import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', credentials)
      const token = res.data.access_token
      console.log(token)
      if (token) {
        localStorage.setItem('token', token)
      } else {
        localStorage.removeItem('token') // Remove any old invalid token
      }
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)


export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  localStorage.removeItem('token')
  return true // ✅ fix: always return something
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.access_token
        // state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null
        // state.user = null
        state.isAuthenticated = false
      })
  }
})

export default authSlice.reducer
