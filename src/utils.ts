export const setStorage = (value: string, key: string) =>
  localStorage.setItem(key, value);

export const getStorageItem = (key: string) => localStorage.getItem(key);
