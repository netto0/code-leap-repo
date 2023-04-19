import { requestAPI } from "./api";

export const createNewPost = async (username, title, content) => {
  const response = await requestAPI("POST", "careers/", {username,title,content});
  return response;
};
