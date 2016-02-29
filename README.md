# Duck-bill : Node - Express 4.0 - Ember 2.3 - Stripe API. 


	Here is a bit more of an example on how to do coupons, discounts and payment plans using stripe.

	Most calls will be run through the back end node/express api except for the card numbers to token creation.
	For the back end server.js we will be using the official stripe libriary for node.js.
		



## Installation

* `git clone https://github.com/festus3001/duckbill.git` this repository
* change into the new directory
* `npm install`
* cd into the front end.
* cd DuckBill
* `npm install`
* `bower install`
* set up your stripe keys in 
  *  app/routes.js
	var stripe = require('stripe')('sk_test_yours');
  * DuckBill/config/environment.js 
	ENV.stripe = {
        publishableKey: 'pk_test_yours'
    };


## Running / Development

* It seems easiest to run the node server on one terminal:
* `nodemon server.js`

* Then in a second terminal:
* cd into the front end.
* cd DuckBill
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build --environment=production --output-path=../public/` (production)


## Further Reading / Useful Links
* [stripe.js](https://stripe.com/docs/api#intro)


## General subjects it might be good to have handy
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

