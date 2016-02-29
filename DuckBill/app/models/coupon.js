import DS from 'ember-data';

// coupons {"object":"list","data":[{"id":"20off","object":"coupon","amount_off":null,"created":1456259259,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":20,"redeem_by":null,"times_redeemed":0,"valid":true},{"id":"10off","object":"coupon","amount_off":null,"created":1456259241,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":10,"redeem_by":null,"times_redeemed":0,"valid":true}],"has_more":false,"url":"/v1/coupons"}

export default DS.Model.extend({
	
	amount_off: DS.attr('number'),
	percent_off: DS.attr('number'),
	redeem_by:  DS.attr('number'),
  

});
