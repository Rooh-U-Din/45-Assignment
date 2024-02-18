//NOTE:
// In my pc when compiling to javascript getting error.
//for using includes method but after compiled code runs without error.


//2nd Assignment; Personal Message

let Name = "Eric"
console.log("Hello",Name,", do you want to learn some python code today.")

//3rd Assignment; Name Cases

let  Full_Name = "Nahead"
console.log(`LowerCase:${Full_Name.toLowerCase()}`)
 console.log(`UpperCase:${Full_Name.toUpperCase()}`)

 function titleCase(personname:String){
    let name;
    name = personname.toLowerCase().split(" ")
    for(let i = 0;i < name.length;i++){
        name[i]= name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join (" ");
 }
 console.log(`titleCase: ${titleCase("Nahead")}`);

//4th Assignment; Famous Quote 

const quote:string=("Allama Muhammad Iqbal once said,`Be aware of your own worth,\nuse all of your power to achieve it.\nCreate an ocean from a dewdrop.\nDo not beg for light from the moon,\nobtain it from the spark within you.`")
console.log(quote)

//5th Assignment; Famous Quote 2

let message:string=("Be aware of your own worth,\nuse all of your power to achieve it.\nCreate an ocean from a dewdrop.\nDo not beg for light from the moon,\nobtain it from the spark within you.")
const famous_person=("`Allama Muhammad Iqbal`")
console.log(message)
console.log(famous_person)

//6th Assignment; Stripping Names

const F_Name = ("Allama\tmuhammad\nIqbal")
console.log(F_Name)

//7th Assignment; Number Eight

let sum1 = 5
let sum2 =3
console.log(sum1+sum2);
let sum3 = 12
let sum4 = 4
console.log(sum3-sum4);
let sum5 = 2
let sum6 = 4
const sum7= sum5*sum6
console.log(sum7);
let sum8 = 80
let sum9=10
const sum10 = sum8/sum9
console.log(sum10);

//8th Assignment; Number Eight 2
//Name [ROOH U DIN]
//date [saturday; 2/17/2024]

console.log(5+3);
console.log(12-4);
console.log(2*4);
console.log(80/10);
//Number Eight 2\nthis program describe  number 8 four times.";


//9th Assignment; Favorite Number
//Name [ROOH U DIN]
//date [saturday; 2/17/2024]

var favorite_number=7
console.log("my favorite number is: ",favorite_number);
//this program describe my favorite number.";




//10th Assignment; Adding Comments // this added on 9th assignment; Favorite Number and 8th Assignment; Number Eight 2;

//11th Assignment;Names
const Friends_Names =["Nahead","Fahad","Ayoub","Atzaz"]
console.log(Friends_Names[0]);
console.log(Friends_Names[1]);
console.log(Friends_Names[2]);
console.log(Friends_Names[3]);

//12th Assignment;Greetings

const Greetings =["Nahead","Fahad","Ayoub","Atzaz"]
console.log(Greetings[0],"my Assignment 12th is completed.");
console.log(Greetings[1],"my Assignment 12th is completed.");
console.log(Greetings[2],"my Assignment 12th is completed.");
console.log(Greetings[3],"my Assignment 12th is completed.");

//13th Assignment;Your own arrey

let transportation =["CD70","Lamborghini","Helicopter"]
transportation.map((items)=> console.log(`I would like to own a ${items}`))

//14 Assignment;Guest List

let guests = ["Ayoub","Fahad","Nahead","Atzaz"]
console.log(guests[0],"invited for the dinner with friends.")
console.log(guests[1],"invited for the dinner with friends.")
console.log(guests[2],"invited for the dinner with friends.")
console.log(guests[3],"invited for the dinner with friends.")

//15 Assignment;Changing Guest List

let Original_guests = ["Ayoub","Fahad","Nahead","Atzaz"]
let New_guest = guests.splice(2,1,"Shahil")
console.log(guests[0],"invited for the dinner with friends.")
console.log(guests[1],"invited for the dinner with friends.")
console.log(guests[2],"invited for the dinner with friends.")
console.log(guests[3],"invited for the dinner with friends.")

//16th Assignment;More Guests

let OG_guests = ["Ayoub","Fahad","Nahead","Atzaz"]
let Replaced_Guest = guests.splice(2,1,"Shahil")
guests.unshift("Ahmed")
console.log(guests[0],"invited for the dinner with friends.")
console.log(guests[1],"invited for the dinner with friends.")
console.log(guests[2],"invited for the dinner with friends.")
console.log(guests[3],"invited for the dinner with friends.")
console.log(guests[4],"invited for the dinner with friends.")

//17th Assignment; Shrinking Guest List

let Og_guests = ["Ayoub","Fahad","Nahead","Atzaz"]
let NewGuest = guests.splice(2,1,"Shahil")
guests.unshift("Ahmed")
let Shrinking=guests.splice(2)
console.log("Sorry guys i can invite two peoples for the dinner.")
console.log(guests[0],"invited for the dinner with friends.")
console.log(guests[1],"invited for the dinner with friends.")

//18th Assignment; Seeing The World

let places = ["South Korea","Islamabad","Hong Kong","Japan","New York"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();

console.log("Reversed order:", places);

places.reverse();

console.log("Original order:", places);

places.sort();

console.log("Sorted in alphabetical order:", places);

places.sort((a, b) => b.localeCompare(a));

console.log("Sorted in reverse alphabetical order:", places);

//19th Assignment;Dinner Guests from 14th Assignment

let guests_List =["Ayoub","Fahad","Nahead","Atzaz"]
console.log(guests_List.length);

//20th Assignment; Thinking Of Something

let  Cities:string[]=["Karachi","Hyderabad","Lahore","Quetta"]
console.log("List of cites",Cities);



//21th Assignment; They Think Of Something

let person:{name:string,gender:string,age:number}={name:"Rooh",gender:"Male",age:20}
console.log(person)

//22th Assignment; Intentional Error

const food =["Biryani","Roti","Daal","Pizza","Omelette","Burger"];
//console.log(foot);
console.log(food);

//23th Assignment;Conditional Tests

let car="bmw";
console.log(car=="bmw");
let bike ="CD70";
console.log(bike=="CD125");
let game ="Tekken 8";
console.log(game=="Tekken 8");
let game_2="GTA 6";
console.log(game_2=="GTA 5");
let city ="Karachi";
console.log(city=="pakistan");
let country="Pakistan";
console.log(country =="Karachi");
let mobile="Realme";
console.log(mobile=="Realme");
let villain="thanos";
console.log(villain=="thanos");
let hero="batman";
console.log(hero=="batman");
let laptop="i have"
console.log(laptop=="i don`t have")

//24th Assignment; More Conditional Tests

const Game: string = "Tekken 8";
const Game_2: string = "GTA 6";

console.log("Equality test:", Game === Game_2);
console.log("Inequality test:", Game !== Game_2); 

const Villain: string = "Thanos";
const Hero: string = "Batman";

console.log("Lowercase test:", Villain.toLowerCase() === Hero);


const Bike:string ="CD70";
const Bike_2: string = "CD125";

console.log("Equality test:", Bike === Bike_2);
console.log("Inequality test:", Bike !== Bike_2); 
console.log("Greater than test:", Bike > Bike_2); 
console.log("Less than test:", Bike < Bike_2);
console.log("Greater than or equal to test:", Bike >= Bike_2);
console.log("Less than or equal to test:", Bike <= Bike_2); 

const trueValue: boolean = true;
const falseValue: boolean = false;

console.log("And operator:", trueValue && falseValue); 
console.log("Or operator:", trueValue || falseValue);

//25th Assignment;Alien Colors #1:

let alien_color = "green";
if(alien_color ="green")
console.log("You just earned 5 points")
else;
console.log("");

//26th Assignment; Alien Color #2:

let alien_color_if = "green";
if(alien_color_if ==="green"){
console.log("You just earned 5 points");
} else{
console.log("You just earned 10 points");}

let alien_color_else = "red";
if(alien_color_else ==="green")
console.log("You just earned 5 points");
else;
console.log("You just earned 10 points");

//27th Assignment; Alien Color #3:

let alien_color_green = "green";
if(alien_color_green ==="green")
console.log("Congratulation!You just killed green alien you earned 5 points");


let alien_color_yellow = "yellow";
if(alien_color_yellow ==="yellow")
console.log("Congratulation!You just killed yellow alien you earned 10 points");


let alien_color_red= "red";
if(alien_color_red ==="red")
console.log("Congratulation!You just killed red alien you earned 15 points");

//28th Assignment;Stage Of Life:

let Age = 20
if(Age <=2)
console.log("You are a baby")
if(Age>=2 && Age <4)
console.log("You are a toddler")
if(Age>=4 && Age <13)
console.log("You are a kid")
if(Age>=13 && Age <20)
console.log("You are a teenager")
if(Age>=20 && Age <65)
console.log("You are a Adult")
if(Age>=65)
console.log("You are a elder")

//29th Assignment;Favorite Fruits:

const favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.find(fruit => fruit === "apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.find(fruit => fruit === "banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.find(fruit => fruit === "orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.find(fruit => fruit === "strawberry")) {
    console.log("You really like strawberries!");
} else {
    console.log("Strawberries are not in your favorite fruits.");
}

if (favorite_fruits.find(fruit => fruit === "kiwi")) {
    console.log("You really like kiwis!");
} else {
    console.log("Kiwis are not in your favorite fruits.");
}

// 30th Assignment; Hello Admin:

const User_Names= ["Fahad", "Admin", "Nahead", "Ayoub", "Atzaz"];
User_Names.forEach(User_Names => {
    if (User_Names === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${User_Names}, thank you for logging in again.`);
    }
});

//31th Assignment; No Users:

const No_Users= [""];
No_Users.forEach(No_Users => {
    if(No_Users.length === 0) {
        console.log("We need ti find some users")
        } else {
        console.log(`Hello ${No_Users}, thank you for logging in again.`);
    }
});

//32th Assignment;Checking User Names:

let current_users = ["Fida","Fahad","Atzaz","Ayoub","Nahead","Thanos"]
let new_users = ["Tony","Fahad","Atzaz","Steve"]

new_users.forEach(new_users => {
    const lowercase_new_user = new_users.toLowerCase();
    if (current_users.map(user => user.toLocaleLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username'${new_users} is already taken.please enter a new username'`)
    } else {
        console.log(`Congratulation! The username is'${new_users}' is available`)
    }
})

//33th Assignment;Ordinal Numbers:

let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding;
    if (numbers[i] === 1) {
        ordinalEnding = "st";
    } else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    } else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    console.log(numbers[i] + ordinalEnding);
}

