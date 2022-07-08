import axios from "axios";
export function addGuide(endpoint, GuideData, navigate) {
  axios
    .post("//192.168.2.117:8000/" + endpoint, GuideData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editGuide(endpoint, GuideData, navigate) {
  axios
    .put("//192.168.2.117:8000/gameguide/" + endpoint, GuideData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteGuide(gameguideID, navigate) {
  axios
    .delete("//192.168.2.117:8000/gameguide/" + gameguideID)
    .then(async (response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
