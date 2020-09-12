import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-a-clone-7f4c6.cloudfunctions.net/api", // THE API (cloud functions) URL
  // localhost link: http://localhost:5001/a-clone-7f4c6/us-central1/api
});

export default instance;
