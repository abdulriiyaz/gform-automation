import { faker } from "@faker-js/faker";
import formencoded from "form-urlencoded";
import fetch from "node-fetch";

//Form submit endpoint
const googleFormSubmitEndpoint =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfilRIzdtwT3hur3il6ZJxxpZZs3lQ8usVO4aOTl6GT2k7OtQ/formResponse";

//to keep track of current method ID
let count = 0;

async function postForm() {
    let name = faker.name.findName(); //generate random name
    let content = {
        "entry.453677499": name,
        "entry.471813896": faker.datatype.number(), //generate random number
        "entry.1785146000": faker.address.city(), //generate random city
        "entry.1778176075": faker.music.genre(), //generate random genre
        "entry.317118090": "Yes",
        "entry.1092892068": "Yes",
        "entry.1197490236": "Yes",
        "entry.1097751012": "Yes",
        "entry.997810604": "Yes",
        "entry.2026097136": "Yes",
        "entry.1538516791": "Yes",
        "entry.156308794": "No",
        "entry.116378793": "No",
        "entry.1862040785": "No",
        "entry.1644307140": "18 to 25",
        "entry.1825693418": "No",
        "entry.2109347909": "No",
        "entry.1971585020": "No",
        "entry.659217429": "Yes",
        "entry.416625623": "No",
        "entry.1335789746": "Yes",
        "entry.1942817872": "No",
        "entry.1418797260": "No",
        "entry.150646637": "No",
        "entry.145281019": "Yes",
        "entry.444147654": "Yes",
        "entry.756023864": "No",
        "entry.1555559859": "No",
    };
    const response = await fetch(googleFormSubmitEndpoint, {
        method: "post", // `GET` / `POST` / `PUT` / `DELETE`
        body: formencoded(content), //`form-urlencoded`, `json`, `raw`, `blob`, `arraybuffer`, `formdata`
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", //`application/json`, `multipart/form-data`, `text/plain`
        },
    });
    const data = await response.status;

    console.log(count); //current method ID
    console.log(data); //response status (200 = success)
    console.log(name); //name of the person
    count += 1; //increment method ID
}

//number of form submits
let fill = 170;

for (let i = 0; i < fill; i++) {
    //post form method, posts the value to the google form POST endpoint
    postForm();
}
console.log(count);
//postForm();
