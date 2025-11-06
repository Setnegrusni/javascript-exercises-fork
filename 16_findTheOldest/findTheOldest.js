const findTheOldest = function(myPeopleArr) {
    return oldest = myPeopleArr.reduce((a, b) => {
        const personA = getAge(a.yearOfBirth, a.yearOfDeath);
        const personB = getAge(b.yearOfBirth, b.yearOfDeath);

        return personA < personB ? b : a;
    })
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