//34th AAssignment; Pizzas

const favorite_Pizzas= ["Pepperoni", "Seekh Kabab", "BBQ Buzz"];
console.log("My favorite pizzas:");
for (let pizza of favorite_Pizzas) {
    console.log(pizza);
}
console.log("\nStatements about my favorite pizzas:");
for (let pizza of favorite_Pizzas) {
    console.log(`My Favorite is ${pizza} pizza.`);
}
console.log("\nI don`t love pizza but i like to eat pizza. ");

// 35th Assignment; Animals

let cat_Family = ["Lion", "Tiger", "Leopard"];
console.log("Animals in the cat family:");
for (let _i = 0, cat_Family_1 = cat_Family; _i < cat_Family_1.length; _i++) {
    let animal = cat_Family_1[_i];
    console.log(animal);
}
console.log("\nStatements about animals in the cat family:");
for (let _a = 0, cat_Family_2 = cat_Family; _a < cat_Family_2.length; _a++) {
    let animal = cat_Family_2[_a];
    console.log("A ".concat(animal, " would make a majestic predator."));
}
console.log("\nThese animals are all part of the cat family and are known for their agility and power. \nAny of these animals would make a great predator!");

// 36th Assignment; T-Shirt:

function make_shirt(size:number,message:string){
    console.log(`size:${size},\nmassage:"${message}"`);
}
make_shirt(24,"If your present is not\n better than your past\nyour not livivg youre life.")

