// var storeTasks = [];

$(document).ready(function() {
  var currentList;
  $("form#add-lists").submit(function(event) {
    event.preventDefault();
    var newList = {name: "", tasks: [], completed: false};

    newList.name = $("input#add-a-list").val();

    currentList = newList;

    $("ol#my-lists").append("<li><input type='checkbox' id='completedCheck'><span class='list'>" + " " + newList.name + "</span></li>");
      $("input#add-a-list").val("");

    $("input[type=checkbox]").last().click(function() {

      if (!newList.completed) {
        newList.completed = true;
        $('ol#completed-tasks').append($(this).parent());
      }
      else {
        newList.completed = false;
        $('ol#my-lists').append($(this).parent());
      }
    });

    $(".list").last().click(function() {
      $("ul#tasks").empty();
      currentList = newList;
      $("#show-task").show();
      newList.tasks.forEach(function(list){
        $("ul#tasks").append("<li>" + list + "</li>");
      });
      $(".detail-center").text(currentList.name);
    });
  });

  $("form#task-list").submit(function(event){
    event.preventDefault();
    currentList.tasks.push($("input#new-task").val());
    $("ul#tasks").empty();
    currentList.tasks.forEach(function(list){
        $("ul#tasks").append("<li>" + list + "</li>");
    });
    $("input#new-task").val("");
  });
});

