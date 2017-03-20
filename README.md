# Geather

Geather is a React-Native, Android & IOS weather app which utilizes the Giphy API and the Open Weather Maps API. Geather takes a user's preference for weather types, current location, and watched cities and fetches a random gif associated with the weather of that city.


## Technologies

- React Native
- Redux Thunk
- Fetch API
- React-Native-Router-Flux

## Development

Follow the steps below to run this project locally:

1. Follow the React Native installation guide.
2. Download the Android Studio SKD for Android development.
3. Download Yarn and `yarn install`.
4. Create a firebase and openWeatherMaps account.
5. Create a file named `envVariables.js` in the root of the project, then add the following configurations.

```js

export const firebaseConfig = {
   apiKey: (key),
   authDomain: (info),
   databaseURL: (info),
   storageBucket: (info),
   messagingSenderId: (info)
}

export const openWeatherConfig = {
  apiKey: (key)
}

export const facebookConfig = {
  appID: (id),
  appSecret: (secret)
}

```


## Todo
- [x] Giphy Api
- [x] Open WeatherMaps API
- [ ] oAuth for Facebook
- [ ] Navigation
- [ ] Logout
- [ ] DB persistence
- [ ] Custom Components
- [ ] Fetch all data on login
- [ ] Custom start up page
