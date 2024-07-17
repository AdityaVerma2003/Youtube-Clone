import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "4b20cb0a85msh20f9cc56f639b30p107679jsn446d573d959c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
