import axios from "axios";
export function addAnnounce(endpoint, AnnouncementData, navigate) {
  axios
    .post("http://localhost:80/" + endpoint, AnnouncementData)
    .then((response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editAnnouncement(endpoint, AnnouncementData, navigate) {
  axios
    .put("http://localhost:80/announcements/" + endpoint, AnnouncementData)
    .then((response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteAnnouncement(announcementID, navigate) {
  axios
    .delete("http://localhost:80/announcements/" + announcementID)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
