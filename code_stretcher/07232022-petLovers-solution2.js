    // our goal is to find all people who has more than 1 pet
    // 1. in ownerships array, if the person with personId shows up more than once, that means they own more than 1 pet
    // 1a. we need a way to keep track of how many pets everyone owns
    // 1b. we are going to make an objects. the "key" is the person's id, and the value is how many pets they own
    // { '2': 1, '3': 2 }
    // now we have an object of how many pets everyone owns
    // 2. loop through the object. if the value is ever more than 1, that person has more than 1 pet
    // 3. keep track of all the people that has more than 1 pet
    
    const petLovers = () => {
      const pets = [
        { id: 1, name: 'Fido' },
        { id: 2, name: 'Rex' },
        { id: 3, name: 'Fluffy' },
      ];
    
      const people = [
        { id: 1, name: 'Prof' },
        { id: 2, name: 'Pete' },
        { id: 3, name: 'Stanley' },
        { id: 4, name: 'Ben' },
      ];
    
      const ownerships = [
        { personId: 2, petId: 2 },
        { personId: 3, petId: 2 },
        { personId: 3, petId: 3 },
        { personId: 2, petId: 4 }
      ];
    const ownedPets = {};
    
    ownerships.forEach(ownership => {
      const personId = ownership.personId;
      
      // is personId NOT in ownedPets?
      // if not, we set the value to 1. this means we found a pet that the person owns
      if (!ownedPets.hasOwnProperty(personId)) {
        ownedPets[personId] = 1;
      } else { // is personId in ownedPets? if yes, we just increment the value
        ownedPets[personId]++;
      }
    });
  
    const peopleWithMoreThanOnePet = [];
    // { '2': 1, '3': 2 }
    // this loops through the keys
    for (const personId in ownedPets) {
      // this variable signifies the value
      const numberOfPets = ownedPets[personId];
  
      // is numberOfPets greater than 1?
      if (numberOfPets > 1) {
        peopleWithMoreThanOnePet.push(personId);
      }
    }
  
    // this is an array of personIds
    // we want to translate this array of personIds
    // into an array of PEOPLE
    // ['3', '2', '1', '4']
    // Array.map() can be used on an array
    // it does something to every single element
    
    return peopleWithMoreThanOnePet.map(personId => {
      const person = people.find(person => person.id === +personId);
      return person;
    })
  };
  
  console.log(petLovers());