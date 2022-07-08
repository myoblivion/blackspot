import axios from "axios";
export function addAnnounce(endpoint, AnnouncementData, navigate) {
  axios
    .post("//localhost/" + endpoint, AnnouncementData)
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
    .put("//localhost/announcements/" + endpoint, AnnouncementData)
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
    .delete("//localhost/announcements/" + announcementID)
    .then(async (response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
