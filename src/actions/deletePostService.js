import { requestAPI } from "./api";

export const deletePost = async (id) => {
  const response = await requestAPI("DELETE", `careers/${id}/`);
  console.log("foi")
  return response;
};
