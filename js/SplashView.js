
var SplashView = function () {
		var instance;
		
	this.initialize = function () {
		 this.$el = $('<div/>');
         this.$el.on('click', '#but1', this.rech_util);
         instance=this;
         this.showSplash();
     };
	

	this.render = function() {
	  this.$el.html(this.template());
      return this;
    };
	
	this.rech_util = function(){	
		var connectmeview=new ConnectMeView();
		connectmeview.setJson({});
		$('body').html(connectmeview.$el);
	};
	
	this.showSplash = function() {
		this.render();
	}
    
    this.initialize();

}
	
