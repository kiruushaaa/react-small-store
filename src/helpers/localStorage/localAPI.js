export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = key => {
  try {
    const persistedState = localStorage.getItem(key);
    if (persistedState) return JSON.parse(persistedState);
  } catch (error) {
    console.error('Something went wrong :c', error);
  }
};
