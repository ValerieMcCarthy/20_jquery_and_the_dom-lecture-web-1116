$(document).ready(function(){
  $('form#todo-form').submit(function(event){
    // stop the default action
    event.preventDefault()
    // find what the user inputted
    var $input = $('input#todo')
    var newTodoItem = $input.val()
    if (newTodoItem.length > 0 ) {
      $('ul#todos').append(`<li class='collection-item'>${newTodoItem}</li>`)
      // clear the input
      $input.val('')
    }
    // append that to the ul in the DOM...

  })
})
