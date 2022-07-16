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

//#1find manager by employeeId
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
//#3 Display Employees
const

/* using DOM manipulation display the name each employee in an LI in the UL on the index.html page */ 



//TASK 4: Display Managers 
/* using DOM manipulation and the findManagerFor function, display the managers name of the employee next to the employee in the LI where the employee is displayed */

// Task 5: Display Coworkers
/* using DOM manipulation display the co-workers of the employee displayed in the LI, in an unordered list which is nested under the LI of the employee */
