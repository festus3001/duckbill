import DS from 'ember-data';

export default DS.Model.extend({
  	
  	customer: DS.attr(),
  	plan: DS.attr(),
  	coupon: DS.attr(),

});
