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
    //1. create an array of all personIds by mapping ownerships array ->[2,3,3,2]
    const personIds = ownerships.map(obj => obj.personId);
    
    //2. filter personIds array to include only duplicated personIds; compare the index of all the items of an array with the index of the first time that number occurs. If they don’t match, that implies that the element is a duplicate.->[2,3]
    const petLoverIds = personIds.filter((item, index) => personIds.indexOf(item) !== index);

    //3. find all the people.ids from people array which are the same as petLoverId ->  [{ id: 2, name: 'Pete' },{ id: 3, name: 'Stanley' }]
    return petLoverIds.map(petLoverId => people.find(obj => obj.id === petLoverId*1));
      
  };
  console.log(petLovers());
