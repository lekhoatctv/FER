import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://69039d30d0f10a340b2518ee.mockapi.io/Orchids';

// Async thunks
export const fetchOrchids = createAsyncThunk(
    'orchids/fetchOrchids',
    async () => {
        const response = await axios.get(API_URL);
        return response.data;
    }
);

export const addOrchid = createAsyncThunk(
    'orchids/addOrchid',
    async (orchidData) => {
        const response = await axios.post(API_URL, orchidData);
        return response.data;
    }
);

export const updateOrchid = createAsyncThunk(
    'orchids/updateOrchid',
    async ({ id, orchidData }) => {
        const response = await axios.put(`${API_URL}/${id}`, orchidData);
        return response.data;
    }
);

export const deleteOrchid = createAsyncThunk(
    'orchids/deleteOrchid',
    async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
);

const orchidsSlice = createSlice({
    name: 'orchids',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch orchids
            .addCase(fetchOrchids.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrchids.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchOrchids.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Add orchid
            .addCase(addOrchid.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            // Update orchid
            .addCase(updateOrchid.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            // Delete orchid
            .addCase(deleteOrchid.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    },
});

export default orchidsSlice.reducer;
