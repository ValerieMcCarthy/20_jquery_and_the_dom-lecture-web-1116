$( addFormEventHandler )
// $(document).ready(addFormEventHandler)
//  $(document).on('ready', addFormEventHandler)
// addFormEventHandler will get called whenever the DOM is ready

function addFormEventHandler () {
  $('form#todo-form').submit( handleFormSubmit )
}

function handleFormSubmit (event) {
  event.preventDefault()
  var newTodoItem =  getUserInput()
  appendListItem(newTodoItem)
}

function getUserInput(){
  var $input = $('input#todo')
  var newTodoItem =  $input.val()
  $input.val('')
  return newTodoItem
}

function appendListItem(newTodoItem){
  if (newTodoItem.length > 0 ) {
    $('ul#todos').append(`<li class='collection-item'>${newTodoItem}</li>`)
  }
}
