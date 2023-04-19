import { requestAPI } from "./api";

export const editPost = async (id, title, content) => {
  const response = await requestAPI("PATCH", `careers/${id}/`, {title,content});
  return response;
};
