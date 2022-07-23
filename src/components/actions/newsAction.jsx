import axios from "axios";
export function addNews(endpoint, newsData, navigate) {
  axios
    .post("https://localhost:443/" + endpoint, newsData)
    .then((response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editNews(endpoint, newsData, navigate) {
  axios
    .put("https://localhost:443/newspage/" + endpoint, newsData)
    .then((response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteNews(newsID, navigate) {
  axios
    .delete("https://localhost:443/newspage/" + newsID)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
