export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function LoadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
