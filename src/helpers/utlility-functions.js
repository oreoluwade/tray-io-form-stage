export const internalStateReducer = (previousState, newState) => ({
  ...previousState,
  ...newState
});

export const convertToTitleCase = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