//37th Assignment;Large Shirts:

function large_shirts(large:string= "large: ",medium:string="medium: ",small:string="small: "){
    console.log(`size:${large}message:"I love typescript",\nsize:${medium}message:"I love typescript",\nsize:${small}message:"If your present is not\n better than your past\nyour not livivg youre life."`);
}
large_shirts()

//38th Assignment;Cites:

function describe_city(ciTy:string,counTry:string){
    console.log(`${ciTy}is in ${counTry}`)
}
describe_city("karachi","pakistan")
describe_city("new york","america")
describe_city("tokyo","japan")

//39th Assignment;City Names:

function city_country(cIty:string,couNtry:string){
    return `${cIty},${couNtry}`;
}

console.log(city_country("berlin","germany"))
console.log(city_country("hongkong","china"))
console.log(city_country("mumbai","india"))

// //40th Assignment;Album

interface Album{
    artist: string;
    title: string;
    tracks?: number;
}
function make_Album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = make_Album('Taylor Swift', 'love story');
const album2 = make_Album('Jennie', 'You And Me');
const album3 = make_Album('Rahim Shah', 'Pehle to kabhi kabhi gam tha');

console.log(album1);
console.log(album2);
console.log(album3);

//41th Assignment; magicians:

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
const magicianNames: string[] = ['David', 'Harry', 'Penn', 'Teller','Dynamo'];
showMagicians(magicianNames);

//42th Assignment; Great Magicians:

function showMaGicians(maGicians: string[]): void {
    maGicians.forEach(maGician => console.log(maGician));
}

function makeGreat(maGicians: string[]): string[] {
    return maGicians.map(maGician => `the Great ${maGician}`);
}
let maGicianNames: string[] = ['David', 'Harry', 'Penn', 'Teller','Dynamo'];
maGicianNames = makeGreat(maGicianNames);
showMaGicians(maGicianNames);

//43th Assignment;

function make_Great(magiCians: string[]): string[] {
    const greatMagiCians: string[] = [];
    for (const magiCian of magiCians) {
        const greatMagiCian = magiCian + " the Great";
        greatMagiCians.push(greatMagiCian);
    }
    return greatMagiCians;
}

function showMagiCians(magiCians: string[]): void {
    for (const magiCian of magiCians) {
        console.log(magiCian);
    }
}

const magicians: string[] = ["Harry", "David", "Penn", "Teller", "Dynamo"];
const greatMagicians: string[] = make_Great([...magicians]);
console.log("Original Magicians:");
showMagiCians(magicians);
console.log("\nGreat Magicians:");
showMagiCians(greatMagicians);

// 44th Assignment;SandWitches

function order_Sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("");
}
order_Sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_Sandwich("cheese", "Omelette");
order_Sandwich("Salad");

// 45th Assignment; Cars:

function Car(manufacturer: string, modelName: string,colOr:string,year:number): any {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
        colOr:colOr,
        year:year,
    };
    return car
}

const myCar = Car("Lamborghini", "Gallardo","red",2024);
console.log(myCar);
