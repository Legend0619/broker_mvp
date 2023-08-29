import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { ausPostcodes } from "../public/data/postcodeData";
import brokerData from "../public/data/brokerDataWithPostcodeCoordinates";
import { stepNames, questionsByCoverType } from "../public/data/data";
import { getDistanceBetween } from "../util/getDistanceBetween";
import { getState } from "../util/getState";

const postcodesSlice = createSlice({
  name: "postcodes",
  initialState: {
    data: [],
    error: null,
    isLoading: false, // Added isLoading state
  },
  extraReducers: (builder) => {
    builder.addCase(loadPostcodes.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false; // Set isLoading to false when data is loaded
    });
    builder.addCase(loadPostcodes.pending, (state) => {
      state.isLoading = true; // Set isLoading to true when data is loading
      state.error = null;
    });
    builder.addCase(loadPostcodes.rejected, (state, action) => {
      state.isLoading = false; // Set isLoading to false when data loading fails
      state.error = action.error.message;
    });
  },
});

export const loadPostcodes = createAsyncThunk("postcodes/load", async () => {
  const data = ausPostcodes;
  console.log(ausPostcodes[0]);
  return data;
});

// Initial state
const initialUserState = {
  cover_type: "",
  business_type: "",
  employee_count: "",
  insurance_type: [],
  broker_help: [],
  postcode: "",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  insurance_start_date: "",
  contact_type: "",
  contact_time: "",
  message: "",
  broker: brokerData[0],
};

// Initial state
const initialAppState = {
  step: 0,
  nextEnabled: false,
  formSubmitting: false,
  stepNames: stepNames,
  questions: questionsByCoverType,
  results: [],
};

const initialBrokersState = brokerData;

export const brokersSlice = createSlice({
  name: "brokers",
  initialState: initialBrokersState,
  reducers: {
    sortByDistance: (state, action) => {
      const postcodes = action.payload.postcodes;
      state = state.sort(
        (a, b) =>
          getDistanceBetween(action.payload.userPostcode, a, postcodes) -
          getDistanceBetween(action.payload.userPostcode, b, postcodes)
      );
      return state;
    },
  },
});

export const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    nextStep: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setNextEnabled: (state, action) => {
      state.nextEnabled = action.payload;
    },
    setFormSubmitting: (state, action) => {
      state.formSubmitting = action.payload;
    },
    updateQuestionsByCoverType: (state, action) => {
      state.questions = questionsByCoverType[action.payload];
    },
    filterResults: (state, action) => {
      const postcodes = action.payload.postcodes;
      const brokers = action.payload.brokers;
      const userState = getState(action.payload.userPostcode, postcodes);
      let filteredList = brokers.filter((broker) =>
        broker.location.includes(userState)
      );
      state.results = filteredList.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    update: (state, action) => {
      state[action.payload.property] = action.payload.value;
    },
  },
});

// config the store
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
    brokers: brokersSlice.reducer,
    postcodes: postcodesSlice.reducer,
  },
});

// load postcodes
store.dispatch(loadPostcodes());

// export default the store
export default store;

// export the action
export const {
  nextStep,
  prevStep,
  updateQuestionsByCoverType,
  setNextEnabled,
  setFormSubmitting,
  filterResults,
} = appSlice.actions;

export const { update } = userSlice.actions;

export const { sortByDistance } = brokersSlice.actions;
