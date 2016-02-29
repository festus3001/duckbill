// app/routes.js


 module.exports = function(app) {




		app.get('/api/',function(req,res) {
			res.send('Working');
		});

		// /api/stripe will be passed back through to client
		app.get('/api/stripe/plans',function(req,res) {

			console.log('plans');

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			stripe.plans.list(
 				 { limit: 30 },
  				function(err, plans) {
    				if(err) {
					res.send(err);
				}
				else {
					res.send(plans);
				}
  			}
		);

		});

		// /api/stripe will be passed back through to client
		app.get('/api/stripe/customers',function(req,res) {

			console.log('customers');

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			stripe.customers.list(
  				function(err, customers) {
    				if(err) {
					res.send(err);
				}
				else {

					console.log('customers '+JSON.stringify(customers));

					res.send(customers);
				}
  			}
		);

		});

		// /api/stripe will be passed back through to client
		app.get('/api/stripe/coupons',function(req,res) {

			console.log('coupons');

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			stripe.coupons.list(
  				function(err, coupons) {
    				if(err) {
					res.send(err);
				}
				else {

					console.log('coupons '+JSON.stringify(coupons));

					res.send(coupons);
				}
  			}
		);

		});


		// /api/stripe will be passed back through to client
		app.get('/api/stripe/coupons/:couponId',function(req,res) {

			console.log('coupons/couponId ');

			var couponId = req.params.couponId;

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			stripe.coupons.retrieve(couponId,
  				function(err, coupon) {
    				if(err) {
					res.send(err);
				}
				else {

					console.log('coupons '+JSON.stringify(coupon));

					res.send(coupon);
				}
  			}
		);

		});


		// POST method route
		app.post('/api/stripe/customers', function (req, res) {
  		
  			console.log('api/stripe/customers ');
  			console.log(req.method);

			if (!req.body) return res.sendStatus(400)

			var customer = req.body.customer;

			console.log(req.body);

  			

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			// ember sends req.body
			// { firstName: null, lastName: null, stripeToken: 'tok_17isuGGh9KUxDTDqJzg6Wg4m' }



			stripe.customers.create({description: 'Customer time ', source: req.body.stripeToken, coupon: req.body.coupon},
  				function(err, customerId) {
    				if(err) {

    				console.log('customers error '+JSON.stringify(err));

					res.send(err);
				}
				else {

					console.log('customerId '+JSON.stringify(customerId));

					res.send(customerId);
				}
  			}

		);
		


		});

		// POST method route
		app.post('/api/stripe/subscriptions', function (req, res) {
  		
  			console.log('api/stripe/subscriptions ');
  			console.log(req.method);

			if (!req.body) return res.sendStatus(400);

			console.log(req.body);

			console.log(req.body.plan);

			var stripe = require('stripe')('sk_test_C3Lyo54fnUuOLU1SQ9XD4d5l');

			// ember sends req.body
			// { customer: 'cus_7yqbPhH5syR5Yp', plan: 'Monthy' }
			// https://stripe.com/docs/api#create_subscription

			stripe.customers.createSubscription(req.body.customer, {plan: req.body.plan, coupon: req.body.coupon},
  				function(err, subscription) {
    				if(err) {

    				console.log('subscription error '+JSON.stringify(err));

					res.send(err);
				}
				else {

					console.log('subscription '+JSON.stringify(subscription));

					res.send(subscription);
				}
  			}

		);
	
		


		});

		// default get....
        app.get('*', function(req, res) {

            res.sendFile('/Users/dla/locker/TAA/duckbill/public/index.html'); // load our public/index.html file
        });
};
