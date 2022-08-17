const namta = document.getElementById('namta')


function addNamta(){
   const inputNamta = document.getElementById('input')
   const num = Number(inputNamta.value)
   for(let i = 1 ; i < 11 ; i++){
    let number;
     number = i*num
     let li = document.createElement('li')
    li.innerHTML = `<li>${i} x ${num} = ${number}</li>`
      namta.appendChild(li)
   }
   inputNamta.value = "";
}
function hendlClear(){
   namta.innerHTML = ""
}
