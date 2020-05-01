export const LOGIN = "LOGIN";
export interface loginPayload {
  email: string,
  password: string
}
export interface LoginType {
  type: typeof LOGIN
  payload: loginPayload
}