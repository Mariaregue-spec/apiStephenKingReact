import axios from "axios";

export const getBooks = async () => {
  const res = await axios.get("http://localhost:3001/books");
  return res.data; // ya es data
};
