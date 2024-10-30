import axios from "axios";

export const getComments = async () => {
  try {
    const res = await axios.get("http://localhost:3001/comments");
    return res.data;
  } catch (error) {
    console.error("Error while get comments:", error);
  }
};
