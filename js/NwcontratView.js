var NwcontratView = function () {
		var jsondata;
		var instance;
		
	this.initialize = function () {
         // Define a div wrapper for the view (used to attach events)
		 this.$el = $('<div/>');
     };
	
	
	this.setJson = function(json) {
         jsondata= json;
         this.render();
    };

	this.render = function() {
	  this.$el.html(this.template());
      return this;
    };
	

     
    this.initialize();

}
	
