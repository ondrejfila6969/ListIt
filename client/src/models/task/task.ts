import type { TaskFormData, Task, ResponseData } from "./interfaces/task";

export const getAllTasks = async (): Promise<ResponseData<Task[]>> => {
    const token: string | null = localStorage.getItem("token");
    const req: Response = await fetch("http://localhost:3000/api/task", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const getTaskById = async (id: string): Promise<ResponseData<Task>> => {
    const token: string | null = localStorage.getItem("token");
    const req: Response = await fetch(`http://localhost:3000/api/task/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const createTask = async (formData: TaskFormData): Promise<ResponseData<Task>> => {
    const token: string | null = localStorage.getItem("token");
    const req: Response = await fetch(`http://localhost:3000/api/task/`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const updateTask = async (id: string, formData: TaskFormData): Promise<ResponseData<Task>> => {
    const token: string | null = localStorage.getItem("token");
    const req = await fetch(`http://localhost:3000/api/task/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const deleteTask = async (id: string): Promise<ResponseData<null>> => {
    const token: string | null = localStorage.getItem("token");
    const req = await fetch(`http://localhost:3000/api/task/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "DELETE"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const completeTask = async (id: string, formData: TaskFormData): Promise<ResponseData<Task>> => {
    const token: string | null = localStorage.getItem("token");
    const req = await fetch(`http://localhost:3000/api/task/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}