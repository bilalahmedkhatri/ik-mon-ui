import axios from "axios";

var URL = window.location.href;

export default async function USER({ api }) {
  const getData = await axios.get(URL + api);

  if (getData.status === "200") {
    console.log("results : ", getData.data);
  } else {
    console.log("url no correct ");
  }
}
