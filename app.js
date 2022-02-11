import { faker } from "@faker-js/faker";
import formencoded from "form-urlencoded";
import fetch from "node-fetch";

//Form submit endpoint
const googleFormSubmitEndpoint =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfilRIzdtwT3hur3il6ZJxxpZZs3lQ8usVO4aOTl6GT2k7OtQ/formResponse";

//to keep track of current method ID
let count = 0;
const Options = ["No", "Yes"];
const ageGroupOptions = [
    "18 to 25",
    "26 to 35",
    "36 to 45",
    "46 to 55",
    "56 to 65",
    "66 to 75",
    "76 to 85",
    "86 to 95",
    "96 to 105",
];

async function postForm() {
    let name = faker.name.findName(); //generate random name
    let content = {
        "entry.453677499": name,
        "entry.471813896": faker.datatype.number(), //generate random number
        "entry.1785146000": faker.address.city(), //generate random city
        "entry.1778176075": faker.music.genre(), //generate random genre
        "entry.317118090": Options[Math.floor(Math.random() * Options.length)], //generate random option
        "entry.1092892068": Options[Math.floor(Math.random() * Options.length)],
        "entry.1197490236": Options[Math.floor(Math.random() * Options.length)],
        "entry.1097751012": Options[Math.floor(Math.random() * Options.length)],
        "entry.997810604": Options[Math.floor(Math.random() * Options.length)],
        "entry.2026097136": Options[Math.floor(Math.random() * Options.length)],
        "entry.1538516791": Options[Math.floor(Math.random() * Options.length)],
        "entry.156308794": Options[Math.floor(Math.random() * Options.length)],
        "entry.116378793": Options[Math.floor(Math.random() * Options.length)],
        "entry.1862040785": Options[Math.floor(Math.random() * Options.length)],
        "entry.1644307140":
            ageGroupOptions[Math.floor(Math.random() * ageGroupOptions.length)],
        "entry.1825693418": Options[Math.floor(Math.random() * Options.length)],
        "entry.2109347909": Options[Math.floor(Math.random() * Options.length)],
        "entry.1971585020": Options[Math.floor(Math.random() * Options.length)],
        "entry.659217429": Options[Math.floor(Math.random() * Options.length)],
        "entry.416625623": Options[Math.floor(Math.random() * Options.length)],
        "entry.1335789746": Options[Math.floor(Math.random() * Options.length)],
        "entry.1942817872": Options[Math.floor(Math.random() * Options.length)],
        "entry.1418797260": Options[Math.floor(Math.random() * Options.length)],
        "entry.150646637": Options[Math.floor(Math.random() * Options.length)],
        "entry.145281019": Options[Math.floor(Math.random() * Options.length)],
        "entry.444147654": Options[Math.floor(Math.random() * Options.length)],
        "entry.756023864": Options[Math.floor(Math.random() * Options.length)],
        "entry.1555559859": Options[Math.floor(Math.random() * Options.length)],
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
