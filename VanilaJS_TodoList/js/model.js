var Model = function () {
        var _todos = new Array();    

	var notifyController = function () {	
            $('body').trigger('updateView');
	}
        // public methods
	return  {
		addTodo: function ( todo ) {
        _todos.push(todo);
        notifyController();
		},
    editTodo: function( index, newTodo ){
        _todos[index] = newTodo;
    },
    deleteTodo: function ( index ) {
        _todos.splice(index,1);
        notifyController();
		},
    getData: function(){
        return _todos;
    },
    //clear complete
    clearComplete: function(){
      for(var i=0; i<_todos.length; i++)
      {
        if(_todos[i].done != undefined && _todos[i].done)
        {
          _todos.splice(i,1);
        }
      }
      notifyController();
    },

    //Done status update
    doneStatus: function(index){
       _todos[index].done = _todos[index].done ? false : true;
    }

	};
};