function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started")
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;

    //fill in the variables
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code was inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //things to check for ... fullNameLength is less than 20, 
    //zip code has only 5 digits

    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid zip code";
    } else {
        alert("User credentials passed, welcome to the site, " + fullName);
    }

}

function checkPalin() {
    console.log.apply("checkPalin() stated");


    //record the string of letters into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace);

    //create reverse array variable and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length;
    console.log("string length is " + length);

    //input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reversed being equal is: " + equal);


    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome."
    }
}