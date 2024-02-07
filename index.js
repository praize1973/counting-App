
let countEL = document.getElementById('count-el')
let saveEL = document.getElementById('save-el')

let count = 0
function  increment(){
  count += 1
  countEL.textContent = count
}

function save(){
  let countDashSeperator = count + " - "
  saveEL.textContent += countDashSeperator
  countEL.textContent = 0
    count = 1
}
