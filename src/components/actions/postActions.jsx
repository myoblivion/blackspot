import axios from "axios";

export function addPost(endpoint, postData, navigate) {
  axios
    .post("//localhost:8000/" + endpoint, postData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editPost(endpoint, postData, navigate) {
  axios
    .put("//localhost:8000/posts/" + endpoint, postData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deletePost(postId, navigate) {
  axios
    .delete("//localhost:8000/posts/" + postId)
    .then(async (response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
