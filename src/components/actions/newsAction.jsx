import axios from "axios";
export function addNews(endpoint, newsData, navigate) {
  axios
    .post("http://192.168.2.105:8000/" + endpoint, newsData)
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
    .put("http://192.168.2.105:8000/newspage/" + endpoint, newsData)
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
    .delete("http://192.168.2.105:8000/newspage/" + newsID)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
