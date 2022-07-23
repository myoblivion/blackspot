import axios from "axios";
export function addGuide(endpoint, GuideData, navigate) {
  axios
    .post("http://localhost:443/" + endpoint, GuideData)
    .then((response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editGuide(endpoint, GuideData, navigate) {
  axios
    .put("http://localhost:443/gameguide/" + endpoint, GuideData)
    .then((response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteGuide(gameguideID, navigate) {
  axios
    .delete("http://localhost:443/gameguide/" + gameguideID)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
