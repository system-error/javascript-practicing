function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

// var John = calculateAge(1990);

// console.log(John);


function ageOFRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if ( retirement >= 0){
        console.log(name+ " retires in " + age + " years.");
    }else{
        console.log(name + " is already retired.");
    }
}

ageOFRetirement('John', 1990);
ageOFRetirement('Mary', 1948);
