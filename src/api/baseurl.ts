import axios from "axios";

/** base url to make request to the themoviedatabase */

const instance = axios.create({
  baseURL: "https://floxpert-service.onrender.com",
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
