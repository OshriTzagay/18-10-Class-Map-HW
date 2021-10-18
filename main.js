let myMap = new Map();

// myMap.set("Apple","Red")
// myMap.set("Banana","Yellow")
// myMap.set("Orange","Orange")
// myMap.set("Watermelon","Green&Red")
// myMap.set("someFruit","Purple");
// myMap.set("BlackBerry","Black");
// myMap.set("SomeOrangeFruit","Orange");

// // console.log(myMap.get("BlackBerry"));
// // console.log(myMap.values());
// // console.log(myMap.keys());

// for (const item of myMap.values()) {
//   if (myMap.values("Orange")) {
//      console.log(myMap.keys)
//   }
// }

let niggasMap = new Map();
niggasMap.set("Avtamo", 26);
niggasMap.set("Demoz", 65);
niggasMap.set("Shugot", 30);
niggasMap.set("Gashaw", 79);
// console.log(niggasMap.keys());
// console.log(niggasMap.values());

for (const item of niggasMap.keys()) {
  trKeys.innerHTML += `<td> ${item} </td>`;
  trValues.innerHTML += `<td> ${niggasMap.get(item)} </td>`;
}

let mixedMap = new Map();
mixedMap.set("footballPlayers", [
  "Messi",
  "Penaldo",
  "Tsabalala",
  "BaruchDego",
]);
mixedMap.set("APPLE", ["iPhoneX", "AirPods", "MacBook", "anotherAppleSht"]);
mixedMap.set("Rappers", ["J.Cole", "2Pac", "RoddyRich", "DMX"]);
mixedMap.set("Colors", ["Red", "Blue", "Yellow", "AforAhbar"]);

// console.log(mixedMap);

let carMap = new Map();
carMap.set("Car1", { name: "Lambo", year: 2020, color: "Yellow", smk: 0 });
carMap.set("Car2", { name: "Rarri", year: 2019, color: "mat-Black", smk: 440 });
carMap.set("Car3", {
  name: "SubaroPesa",
  year: 2001,
  color: "Blue",
  smk: 55550,
});
carMap.set("Car4", { name: "Volvo", year: 1990, color: "Orange", smk: 6660 });

// console.log(carMap.get("Car1"));

class CPU {
  company;
  model;
  year;
  color;
  constructor(company, model, year, color) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
let cpu1 = new CPU("Asus", "A", 2000, "white");
let cpu2 = new CPU("Intel", "C", 2000, "black");
let cpu3 = new CPU("Lenovo", "Z", 2000, "blue");
let cpu4 = new CPU("DELL", "Y", 2000, "gray");
let computers = [];
computers.push(cpu1, cpu2, cpu3, cpu4);
console.log(computers);
// ------------------------------------------------>

let cpuMap = new Map();

computers.forEach((item) => {
  cpuMap.set(item.company, item);
});
console.log(cpuMap);

let btn = document.getElementById("btn");
// btn.onclick = (()=>{
//     computers.forEach(item => {
//         if (item.company == "Lenovo") {
//             alert("Yes , We Got Lenovo...")
//         }
//         else{
//             alert("NO GTFO...")
//         }
//     });
// })

// btn.onclick = () => {
//   if (cpuMap.has("Lenovo") == true) {
//     alert("We Got Lenovo For u");
//   } else {
//     alert("GTFO");
//   }
//   console.log(cpuMap);
// };
// ====================IF מקוצררררררר========================
btn.onclick = () => {
  cpuMap.has("Lenovo")?alert("Yep."):alert("GTFO.")
  };
