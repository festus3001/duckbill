import DS from 'ember-data';

// http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
// {"id":"10off","object":"coupon","amount_off":null,"created":1456259241,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":10,"redeem_by":null,"times_redeemed":0,"valid":true}

// It expects this classic form of JSON:
export default DS.JSONSerializer.extend({


});
