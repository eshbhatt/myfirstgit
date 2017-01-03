var myFirstVariable = "Hello";

// now I shall be printing the variable

//console.log(myFirstVariable);

//How to make this run
// Press Ctrl + Shift + B
//then you will the result in shell below

//now let's push to git from atom
// press ctrl + shift + P

var iCounter = 4;

iCounter *= 4;

//console.log(iCounter);

var sFirstName = "Eshita",
    sLastTime = "Bhattacharya";

var oKeyboard = {
    "layout": "English Keyboard",
    "numberOfKeys": "40"
};
var oCrapFriend = {
    "Name": " Sushovan",
    "Looks": "Crappy",
    "Wit": "None"
};
var oMyHome = {
    "Location": {
        "Street": "Heerstr",
        "HouseNumber": "22",
        "Landmark": "Theoder Heus Platz"
    },
    "Floor": "Second"
}
//console.log(oMyHome);

//Lets make some complex objects

var oMyFriend = {
    "home": oMyHome,
    "detail": oCrapFriend
}

//console.log(oMyFriend);

//Now how to access the properties

//I want to know how witty is my Crappy friend

//console.log("How my crappy friend's wit is " + oCrapFriend.Wit);

//console.log("from my friend --> to its crappy look " + oMyFriend.detail.Wit);

var sPropertyDetail = "detail",
    sPropertyWit = "Wit";
console.log(oMyFriend[sPropertyDetail][sPropertyWit]);

var oPropertyKey = {
    "det": "detail",
    "wit": "Wit"
}
console.log(oMyFriend[oPropertyKey.wit]);
