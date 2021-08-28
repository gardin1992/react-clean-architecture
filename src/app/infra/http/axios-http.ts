import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

let instance: AxiosInstance | undefined = undefined;

export function axiosHttpClient(props: AxiosRequestConfig) {
  if (instance === undefined)
    instance = axios.create({
      ...props,
    });

  return instance;
}
