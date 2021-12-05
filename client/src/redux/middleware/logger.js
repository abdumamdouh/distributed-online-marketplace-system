const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action: ", action);
  const nextState = next(action);
  console.log("the new state: ", store.getState());
  console.groupEnd();
  return nextState;
};

export default logger;
