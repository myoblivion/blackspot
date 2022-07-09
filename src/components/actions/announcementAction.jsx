import axios from "axios";
export function addAnnounce(endpoint, AnnouncementData, navigate) {
  axios
    .post("https://192.168.2.117:8000/" + endpoint, AnnouncementData)
    .then(async (response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editAnnouncement(endpoint, AnnouncementData, navigate) {
  axios
    .put(
      "https://192.168.2.117:8000/announcements/" + endpoint,
      AnnouncementData
    )
    .then(async (response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteAnnouncement(announcementID, navigate) {
  axios
    .delete("https://192.168.2.117:8000/announcements/" + announcementID)
    .then(async (response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
