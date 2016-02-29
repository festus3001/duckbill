import Ember from 'ember';

// https://guides.emberjs.com/v2.0.0/routing/specifying-a-routes-model/
// http://www.toptal.com/emberjs/a-thorough-guide-to-ember-data#realWorldExample
// http://ember.vicramon.com/ember-route




export default Ember.Route.extend({


model() {

	 // return this.store.findAll('plan');

	
	return Ember.RSVP.hash({
		plans: this.store.findAll('plan')
	});
	
},

/*
 afterModel() {
 	console.log('after called');
 	console.log('model '+JSON.stringify(this.get('plans')));
 }
*/


 setupController(controller, models) {
    controller.set('plans', models.plans);
    // or, more concisely:
    // controller.setProperties(models);
  }

});
