/* @flow */

import { AsyncStorage } from "react-native"

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

export const fetchContentData = (url: string, options: Object = {}) => {
  return fetch(url, options)
  .then(checkStatus)
  .then(getJSON)
}

export const fetchUserContent = async (routeEndpoint: string /* weathers || gif */) => {
  let storageData = await AsyncStorage.getItem("geather_data")
  storageData = JSON.parse(storageData)
  return new Promise((resolve, reject) => {
    const headers = new Headers()
    headers.append("X-Auth-Token", storageData.access_token)
    const options = {
      method: "GET",
      headers
    }

    fetchContentData(`http://127.0.0.1:3000/v1/${routeEndpoint}`, options)
    .then(contentData => {
      resolve(contentData)
    }, (rejection) => {
      reject(rejection)
    })
  })
}

export const postUser = (credentials: UserData) => {
  if (!credentials) {
    console.error("NO CREDENTIALS IN POST USER")
    return
  }
  const body = { user: {} }
  const url = "http://127.0.0.1:3000/users"

  body.user.email = credentials.email
  body.user.password = credentials.password

  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  }

  return fetch(url, options)
}

export const postSession = (credentials: UserData) => {
  const body = { user: {} }
  let url
  if (!credentials) {
    console.warn("NO CREDENTIALS WERE SEEN")
    return
  }

  // TODO: Refactor this logic:
  if ("password" in credentials) {
    url = "http://127.0.0.1:3000/v1/sessions/email"
    body.user.email = credentials.email
    body.user.password = credentials.password
  } else if ("email" in credentials) {
    // CHECK INTO THIS METHOD
    url = "http://127.0.0.1:3000/v1/sessions"
    body.user.email = credentials.email
    body.user.access_token = credentials.access_token
  } else {
    url = "http://127.0.0.1:3000/v1/sessions/facebook"
    body.user.user_id = credentials.user_id
    body.user.access_token = credentials.access_token
  }

  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  }

  return fetch(url, options)
  .then(getJSON)
}

export const deleteCity = async (city: { id: number, city: string, country: string }) => {
  let storageData = await AsyncStorage.getItem("geather_data")
  storageData = JSON.parse(storageData)

  const url = "http://127.0.0.1:3000/v1/userweather"
  const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Auth-Token": storageData.access_token
  })

  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify({
      city: {
        id: city.id,
        city: city.city,
        country: city.country
      }
    })
  }

  return fetch(url, options)
}

// TODO: Refactor input to match deleteCity
export const postCity = async (city: string) => {
  //TODO: Refactor, types are not correct
  let storageData = await AsyncStorage.getItem("geather_data")
  storageData = JSON.parse(storageData)

  const url = "http://127.0.0.1:3000/v1/userweather"
  const body = JSON.stringify({ city })
  const headers = new Headers({
    "Content-Type": "application/json",
    "X-Auth-Token": storageData.access_token
  })

  const options = {
    method: "POST",
    headers,
    body
  }

  return fetch(url, options)
}
