export interface BaseResponse<T> {
    status: number;
    message: string;
    payload: T;
}

export interface ResponseData<T = User> extends BaseResponse<T> {
    token?: string | undefined;
}

export interface ResponseGetData<T = User[]> extends BaseResponse<T> {}

export interface UserFormData {
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
}

export type User = {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
};