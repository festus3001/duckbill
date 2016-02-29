import Ember from 'ember';

export default Ember.Controller.extend({
	
	plan: null,

    // The simple answer is, put routing-related actions in the router, and controller/model-related actions in the controller.
    actions: {
   
    toStepTwo: function() {
    	
      		console.log('stepTwo '+this.plan);
      		
    	}
  	}
});
