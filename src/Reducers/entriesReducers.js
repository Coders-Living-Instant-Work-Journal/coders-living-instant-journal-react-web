const entriesReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_ALL_ENTRIES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default entriesReducer;
