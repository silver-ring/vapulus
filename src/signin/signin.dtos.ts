export interface SignInRequestBody {
  username: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}
