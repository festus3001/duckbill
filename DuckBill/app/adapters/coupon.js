import DS from 'ember-data';

// http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

export default DS.RESTAdapter.extend({

	host: 'http://localhost:3000',
 	namespace: 'api/stripe'

});

