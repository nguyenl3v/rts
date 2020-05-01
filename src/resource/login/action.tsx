import { LoginType, LOGIN, loginPayload } from "./types";

export const login = (Login: loginPayload): LoginType => ({
  type: LOGIN,
  payload: Login
})