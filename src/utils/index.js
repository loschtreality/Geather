// Fetch function helpers
const checkStatus = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response)
  }
  return Promise.reject(
      new Error(response.statusText))
}

const getJSON = (response) => {
  return response.json()
}

export const fetchContentData = (url, options = {}) => {
  return fetch(url, options)
  .then(checkStatus)
  .then(getJSON)
}

export const postSession = (credentials, url = "http://localhost:3000/v1/sessions/facebook") => {
  if (!credentials) {
    console.warn("NO CREDENTIALS WERE SEEN")
    return
  }
  const options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      "user": { // Must have user as a key for rails validation whitelist
        // Keys must be strings, else stringify will error
        "user_id": credentials.user_id,
        "access_token": credentials.access_token
      }
    })
  }

  return fetch(url, options)
  .then(getJSON)
}


// Requesting weather
// const options = {
//   method: "GET",
//   headers: headers.set({
//     "X-Auth-Token": "0901e4b7-06de-43bc-a826-ab4996b4531b"
//   })
