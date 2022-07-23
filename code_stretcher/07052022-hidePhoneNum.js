const arr = [2125559786, 3475551234, 6465559023, 7185554587, 9175550123];
const doSomething = (arr) => {
  return arr.map((code)=>{
    return code.toString().substring(0, 3).concat("xxxxxxx")
  })
}
console.log(doSomething(arr))
