const userInput = document.querySelector('#input')
const submitBtn = document.querySelector('#button')
const displayTasklist = document.querySelector('#display')



// adding a event listener, when user click on the submit button below performe happen
submitBtn.addEventListener('click', function(e){
  e.preventDefault()                // this prevent default behaviour of form submittion and reloading
  let userData = userInput.value   // this will get the user inpur value and will store a variable named userData.
  pushElement(userData)           // then, here a function is called to perform. and user data which store the value of user input will be pass as a argument. 
  userInput.value = ''           // after performing the function's code. clear the input value. user will able to enter fresh value agin.
  
})


//  here we create a function which already called erliar on the above event, and store it to a variable. 

const pushElement = function(item){
  const listItem = document.createElement('li')
  listItem.classList.add('flex')
  listItem.classList.add('justify-between')
  listItem.classList.add('items-center')
  listItem.classList.add('px-8')
  listItem.classList.add('gap-12')
  listItem.classList.add('tracking-wider')
  listItem.innerHTML = `${item} <i class="ri-close-fill text-2xl font-bold text-white hover:text-red-700 cursor-pointer"></i>`
  displayTasklist.appendChild(listItem)

  listItem.querySelector('i').addEventListener('click', (item) => {
    listItem.remove(item)
  })
}