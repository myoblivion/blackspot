import axios from "axios";
export function addNews(endpoint, newsData, navigate) {
  axios
    .post("//192.168.2.117:8000/" + endpoint, newsData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editNews(endpoint, newsData, navigate) {
  axios
    .put("//192.168.2.117:8000/newspage/" + endpoint, newsData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteNews(newsID, navigate) {
  axios
    .delete("//192.168.2.117:8000/newspage/" + newsID)
    .then(async (response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
