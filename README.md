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


## Running / Development

* It seems easiest to run the node server on one terminal:

* `export NODE_ENV=development`
* `export NODE_PORT=3000`
* `export STRIPE_SECRET_KEY=sk_test_yours`
* `nodemon server.js`

* Then in a second terminal:
* cd into the front end.
* cd DuckBill
* `export NODE_ENV=development`
* `export NODE_PORT=3000`
* `export STRIPE_PUBLISHABLE_KEY=pk_test_yours`
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build --environment=production --output-path=../public/` (production)


## Background docs used to create this:
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [stripe.js](https://stripe.com/docs/api#intro)


* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



