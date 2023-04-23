import { requestAPI } from "./api";

export const getAllPosts = async (url) => {
  if (!url) {
    const response = await requestAPI("GET", "careers/", {});
    return response;
  }
  const params = url.split("?")[1]
  const response = await requestAPI("GET", `careers/?${params}`, {});
  return response;

};
