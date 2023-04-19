import { requestAPI } from "./api";

export const getAllPosts = async () => {
  const response = await requestAPI("GET", "careers/", {});
  return response;
};
