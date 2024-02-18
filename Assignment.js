//NOTE:
// In my pc when compiling to javascript getting error.
//for using includes method but after compiled code runs without error.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2nd Assignment; Personal Message
var Name = "Eric";
console.log("Hello", Name, ", do you want to learn some python code today.");
//3rd Assignment; Name Cases
var Full_Name = "Nahead";
console.log("LowerCase:".concat(Full_Name.toLowerCase()));
console.log("UpperCase:".concat(Full_Name.toUpperCase()));
function titleCase(personname) {
    var name;
    name = personname.toLowerCase().split(" ");
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log("titleCase: ".concat(titleCase("Nahead")));
//4th Assignment; Famous Quote 
var quote = ("Allama Muhammad Iqbal once said,`Be aware of your own worth,\nuse all of your power to achieve it.\nCreate an ocean from a dewdrop.\nDo not beg for light from the moon,\nobtain it from the spark within you.`");
console.log(quote);
//5th Assignment; Famous Quote 2
var message = ("Be aware of your own worth,\nuse all of your power to achieve it.\nCreate an ocean from a dewdrop.\nDo not beg for light from the moon,\nobtain it from the spark within you.");
var famous_person = ("`Allama Muhammad Iqbal`");
console.log(message);
console.log(famous_person);
//6th Assignment; Stripping Names
var F_Name = ("Allama\tmuhammad\nIqbal");
console.log(F_Name);
//7th Assignment; Number Eight
var sum1 = 5;
var sum2 = 3;
console.log(sum1 + sum2);
var sum3 = 12;
var sum4 = 4;
console.log(sum3 - sum4);
var sum5 = 2;
var sum6 = 4;
var sum7 = sum5 * sum6;
console.log(sum7);
var sum8 = 80;
var sum9 = 10;
var sum10 = sum8 / sum9;
console.log(sum10);
//8th Assignment; Number Eight 2
//Name [ROOH U DIN]
//date [saturday; 2/17/2024]
console.log(5 + 3);
console.log(12 - 4);
console.log(2 * 4);
console.log(80 / 10);
//Number Eight 2\nthis program describe  number 8 four times.";
//9th Assignment; Favorite Number
//Name [ROOH U DIN]
//date [saturday; 2/17/2024]
var favorite_number = 7;
console.log("my favorite number is: ", favorite_number);
//this program describe my favorite number.";
//10th Assignment; Adding Comments // this added on 9th assignment; Favorite Number and 8th Assignment; Number Eight 2;
//11th Assignment;Names
var Friends_Names = ["Nahead", "Fahad", "Ayoub", "Atzaz"];
console.log(Friends_Names[0]);
console.log(Friends_Names[1]);
console.log(Friends_Names[2]);
console.log(Friends_Names[3]);
//12th Assignment;Greetings
var Greetings = ["Nahead", "Fahad", "Ayoub", "Atzaz"];
console.log(Greetings[0], "my Assignment 12th is completed.");
console.log(Greetings[1], "my Assignment 12th is completed.");
console.log(Greetings[2], "my Assignment 12th is completed.");
console.log(Greetings[3], "my Assignment 12th is completed.");
//13th Assignment;Your own arrey
var transportation = ["CD70", "Lamborghini", "Helicopter"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
//14 Assignment;Guest List
var guests = ["Ayoub", "Fahad", "Nahead", "Atzaz"];
console.log(guests[0], "invited for the dinner with friends.");
console.log(guests[1], "invited for the dinner with friends.");
console.log(guests[2], "invited for the dinner with friends.");
console.log(guests[3], "invited for the dinner with friends.");
//15 Assignment;Changing Guest List
var Original_guests = ["Ayoub", "Fahad", "Nahead", "Atzaz"];
var New_guest = guests.splice(2, 1, "Shahil");
console.log(guests[0], "invited for the dinner with friends.");
console.log(guests[1], "invited for the dinner with friends.");
console.log(guests[2], "invited for the dinner with friends.");
console.log(guests[3], "invited for the dinner with friends.");
//16th Assignment;More Guests
var OG_guests = ["Ayoub", "Fahad", "Nahead", "Atzaz"];
var Replaced_Guest = guests.splice(2, 1, "Shahil");
guests.unshift("Ahmed");
console.log(guests[0], "invited for the dinner with friends.");
console.log(guests[1], "invited for the dinner with friends.");
console.log(guests[2], "invited for the dinner with friends.");
console.log(guests[3], "invited for the dinner with friends.");
console.log(guests[4], "invited for the dinner with friends.");
//17th Assignment; Shrinking Guest List
var Og_guests = ["Ayoub", "Fahad", "Nahead", "Atzaz"];
var NewGuest = guests.splice(2, 1, "Shahil");
guests.unshift("Ahmed");
var Shrinking = guests.splice(2);
console.log("Sorry guys i can invite two peoples for the dinner.");
console.log(guests[0], "invited for the dinner with friends.");
console.log(guests[1], "invited for the dinner with friends.");
//18th Assignment; Seeing The World
var places = ["South Korea", "Islamabad", "Hong Kong", "Japan", "New York"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Sorted in alphabetical order:", places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", places);
//19th Assignment;Dinner Guests from 14th Assignment
var guests_List = ["Ayoub", "Fahad", "Nahead", "Atzaz"];
console.log(guests_List.length);
//20th Assignment; Thinking Of Something
var Cities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
console.log("List of cites", Cities);
//21th Assignment; They Think Of Something
var person = { name: "Rooh", gender: "Male", age: 20 };
console.log(person);
//22th Assignment; Intentional Error
var food = ["Biryani", "Roti", "Daal", "Pizza", "Omelette", "Burger"];
//console.log(foot);
console.log(food);
//23th Assignment;Conditional Tests
var car = "bmw";
console.log(car == "bmw");
var bike = "CD70";
console.log(bike == "CD125");
var game = "Tekken 8";
console.log(game == "Tekken 8");
var game_2 = "GTA 6";
console.log(game_2 == "GTA 5");
var city = "Karachi";
console.log(city == "pakistan");
var country = "Pakistan";
console.log(country == "Karachi");
var mobile = "Realme";
console.log(mobile == "Realme");
var villain = "thanos";
console.log(villain == "thanos");
var hero = "batman";
console.log(hero == "batman");
var laptop = "i have";
console.log(laptop == "i don`t have");
//24th Assignment; More Conditional Tests
var Game = "Tekken 8";
var Game_2 = "GTA 6";
console.log("Equality test:", Game === Game_2);
console.log("Inequality test:", Game !== Game_2);
var Villain = "Thanos";
var Hero = "Batman";
console.log("Lowercase test:", Villain.toLowerCase() === Hero);
var Bike = "CD70";
var Bike_2 = "CD125";
console.log("Equality test:", Bike === Bike_2);
console.log("Inequality test:", Bike !== Bike_2);
console.log("Greater than test:", Bike > Bike_2);
console.log("Less than test:", Bike < Bike_2);
console.log("Greater than or equal to test:", Bike >= Bike_2);
console.log("Less than or equal to test:", Bike <= Bike_2);
var trueValue = true;
var falseValue = false;
console.log("And operator:", trueValue && falseValue);
console.log("Or operator:", trueValue || falseValue);
//25th Assignment;Alien Colors #1:
var alien_color = "green";
if (alien_color = "green")
    console.log("You just earned 5 points");
else
    ;
console.log("");
//26th Assignment; Alien Color #2:
var alien_color_if = "green";
if (alien_color_if === "green") {
    console.log("You just earned 5 points");
}
else {
    console.log("You just earned 10 points");
}
var alien_color_else = "red";
if (alien_color_else === "green")
    console.log("You just earned 5 points");
else
    ;
console.log("You just earned 10 points");
//27th Assignment; Alien Color #3:
var alien_color_green = "green";
if (alien_color_green === "green")
    console.log("Congratulation!You just killed green alien you earned 5 points");
var alien_color_yellow = "yellow";
if (alien_color_yellow === "yellow")
    console.log("Congratulation!You just killed yellow alien you earned 10 points");
var alien_color_red = "red";
if (alien_color_red === "red")
    console.log("Congratulation!You just killed red alien you earned 15 points");
//28th Assignment;Stage Of Life:
var Age = 20;
if (Age <= 2)
    console.log("You are a baby");
if (Age >= 2 && Age < 4)
    console.log("You are a toddler");
if (Age >= 4 && Age < 13)
    console.log("You are a kid");
if (Age >= 13 && Age < 20)
    console.log("You are a teenager");
if (Age >= 20 && Age < 65)
    console.log("You are a Adult");
if (Age >= 65)
    console.log("You are a elder");
//29th Assignment;Favorite Fruits:
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.find(function (fruit) { return fruit === "apple"; })) {
    console.log("You really like apples!");
}
if (favorite_fruits.find(function (fruit) { return fruit === "banana"; })) {
    console.log("You really like bananas!");
}
if (favorite_fruits.find(function (fruit) { return fruit === "orange"; })) {
    console.log("You really like oranges!");
}
if (favorite_fruits.find(function (fruit) { return fruit === "strawberry"; })) {
    console.log("You really like strawberries!");
}
else {
    console.log("Strawberries are not in your favorite fruits.");
}
if (favorite_fruits.find(function (fruit) { return fruit === "kiwi"; })) {
    console.log("You really like kiwis!");
}
else {
    console.log("Kiwis are not in your favorite fruits.");
}
// 30th Assignment; Hello Admin:
var User_Names = ["Fahad", "Admin", "Nahead", "Ayoub", "Atzaz"];
User_Names.forEach(function (User_Names) {
    if (User_Names === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(User_Names, ", thank you for logging in again."));
    }
});
//31th Assignment; No Users:
var No_Users = [""];
No_Users.forEach(function (No_Users) {
    if (No_Users.length === 0) {
        console.log("We need ti find some users");
    }
    else {
        console.log("Hello ".concat(No_Users, ", thank you for logging in again."));
    }
});
//32th Assignment;Checking User Names:
var current_users = ["Fida", "Fahad", "Atzaz", "Ayoub", "Nahead", "Thanos"];
var new_users = ["Tony", "Fahad", "Atzaz", "Steve"];
new_users.forEach(function (new_users) {
    var lowercase_new_user = new_users.toLowerCase();
    if (current_users.map(function (user) { return user.toLocaleLowerCase(); }).includes(lowercase_new_user)) {
        console.log("Sorry, the username'".concat(new_users, " is already taken.please enter a new username'"));
    }
    else {
        console.log("Congratulation! The username is'".concat(new_users, "' is available"));
    }
});
//33th Assignment;Ordinal Numbers:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var ordinalEnding = void 0;
    if (numbers[i] === 1) {
        ordinalEnding = "st";
    }
    else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    }
    else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(numbers[i] + ordinalEnding);
}
//34th AAssignment; Pizzas
var favorite_Pizzas = ["Pepperoni", "Seekh Kabab", "BBQ Buzz"];
console.log("My favorite pizzas:");
for (var _b = 0, favorite_Pizzas_1 = favorite_Pizzas; _b < favorite_Pizzas_1.length; _b++) {
    var pizza = favorite_Pizzas_1[_b];
    console.log(pizza);
}
console.log("\nStatements about my favorite pizzas:");
for (var _c = 0, favorite_Pizzas_2 = favorite_Pizzas; _c < favorite_Pizzas_2.length; _c++) {
    var pizza = favorite_Pizzas_2[_c];
    console.log("My Favorite is ".concat(pizza, " pizza."));
}
console.log("\nI don`t love pizza but i like to eat pizza. ");
// 35th Assignment; Animals
var cat_Family = ["Lion", "Tiger", "Leopard"];
console.log("Animals in the cat family:");
for (var _i = 0, cat_Family_1 = cat_Family; _i < cat_Family_1.length; _i++) {
    var animal = cat_Family_1[_i];
    console.log(animal);
}
console.log("\nStatements about animals in the cat family:");
for (var _a = 0, cat_Family_2 = cat_Family; _a < cat_Family_2.length; _a++) {
    var animal = cat_Family_2[_a];
    console.log("A ".concat(animal, " would make a majestic predator."));
}
console.log("\nThese animals are all part of the cat family and are known for their agility and power. \nAny of these animals would make a great predator!");
// 36th Assignment; T-Shirt:
function make_shirt(size, message) {
    console.log("size:".concat(size, ",\nmassage:\"").concat(message, "\""));
}
make_shirt(24, "If your present is not\n better than your past\nyour not livivg youre life.");
//37th Assignment;Large Shirts:
function large_shirts(large, medium, small) {
    if (large === void 0) { large = "large: "; }
    if (medium === void 0) { medium = "medium: "; }
    if (small === void 0) { small = "small: "; }
    console.log("size:".concat(large, "message:\"I love typescript\",\nsize:").concat(medium, "message:\"I love typescript\",\nsize:").concat(small, "message:\"If your present is not\n better than your past\nyour not livivg youre life.\""));
}
large_shirts();
//38th Assignment;Cites:
function describe_city(ciTy, counTry) {
    console.log("".concat(ciTy, "is in ").concat(counTry));
}
describe_city("karachi", "pakistan");
describe_city("new york", "america");
describe_city("tokyo", "japan");
//39th Assignment;City Names:
function city_country(cIty, couNtry) {
    return "".concat(cIty, ",").concat(couNtry);
}
console.log(city_country("berlin", "germany"));
console.log(city_country("hongkong", "china"));
console.log(city_country("mumbai", "india"));
function make_Album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album('Taylor Swift', 'love story');
var album2 = make_Album('Jennie', 'You And Me');
var album3 = make_Album('Rahim Shah', 'Pehle to kabhi kabhi gam tha');
console.log(album1);
console.log(album2);
console.log(album3);
//41th Assignment; magicians:
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicianNames = ['David', 'Harry', 'Penn', 'Teller', 'Dynamo'];
showMagicians(magicianNames);
//42th Assignment; Great Magicians:
function showMaGicians(maGicians) {
    maGicians.forEach(function (maGician) { return console.log(maGician); });
}
function makeGreat(maGicians) {
    return maGicians.map(function (maGician) { return "the Great ".concat(maGician); });
}
var maGicianNames = ['David', 'Harry', 'Penn', 'Teller', 'Dynamo'];
maGicianNames = makeGreat(maGicianNames);
showMaGicians(maGicianNames);
//43th Assignment;
function make_Great(magiCians) {
    var greatMagiCians = [];
    for (var _b = 0, magiCians_1 = magiCians; _b < magiCians_1.length; _b++) {
        var magiCian = magiCians_1[_b];
        var greatMagiCian = magiCian + " the Great";
        greatMagiCians.push(greatMagiCian);
    }
    return greatMagiCians;
}
function showMagiCians(magiCians) {
    for (var _b = 0, magiCians_2 = magiCians; _b < magiCians_2.length; _b++) {
        var magiCian = magiCians_2[_b];
        console.log(magiCian);
    }
}
var magicians = ["Harry", "David", "Penn", "Teller", "Dynamo"];
var greatMagicians = make_Great(__spreadArray([], magicians, true));
console.log("Original Magicians:");
showMagiCians(magicians);
console.log("\nGreat Magicians:");
showMagiCians(greatMagicians);
// 44th Assignment;SandWitches
function order_Sandwich() {
    var items = [];
    for (var _b = 0; _b < arguments.length; _b++) {
        items[_b] = arguments[_b];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _c = 0, items_1 = items; _c < items_1.length; _c++) {
            var item = items_1[_c];
            console.log("- " + item);
        }
    }
    console.log("");
}
order_Sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_Sandwich("cheese", "Omelette");
order_Sandwich("Salad");
// 45th Assignment; Cars:
function Car(manufacturer, modelName, colOr, year) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        colOr: colOr,
        year: year,
    };
    return car;
}
var myCar = Car("Lamborghini", "Gallardo", "red", 2024);
console.log(myCar);
