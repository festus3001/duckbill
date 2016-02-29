import DS from 'ember-data';

export default DS.Model.extend({

// {"object":"list","data":[{"id":"Yearly","object":"plan","amount":29999,"created":1456259211,"currency":"usd","interval":"year","interval_count":1,"livemode":false,"metadata":{},"name":"Yearly Subscription","statement_descriptor":null,"trial_period_days":null},{"id":"Monthly","object":"plan","amount":2999,"created":1456259173,"currency":"usd","interval":"month","interval_count":1,"livemode":false,"metadata":{},"name":"Monthly Subscription","statement_descriptor":null,"trial_period_days":null}],"has_more":false,"url":"/v1/plans"}
	
	name: DS.attr('string'),
	amount: DS.attr('number')
  
});
