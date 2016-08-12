var Controller = function (view, model) {

        var _view = view;
        var _model = model;
        
        // event binding
        $('body').bind('addItem', function(e) { 
           _model.addTodo( e.todo );
        });
         $('body').bind('deleteItem', function(e) { 
           _model.deleteTodo( e.index );
        });
        $('body').bind('updateView', function(e) { 
            _view.updateView( _model.getData() );
        });

        //clear complete
        $('body').bind('clearItems', function(e) { 
            _model.clearComplete();
        });

        //update done status
        $('body').bind('updateStatus', function(e) { 
            _model.doneStatus( e.index );
        });

	/*return  {
               // public functions
	};*/
};