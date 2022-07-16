// array of employees you will be working with
// every employee has an id
// an employee's managerId is the id of their manager
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

// TASK 1: write the findManagerFor function
// arguments are an id of an employee, and a list of employees 
// example usage: findManagerFor(8, employees)
// example result: { id: 4, name: 'shep', managerId: 2 }
// you can verify that the method is working by using console.logs with some of the employee id's

// TASK 2: write the findCoworkersFor function 
// arguments are an id of an employee and a list of employees
// example usage: findCoworkersFor(2, employees)
/* example result
[ { id: 3, name: 'curly', managerId: 1 },
  { id: 99, name: 'lucy', managerId: 1 } ]
*/
// note it returns all employees who work for the same manager, but not the employee with the passed in id

// you can verify that the function is working by using console.logs with some of the employee id's

//Task 3: Display Employees
/* using DOM manipulation display the name each employee in an LI in the UL on the index.html page */ 

//TASK 4: Display Managers 
/* using DOM manipulation and the findManagerFor function, display the managers name of the employee next to the employee in the LI where the employee is displayed */

// Task 5: Display Coworkers
/* using DOM manipulation display the co-workers of the employee displayed in the LI, in an unordered list which is nested under the LI of the employee */
