//Find if a person is full aged or not.
// Loop exersice
// Function exersice
// Iterate arrays

function printFullAge(yearsWhereBorn) {
    var personAges = [];
    var fullAges = [];
    for (var i = 0; i < yearsWhereBorn.length; i++) {
        personAges.push(2018 - yearsWhereBorn[i]);
        //var age = 2018 - yearsWhereBorn[i];
    }

    for (var i = 0; i < personAges.length; i++) {
        if (personAges[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + personAges[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + personAges[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    return fullAges;
}
var yearsWhereBorn = [1965, 1970, 1999, 2006, 1986, 2000];
var yearsWhereBorn1 = [1940, 1996, 1980, 2004, 1955, 2008];
var full_1 = printFullAge(yearsWhereBorn);
var full_2 = printFullAge(yearsWhereBorn1);
