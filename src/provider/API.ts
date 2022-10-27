import axios from "axios"

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const posts = {
  getData: () => API.get(`/posts`),
  
  getDataById: (id:string | undefined) => API.get(`/posts/${id}`),
  
  saveDataByPid: (id:string, data:{
    id?: string,
    title?: string,
    content?: string
  }) => API.put(`/posts/${id}`, data),

  saveNewData: ({ title, content }:{
    title: string,
    content: string
  })=> API.post(`/posts`, {
    title, content
  })
};

export default API;
