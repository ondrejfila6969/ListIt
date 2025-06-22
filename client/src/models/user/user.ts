import type { FormData, ResponseData, ResponseGetData, User } from "./interfaces/user";

export const registerUser = async (formData: FormData): Promise<ResponseData> => {
    const req = await fetch("http://localhost:3000/api/user/register", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();

    if(req.status === 201) {
        localStorage.setItem("token", data.token);
    }

    return {
        status: req.status,
        message: data.message,
        payload: data.payload,
        token: data.token,
    };
};

export const loginUser = async (formData: FormData): Promise<ResponseData> => {
    const req: Response = await fetch("http://localhost:3000/api/user/login", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
    });

    const data = await req.json();

    if(req.status === 200) {
        localStorage.setItem("token", data.token);
    }

    return {
        status: req.status,
        message: data.message,
        payload: data.payload,
        token: data.token,
    };
};

export const getUser = async (): Promise<ResponseGetData<User> | null> => {
    const token: string | null = localStorage.getItem("token");
    if(!token) return null;

    const req: Response = await fetch("http://localhost:3000/api/user", {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    const data = await req.json();

    return {
        status: req.status,
        message: data.message,
        payload: data.payload,
    };
};

export const getUserById = async (id: string): Promise<ResponseGetData> => {
    const req: Response = await fetch(`http://localhost:3000/api/user/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    });

    const data = await req.json();

    return {
        status: req.status,
        message: data.message,
        payload: data.payload,
    };
};