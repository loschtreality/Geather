export const fetchContentData = (url, options = {}) => {
  return fetch(url, options).then((response) => response.json())
  .then((resp) => resp)
  .catch(err => { console.log(err) })
}
