// Your code here
const table = document.querySelector('table');
const select = document.querySelector('select')
const createBoard = document.getElementById('create-board');
const addRow = document.getElementById('add-row');
const removeRow = document.getElementById('remove-row');
const addColumn = document.getElementById('add-column');
const removeColumn = document.getElementById('remove-column');
const fillBoard = document.getElementById('fill-board');
const paintRemainder = document.getElementById('paint-remainder');
const clearBoard = document.getElementById('clear-board');
let pickedColor = 'red';
let tds =[];
let columnNum = 0;
let rowNum = 0;
//if (!columnNum) columnNum = 0;
//if (!rowNum) rowNum = 0;



//create board
createBoard.addEventListener('click', () => {
    table.replaceChildren();
    columnNum = document.getElementById('myWidth').value*1;
    rowNum = document.getElementById('myHeight').value*1;
    for (let i = 0; i < rowNum; i++){
        const tr = document.createElement('tr');
        for (let j = 0; j < columnNum; j++){
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});



//add a row
addRow.addEventListener('click', makeRow=() => {
    if (!columnNum) columnNum++;
    const tr = document.createElement('tr');
    for (let i = 0; i < columnNum; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
    rowNum++;
});

//remove a row
removeRow.addEventListener('click', () => {
    if(rowNum > 0){ 
        rowNum --;
        table.deleteRow(0);
    }
    if (!rowNum){
        columnNum = 0;
        table.replaceChildren();
    }
});

//add a column
addColumn.addEventListener('click', () => {
    let rows = document.querySelectorAll('TR');
    if(!rowNum) makeRow();
    else {
        [...rows].forEach(row => {
            row.appendChild(document.createElement('td'));
        })
        columnNum++;
    }
});

//remove a column
 removeColumn.addEventListener('click', () => {
    let rows = document.querySelectorAll('TR');
    if(columnNum>0){
        columnNum--;
        [...rows].forEach(row => {
            row.deleteCell(document.createElement('td'));
        })
    }
    if (!columnNum) {
        rowNum = 0;
        table.replaceChildren();
    }
}); 

//change color by select dropdown
select.addEventListener('change', (ev) => {
    pickedColor=ev.target.value;
    //select.style.backgroundColor=pickedColor;
    select.className = pickedColor
});

//toggle on and off color
table.addEventListener('click', (ev)=>{
    //'TD' need to be capitalized
    if(ev.target.tagName === 'TD'){
        if(ev.target.className === pickedColor){
            ev.target.className = '';
        } else {
            ev.target.className = pickedColor;
        }
    }
});

//fill board
fillBoard.addEventListener('click', ()=>{
    tds = document.querySelectorAll('TD');
    tds.forEach(td => {
        td.className = pickedColor;
    })
});

//paint remainder
paintRemainder.addEventListener('click', ()=>{
    tds = document.querySelectorAll('TD');
    tds.forEach(td => {
        if(td.className === ''){
            td.className = pickedColor;
        }
    })
});

//clear board
clearBoard.addEventListener('click', ()=>{
    tds = document.querySelectorAll('TD');
    tds.forEach(td => {
        td.className = '';
    })
});