const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];

//helper function - get managerId by employeeId
getManagerId = (employeeId,list)=>{
  return list.filter(x => x.id === employeeId)[0].managerId;
}


//#1 find manager by employeeId
findManagerFor = (employeeId,list)=>{
  let theManagerId = getManagerId(employeeId,list);
  return list.filter(x => x.id === theManagerId)[0];
}
//console.log(findManagerFor(8,employees))

//#2 find coworkers by employeeId
findCoworkersFor = (employeeId,list)=>{
  let theManagerId = getManagerId(employeeId,list);
  return list.filter(x => x.managerId === theManagerId && x.id !==employeeId)
}
//console.log(findCoworkersFor(2,employees))

//get Elements
ul = document.getElementById('employee-list');
dbButton = document.getElementById('db');

//#3 4 5 Display Employees, Manager, Coworkers
dbButton.addEventListener('click',()=>{
  for(let i=0; i<employees.length; i++){
    let employeeValues = Object.values(employees[i])
    let employeeID = employeeValues[0]
    let employeeName = employeeValues[1]
    let managerID = employeeValues[2]

    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText=employeeName

    if(managerID) {
      li.innerText += ` (managed by: ${(findManagerFor(employeeID,employees)).name})`
    }
    
    let coworkers = findCoworkersFor(employeeID,employees) 
    if(coworkers.length!==0){ 
     const ul2 = document.createElement('ul');
     li.appendChild(ul2);
     for(let i=0; i<coworkers.length; i++){
        let coWorkerValues = Object.values(coworkers[i])

        const li2 = document.createElement('li');
        ul2.appendChild(li2);
        li2.innerText=coWorkerValues[1]
        }
    }
  }
},{ once: true })
