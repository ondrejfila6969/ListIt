export interface FormData {
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
}

export interface ResponseData<T = any> {
    status: number;
    message: string;
    payload: T;
    token: string;
}

export interface ResponseGetData<T = any> {
    status: number;
    message: string;
    payload: T;
}

export type User = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
};
