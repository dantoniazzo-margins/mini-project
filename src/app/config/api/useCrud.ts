import { useHttpAdapter } from "./useHttpAdapter";

const useGet = async (url: string) => {
  return await useHttpAdapter().get(url);
};

const usePost = async (url: string, body: any) => {
  return await useHttpAdapter().post(url, body);
};
const usePatch = async (url: string, body: any) => {
  return await useHttpAdapter().patch(url, body);
};
const useDelete = async (url: string) => {
  return await useHttpAdapter().delete(url);
};

export { useGet, usePost, usePatch, useDelete };
