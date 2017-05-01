declare type Weather = {
  city: string,
  country: string,
  api_id: number,
  main: Object,
  love_url: string,
  neutral_url: string,
  hate_url: string,
  wind: number,
  rain: number
}

declare type UserData = {
  email: string,
  access_token: string,
  password: ?string,
  user_id: ?number
}

declare type User = {
  id: number,
  email: string,
  access_token: string,
  provider_id: ?string,
  provider: ?string,
  password_digest: ?string,
  hot_weather: string, // this will change
  neutral_weather: string, // this will change
  cold_weather: string // this will change 
}
// declare type City = {}
