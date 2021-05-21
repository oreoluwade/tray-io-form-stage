export const internalStateReducer = (previousState, newState) => ({
  ...previousState,
  ...newState
});
