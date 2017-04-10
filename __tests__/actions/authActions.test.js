import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"
import {
  authStateChanged,
  loginUser,
  logoutUser,
  createUser
} from "../../src/actions"

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from "../../src/actions/types"

const mockStore = configureMockStore([thunk])

describe("Auth Actions", () => {
  let expectedActions
  let store
  let fakeCreds
  let invalidCreds
  let setCredentials
  let expectedErrorAction
  beforeEach(() => {
    setCredentials = jest.fn()

    invalidCreds = {
      email: "h4ck3r",
      pw: "-91382ru9q8tueqpdofijas"
    }

    fakeCreds = {
      email: "test@test.com",
      password: "password"
    }
    store = mockStore({ auth: {} })
    expectedActions = [
      {
        type: LOGIN_USER
      }, {
        type: LOGIN_USER_SUCCESS,
        payload: {
          user: {
            email: "test@test.com",
            access_token: "abc123"
          }
        }
      }
    ]

    expectedErrorAction = [{ type: LOGIN_USER_FAIL }]
  })

  afterEach(() => {
    nock.cleanAll()
  })

  describe("createUser", () => {
      beforeEach(() => {
      store = mockStore({ auth: {} })
        nock("http://127.0.0.1:3000").post(fakeCreds, "/users").reply(200, {
            body: {
                user: {
                    email: "test@test.com",
                    access_token: "abc123"
                }
            }
        })
    })

    it("creates LOGIN_USER_SUCCESS when post is successful", () => {
      return store.dispatch(createUser(fakeCreds).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
      }))
    })

    it("stores the email an access token in async storage", () => {
      return store.dispatch(createUser(fakeCreds).then(() => {
          expect(setCredentials).toHaveBeenCalled()
      }))
    })

    it("creates LOGIN_USER_FAIL when post is unsuccessful", () => {
      nock("http://127.0.0.1:3000").post(fakeCreds, "/users").reply(500, {
        message: "something went wrong"
      })

      return store.dispatch(loginUser(fakeCreds).then(() => {
        expect(store.getActions()).toEqual(expectedErrorAction)
      }))
    })
  })

  describe("loginUser", () => {
      beforeEach(() => {
        store = mockStore({ auth: {} })
          nock("http://127.0.0.1:3000").post(fakeCreds, "/v1/sessions").reply(200, {
              body: {
                  user: {
                      email: "test@test.com",
                      access_token: "abc123"
                  }
              }
          })
      })

      it("creates LOGIN_USER_SUCCESS when post is successful", () => {
          return store.dispatch(loginUser(fakeCreds).then(() => {
              expect(store.getActions()).toEqual(expectedActions)
          }))
      })

      it("stores the email an access token in async storage", () => {
        return store.dispatch(loginUser(fakeCreds).then(() => {
            expect(setCredentials).toHaveBeenCalled()
        }))
      })

      it("creates LOGIN_USER_FAIL when an error is received", () => {
        nock.cleanAll()
        nock("http://127.0.0.1:3000").post(invalidCreds, "/v1/sessions").reply(401, {
          message: "unauthorized user"
        })

        return store.dispatch(loginUser(invalidCreds).then(() => {
          expect(store.getActions()).toEqual(expectedErrorAction)
        }))
      })
  })

  // TODO: figure out mocking for local storage
  xdescribe("authStateChanged", () => {
    beforeEach(() => {

    })

    xit("creates LOGIN_USER_SUCCESS if local storage post data successful", () => {
      return store.dispatch(authStateChanged().then(() => {

      }))
    })
  })

  describe("logoutUser", () => {
    let logoutAction
    beforeEach(() => {
      store = {
        auth: {
          user: {
            email: "test@test.com",
            access_token: "apsdofia-9sd8f-98h2f9ught"
          }
        }
      }

      logoutAction = [{ type: LOGOUT_USER }]
    })

    it("creates LOGOUT_USER when called", () => {
      return store.dispatch(logoutUser().then(() => {
        expect(store.getActions()).toEqual(logoutAction)
      }))
    })

    xit("clears local storage of geather_data", () => {})
  })
})
