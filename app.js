//import { faker } from "@faker-js/faker";
import formencoded from "form-urlencoded";
import fetch from "node-fetch";
//import names indian-names.js
import {names} from "./indian-names.js";

//Form submit endpoint
const googleFormSubmitEndpoint =
    "https://docs.google.com/forms/d/e/1FAIpQLSfpvIIesA3SONQ2GMqWo0fNZT0a9Jv7EPj8XKsGt28mSrJLww/formResponse";

//to keep track of current method ID
let count = 1;
const Options = ["No", "Yes"];
const ageGroupOptions = [
    "18 to 25",
    "26 to 35",
];

const ages = ["18","19","20","21","22","23","24","25"];

const carMovies = ["Fast and Furious", "James bond", "Race", "Dhoom", "Dhoom 3","Fast and Furious 2", "Ford V Ferrari"];

//import indian-name.json

let start = true;

async function postForm() {
 //get random name from names array

 if(start){
 const name = names[Math.floor(Math.random() * names.length)];
    let content = {
"entry.999848775": name,
"entry.1189298264": ages[Math.floor(Math.random() * ages.length)],
"entry.1493240356": "Mumbai",
"entry.1726608943": carMovies[Math.floor(Math.random() * carMovies.length)],
"entry.240759879": Options[Math.floor(Math.random() * Options.length)],
"entry.1633139715": Options[Math.floor(Math.random() * Options.length)],
"entry.997610792": Options[Math.floor(Math.random() * Options.length)],
"entry.187623787": Options[Math.floor(Math.random() * Options.length)],
"entry.2093484688": Options[Math.floor(Math.random() * Options.length)],
"entry.212013391": Options[Math.floor(Math.random() * Options.length)],
"entry.1429566411": Options[Math.floor(Math.random() * Options.length)],
"entry.799816217": Options[Math.floor(Math.random() * Options.length)],
"entry.646463261": Options[Math.floor(Math.random() * Options.length)],
"entry.1662038934": Options[Math.floor(Math.random() * Options.length)],
"entry.911227992": ageGroupOptions[`${Math.floor(Math.random() * ageGroupOptions.length)}`],
"entry.1773217526": Options[Math.floor(Math.random() * Options.length)],
"entry.1595520794": Options[Math.floor(Math.random() * Options.length)],
"entry.1217283805": Options[Math.floor(Math.random() * Options.length)],
"entry.1443797093": Options[Math.floor(Math.random() * Options.length)],
"entry.187697671": Options[Math.floor(Math.random() * Options.length)],
"entry.724322255": Options[Math.floor(Math.random() * Options.length)],
"entry.976185566": Options[Math.floor(Math.random() * Options.length)],
"entry.873330061": Options[Math.floor(Math.random() * Options.length)],
"entry.117773476": Options[Math.floor(Math.random() * Options.length)],
"entry.1455095997": Options[Math.floor(Math.random() * Options.length)],
"entry.373447069": Options[Math.floor(Math.random() * Options.length)],
"entry.1381825164": Options[Math.floor(Math.random() * Options.length)],
"entry.158859900": Options[Math.floor(Math.random() * Options.length)]
    };

    const response = await fetch(googleFormSubmitEndpoint, {
        method: "post", // `GET` / `POST` / `PUT` / `DELETE`
        body: formencoded(content), //`form-urlencoded`, `json`, `raw`, `blob`, `arraybuffer`, `formdata`
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", //`application/json`, `multipart/form-data`, `text/plain`
        },
    });
    const data = response.status;

    if(data === 200){
        //console.log(count); //current method ID
        //console.log(data); //response status (200 = success)
        console.log(name); //name of the person
        count += 1;
    }
    else{
        //
    }; //increment method ID
 }
    //return content;
}

//number of form submits
// let fill = 170;

// for (let i = 0; i < fill; i++) {
//     //post form method, posts the value to the google form POST endpoint
//     postForm();
// }

let submitCount = 20;
(async ()=>{
for (let i = 0; i < submitCount; i++) {
    await postForm(); 
    console.log(`Successfully submitted ${count} forms.`);
}
})();

//console.log(count);
//postForm();
