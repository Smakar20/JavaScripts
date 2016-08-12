var View = function () {
	var updateView = function ( todos ) {	
            $('#todoList li').remove();
            for( var i = 0, len = todos.length; i < len; i++ ){
              $('#todoList')
               .append( '<li style="list-style-type:none;"><input type="checkbox" id="' + i + '" />' + todos[i].item 
               + '<a data-index="' + i + '" href="#" style="padding-left: 5px;">remove</a></li>');
            }

            //delete
            $('#todoList a').on("click", function(e){
                var $todo = e.currentTarget;
                var event = jQuery.Event("deleteItem");
                event.index = $($todo).attr('data-index');
                $('body').trigger(event);
            });

            //checkbox change
            $('#todoList input').on("click", function(e){
                var $todo = e.currentTarget;
                var event = jQuery.Event("updateStatus");
                event.index = $($todo).attr('id');
                $('body').trigger(event);
            });

	};
        
        //set handlers for the view
        var initView = function(){
            // enter key
            $('#addTodo').on("keypress", function(e){
              if(e.which == 13){
                var event = jQuery.Event("addItem");
                var listItem = {
                    item: $('#addTodo')[0].value,
                    done: false
                };
                event.todo = listItem;//$('#addTodo')[0].value;
                $('body').trigger(event);
                $('#addTodo')[0].value = '';
               }
              });

            //clear todo
            $("#Clear").on("click", function(e){
                var event = jQuery.Event("clearItems");
                $('body').trigger(event);
            });
        };
        initView();
        
	return  {
		updateView: function (todos) {
                    updateView(todos);
		}
	};
};