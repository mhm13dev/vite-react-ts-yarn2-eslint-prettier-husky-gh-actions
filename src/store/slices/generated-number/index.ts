import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { generateNewNumber as generateNewNumberApi } from "@/api/number-generator";

// Thunk simplifies async actions, we can perform side effects here like api calls and dispatch other actions as needed
export const generateNewNumber = createAsyncThunk("generatedNumber/generateNewNumber", async () =>
  generateNewNumberApi(),
);

export type GeneratedNumberState = {
  generatedNumber: number;
  requestInProgress: boolean;
};

const initialState: GeneratedNumberState = {
  generatedNumber: 0,
  requestInProgress: false,
};

export const generatedNumberSlice = createSlice({
  name: "generatedNumberState",
  initialState,
  reducers: {
    // Normal reducers not needed for this example
    setGeneratedNumber: (state: GeneratedNumberState, action: PayloadAction<number>) => {
      state.generatedNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateNewNumber.pending, (state: GeneratedNumberState) => {
        // We can directly mutate state here because immer is used under the hood
        state.requestInProgress = true;
      })
      .addCase(generateNewNumber.fulfilled, (state: GeneratedNumberState, action: PayloadAction<number>) => {
        state.generatedNumber = action.payload;
        state.requestInProgress = false;
      });
  },
});

export const { setGeneratedNumber } = generatedNumberSlice.actions;
