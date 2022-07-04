import axios from "axios";
export function addNews(endpoint, newsData, navigate) {
  axios
    .post("http://blackspotstudio.ph/" + endpoint, newsData)
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
    .put("http://blackspotstudio.ph/newspage/" + endpoint, newsData)
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
    .delete("http://blackspotstudio.ph/newspage/" + newsID)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
