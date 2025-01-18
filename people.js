const myName = require('./names');
const myHobbies = require('./hobbies');

function people (){
    return{
        fullname : myName('Lisa', 'Della Ducata'),
        hobbies : myHobbies('palestra', 'cinema', 'musica')
    }
   
}

console.log(people())

