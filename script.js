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
const pushElement = function(item){               // now each function will have and item/data/value bydeafult, because previously we pass userData as an argument. 
  const listItem = document.createElement('li')  // now creat a List item for each value/item/data we get whenever function run, & each list item will store to a variable
  listItem.innerHTML = `${item}`                // after creating the list insert innerHtml to the list. every list item will store the item which we get pervioulsy through function.
  listItem.style ="margin-bottom : 15px"       // add style to the list item
  displayTasklist.appendChild(listItem)       // now append the cild item (which is List item, created earlier to add the ures input as a list item). 
}