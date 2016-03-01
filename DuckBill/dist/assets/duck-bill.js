"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('duck-bill/adapters/coupon', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

  exports['default'] = _emberData['default'].RESTAdapter.extend({

    host: 'http://localhost:3000',
    namespace: 'api/stripe'

  });
});
define('duck-bill/adapters/customer', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    host: 'http://localhost:3000',
    namespace: 'api/stripe'

  });
});
define('duck-bill/adapters/plan', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    host: 'http://localhost:3000',
    namespace: 'api/stripe'

  });
});
define('duck-bill/adapters/subscription', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    host: 'http://localhost:3000',
    namespace: 'api/stripe'

  });
});
define('duck-bill/app', ['exports', 'ember', 'duck-bill/resolver', 'ember-load-initializers', 'duck-bill/config/environment'], function (exports, _ember, _duckBillResolver, _emberLoadInitializers, _duckBillConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _duckBillConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _duckBillConfigEnvironment['default'].podModulePrefix,
    Resolver: _duckBillResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _duckBillConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('duck-bill/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'duck-bill/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _duckBillConfigEnvironment) {

  var name = _duckBillConfigEnvironment['default'].APP.name;
  var version = _duckBillConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('duck-bill/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('duck-bill/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('duck-bill/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('duck-bill/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('duck-bill/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('duck-bill/components/power-select-multiple/options', ['exports', 'ember-power-select/components/power-select-multiple/options'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleOptions['default'];
    }
  });
});
define('duck-bill/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('duck-bill/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('duck-bill/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('duck-bill/components/signup-plans', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('duck-bill/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('duck-bill/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('duck-bill/controllers/plans', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    plan: null,

    // The simple answer is, put routing-related actions in the router, and controller/model-related actions in the controller.
    actions: {

      toStepTwo: function toStepTwo() {

        console.log('stepTwo ' + this.plan);
      }
    }
  });
});
define('duck-bill/controllers/signup', ['exports', 'ember'], function (exports, _ember) {

  // https://guides.emberjs.com/v1.10.0/object-model/what-do-i-use-when/

  exports['default'] = _ember['default'].Controller.extend({

    selectedPlan: null,
    discountCode: '',
    total: 0,

    fname: '',
    lname: '',
    email: 'dla223@flazeebo.com',

    number: '4012888888881881',
    cvc: '123',
    exp_month: '12',
    exp_year: '24',

    message: '',

    stripeTokenId: null,

    customer: null,

    stripe: _ember['default'].inject.service(),

    actions: {

      setPlan: function setPlan(plan) {
        this.set('selectedPlan', plan);
        console.log(" setPlan called " + this.get('selectedPlan'));

        var thisPlan = this.get('selectedPlan');

        var newtotal = thisPlan.get('amount') / 100;

        this.set('total', newtotal.toFixed(2));

        return false;
      },
      checkDiscount: function checkDiscount() {

        this.set('total', this.get('total'));

        if (this.get('discountCode')) {

          var self = this; // Store away current this 

          this.store.findRecord('coupon', this.get('discountCode')).then(function (response) {

            var discount = self.get('total') * (response.get('percent_off') * 0.01);
            var newTotal = self.get('total') - (discount + response.get('amount_off'));

            self.set('total', newTotal.toFixed(2));
          }); // end discountCode exists

          //           console.log(couponResponse);
        }

        return false;
      },
      signup: function signup() {
        console.log(" signup called ");

        var self = this; // Store away current this
        this.set('message', 'signup');

        // let's get a token from stripe so we can get to business
        this.stripeCreateToken().then(function (response) {

          console.log(" signup stripeCreateToken then : ");
          console.log(" current stripeTokenId " + self.get('stripeTokenId'));

          // create customer
          var customer = self.store.createRecord('customer', {

            firstName: self.get('fname'),
            lastName: self.get('lname'),
            email: self.get('email'),
            stripeToken: self.get('stripeTokenId')

          });

          customer.save().then(function (response) {
            // customer

            console.log('customer save then starts');

            console.log(response.id);

            // subscribe customer to plan

            var thisPlan = self.get('selectedPlan');

            var subscription = self.store.createRecord('subscription', {

              customer: response.id,
              plan: thisPlan.get('id'),
              coupon: self.get('discountCode')

            });

            subscription.save();
          }); // customer
        }); // stripeCreateToken
      }
    },
    stripeCreateToken: function stripeCreateToken() {

      var self = this; // Store away current this

      // obtain access to the injected service
      var stripe = this.get('stripe');

      var mycard = {
        number: this.get('number'),
        cvc: this.get('cvc'),
        exp_month: this.get('exp_month'),
        exp_year: this.get('exp_year')
      };

      console.log("mycard " + JSON.stringify(mycard));

      return stripe.card.createToken(mycard).then(function (response) {

        console.log("token id " + response.id);

        self.set('stripeTokenId', response.id);
      }).then(function () {

        self.set('message', 'called 3rd time');
      })['catch'](function (response) {
        // if there was an error retrieving the token you could get it here

        console.log("error retrieving the token " + JSON.stringify(response));

        self.set('message', response.error.message);

        if (response.error.type === 'card_error') {
          // show the error in the form or something
          console.log("card_error " + JSON.stringify(response));
        }
      });
    }

  });
  // end of  export default Ember.Controller.extend({
});
define('duck-bill/helpers/ember-power-select-build-selection', ['exports', 'ember-power-select/helpers/ember-power-select-build-selection'], function (exports, _emberPowerSelectHelpersEmberPowerSelectBuildSelection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectBuildSelection', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectBuildSelection.emberPowerSelectBuildSelection;
    }
  });
});
define('duck-bill/helpers/ember-power-select-option-classes', ['exports', 'ember-power-select/helpers/ember-power-select-option-classes'], function (exports, _emberPowerSelectHelpersEmberPowerSelectOptionClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectOptionClasses', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses.emberPowerSelectOptionClasses;
    }
  });
});
define('duck-bill/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('duck-bill/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('duck-bill/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'duck-bill/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _duckBillConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_duckBillConfigEnvironment['default'].APP.name, _duckBillConfigEnvironment['default'].APP.version)
  };
});
define('duck-bill/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('duck-bill/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('duck-bill/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('duck-bill/initializers/export-application-global', ['exports', 'ember', 'duck-bill/config/environment'], function (exports, _ember, _duckBillConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_duckBillConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _duckBillConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_duckBillConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('duck-bill/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('duck-bill/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('duck-bill/initializers/stripe-service', ['exports', 'ember', 'duck-bill/config/environment'], function (exports, _ember, _duckBillConfigEnvironment) {
  exports.initialize = initialize;

  var debug = _duckBillConfigEnvironment['default'].LOG_STRIPE_SERVICE;

  function initialize() {
    if (debug) {
      _ember['default'].Logger.info('StripeService: initialize');
    }

    if (!_duckBillConfigEnvironment['default'].stripe.publishableKey) {
      throw new _ember['default'].Error('StripeService: Missing Stripe key, please set `ENV.stripe.publishableKey` in config.environment.js');
    }

    Stripe.setPublishableKey(_duckBillConfigEnvironment['default'].stripe.publishableKey);
  }

  exports['default'] = {
    name: 'stripe',
    initialize: initialize
  };
});
/* global Stripe */
define('duck-bill/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("duck-bill/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('duck-bill/models/coupon', ['exports', 'ember-data'], function (exports, _emberData) {

	// coupons {"object":"list","data":[{"id":"20off","object":"coupon","amount_off":null,"created":1456259259,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":20,"redeem_by":null,"times_redeemed":0,"valid":true},{"id":"10off","object":"coupon","amount_off":null,"created":1456259241,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":10,"redeem_by":null,"times_redeemed":0,"valid":true}],"has_more":false,"url":"/v1/coupons"}

	exports['default'] = _emberData['default'].Model.extend({

		amount_off: _emberData['default'].attr('number'),
		percent_off: _emberData['default'].attr('number'),
		redeem_by: _emberData['default'].attr('number')

	});
});
define('duck-bill/models/customer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    email: _emberData['default'].attr(),
    stripeToken: _emberData['default'].attr()
  });
});
define('duck-bill/models/plan', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({

		// {"object":"list","data":[{"id":"Yearly","object":"plan","amount":29999,"created":1456259211,"currency":"usd","interval":"year","interval_count":1,"livemode":false,"metadata":{},"name":"Yearly Subscription","statement_descriptor":null,"trial_period_days":null},{"id":"Monthly","object":"plan","amount":2999,"created":1456259173,"currency":"usd","interval":"month","interval_count":1,"livemode":false,"metadata":{},"name":"Monthly Subscription","statement_descriptor":null,"trial_period_days":null}],"has_more":false,"url":"/v1/plans"}

		name: _emberData['default'].attr('string'),
		amount: _emberData['default'].attr('number')

	});
});
define('duck-bill/models/subscription', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    customer: _emberData['default'].attr(),
    plan: _emberData['default'].attr(),
    coupon: _emberData['default'].attr()

  });
});
define('duck-bill/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('duck-bill/router', ['exports', 'ember', 'duck-bill/config/environment'], function (exports, _ember, _duckBillConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _duckBillConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('signup');
  });

  exports['default'] = Router;
});
define('duck-bill/routes/signup', ['exports', 'ember'], function (exports, _ember) {

  // https://guides.emberjs.com/v2.0.0/routing/specifying-a-routes-model/
  // http://www.toptal.com/emberjs/a-thorough-guide-to-ember-data#realWorldExample
  // http://ember.vicramon.com/ember-route

  exports['default'] = _ember['default'].Route.extend({

    model: function model() {

      // return this.store.findAll('plan');

      return _ember['default'].RSVP.hash({
        plans: this.store.findAll('plan')
      });
    },

    /*
     afterModel() {
     	console.log('after called');
     	console.log('model '+JSON.stringify(this.get('plans')));
     }
    */

    setupController: function setupController(controller, models) {
      controller.set('plans', models.plans);
      // or, more concisely:
      // controller.setProperties(models);
    }

  });
});
define('duck-bill/serializers/coupon', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
  // {"id":"10off","object":"coupon","amount_off":null,"created":1456259241,"currency":null,"duration":"once","duration_in_months":null,"livemode":false,"max_redemptions":null,"metadata":{},"percent_off":10,"redeem_by":null,"times_redeemed":0,"valid":true}

  // It expects this classic form of JSON:
  exports['default'] = _emberData['default'].JSONSerializer.extend({});
});
define('duck-bill/serializers/customer', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/

  exports['default'] = _emberData['default'].JSONSerializer.extend({});
});
define('duck-bill/serializers/plan', ['exports', 'ember-data'], function (exports, _emberData) {

  // http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/
  // // {"object":"list","data":[{"id":"Yearly","object":"plan","amount":29999,"created":1456259211,"currency":"usd","interval":"year","interval_count":1,"livemode":false,"metadata":{},"name":"Yearly Subscription","statement_descriptor":null,"trial_period_days":null},{"id":"Monthly","object":"plan","amount":2999,"created":1456259173,"currency":"usd","interval":"month","interval_count":1,"livemode":false,"metadata":{},"name":"Monthly Subscription","statement_descriptor":null,"trial_period_days":null}],"has_more":false,"url":"/v1/plans"}

  exports['default'] = _emberData['default'].RESTSerializer.extend({

    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = {
        plans: payload.data
      };

      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('duck-bill/serializers/subscription', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONSerializer.extend({});
});
define('duck-bill/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('duck-bill/services/stripe', ['exports', 'duck-bill/config/environment', 'ember'], function (exports, _duckBillConfigEnvironment, _ember) {

  /**
   * Uses Ember.Logger.info to output service information if LOG_STRIPE_SERVICE is
   * set
   *
   * notes:
   * - proxies all arguments to Ember.Logger.info
   * - pre-pends StripeService to all messages
   */
  function debug() {
    var debuggingEnabled = typeof _duckBillConfigEnvironment['default'].LOG_STRIPE_SERVICE !== 'undefined';

    if (!debuggingEnabled) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments);
    args[0] = 'StripeService: ' + args[0];
    _ember['default'].Logger.info.apply(null, args);
  }

  /**
   * Creates a creditCard token using Stripe.js API, exposed as `card.createToken`
   * @param  {ojbect} card  CreditCard
   * @return {promise}      Returns a promise that holds response, see stripe.js docs for details
   *                        status is not being returned at the moment but it can be logged
   */
  function createCardToken(card) {
    debug('card.createToken:', card);

    return new _ember['default'].RSVP.Promise(function (resolve, reject) {
      Stripe.card.createToken(card, function (status, response) {

        debug('card.createToken handler - status %s, response:', status, response);

        if (response.error) {
          return _ember['default'].run(null, reject, response);
        }

        _ember['default'].run(null, resolve, response);
      });
    });
  }

  /**
   * Creates a BankAccout token using Stripe.js API, exposed as `bankAccount.createToken`
   * @param  {ojbect} bankAccount
   * @return {promise}      Returns a promise that holds response, see stripe.js docs for details
   *                        Status is not being returned at the moment but it can be logged
   *
   */
  function createBankAccountToken(bankAccount) {
    debug('bankAccount.createToken:', bankAccount);

    return new _ember['default'].RSVP.Promise(function (resolve, reject) {
      Stripe.bankAccount.createToken(bankAccount, function (status, response) {

        debug('bankAccount.createToken handler - status %s, response:', status, response);

        if (response.error) {
          return _ember['default'].run(null, reject, response);
        }

        _ember['default'].run(null, resolve, response);
      });
    });
  }

  /**
   * List plans using Stripe.js API, exposed as `plan.plans`
   * @return {promise}      Returns a promise that holds response, see stripe.js docs for details
   *                        status is not being returned at the moment but it can be logged
   */
  function listPlans() {
    debug('plan.listPlans:');

    console.log(" -- listPlans");

    return new _ember['default'].RSVP.Promise(function (resolve, reject) {

      console.log(Stripe.plans);

      Stripe.plans.list(function (status, response) {

        console.log("service -- listPlans");

        console.log('service -- plan.listPlans handler - status %s, response:', status, response);

        if (response.error) {
          console.log("service -- response error");

          return _ember['default'].run(null, reject, response);
        }

        // http://emberjs.com/api/classes/Ember.run.html
        _ember['default'].run(null, resolve, response);
      });
    });
  }

  /**
   * Expose module
   */
  exports['default'] = _ember['default'].Service.extend({
    card: {
      createToken: createCardToken
    },
    bankAccount: {
      createToken: createBankAccountToken
    },
    plan: {
      listPlans: listPlans
    }

  });
});
/* global Stripe */
define("duck-bill/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "duck-bill/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("duck-bill/templates/components/signup-plans", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "duck-bill/templates/components/signup-plans.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "plan.title", ["loc", [null, [2, 4], [2, 18]]]], ["content", "yield", ["loc", [null, [3, 0], [3, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("duck-bill/templates/plans", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "duck-bill/templates/plans.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
          return morphs;
        },
        statements: [["content", "plan.name", ["loc", [null, [11, 4], [11, 17]]]]],
        locals: ["plan"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 2
            },
            "end": {
              "line": 21,
              "column": 2
            }
          },
          "moduleName": "duck-bill/templates/plans.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "index", ["loc", [null, [20, 21], [20, 26]]]]], ["attribute", "selected", ["subexpr", "eq", [["get", "vehicleIndex", ["loc", [null, [20, 44], [20, 56]]]], ["get", "index", ["loc", [null, [20, 57], [20, 62]]]]], [], ["loc", [null, [20, 39], [20, 64]]]]], ["content", "vehicleChoice.name", ["loc", [null, [20, 65], [20, 87]]]]],
        locals: ["vehicleChoice", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 6
          }
        },
        "moduleName": "duck-bill/templates/plans.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "jumbotron");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("select");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "");
        dom.setAttribute(el5, "class", "btn btn-hg btn-embossed btn-block btn-primary");
        var el6 = dom.createTextNode("Next");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1, 1, 1, 1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element1, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createAttrMorph(element2, 'onchange');
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createMorphAt(element1, 7, 7);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [10, 8], [10, 13]]]]], [], 0, null, ["loc", [null, [10, 0], [13, 9]]]], ["attribute", "onchange", ["subexpr", "action", [["subexpr", "mut", [["get", "vehicleIndex", ["loc", [null, [18, 31], [18, 43]]]]], [], ["loc", [null, [18, 26], [18, 44]]]]], ["value", "target.value"], ["loc", [null, [18, 17], [18, 67]]]]], ["block", "each", [["get", "vehicles", ["loc", [null, [19, 10], [19, 18]]]]], [], 1, null, ["loc", [null, [19, 2], [21, 11]]]], ["element", "action", ["toStepTwo"], [], ["loc", [null, [26, 65], [26, 87]]]], ["content", "outlet", ["loc", [null, [28, 0], [28, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("duck-bill/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 15,
              "column": 2
            }
          },
          "moduleName": "duck-bill/templates/signup.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "plan.name", ["loc", [null, [14, 4], [14, 17]]]]],
        locals: ["plan"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 94,
              "column": 0
            },
            "end": {
              "line": 96,
              "column": 0
            }
          },
          "moduleName": "duck-bill/templates/signup.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-danger");
          var el2 = dom.createTextNode("Invalid username or password.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 105,
            "column": 0
          }
        },
        "moduleName": "duck-bill/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-6");
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-row");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode("Discount Code");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "id", "check-completed");
        dom.setAttribute(el4, "class", "btn btn-hg btn-embossed btn-block btn-primary");
        var el5 = dom.createTextNode("\n   Check code \n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("form");
        dom.setAttribute(el4, "class", "form-horizontal");
        var el5 = dom.createTextNode("\n\n  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Total");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("First Name");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n   ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Last Name");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n     ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Email");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Card Number");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("CVC");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "form-row");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("\n      ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("Expiration (MM/YYYY)");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n       ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode(" / ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "controls");
        var el6 = dom.createTextNode("\n  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "submit");
        dom.setAttribute(el6, "class", "btn btn-hg btn-embossed btn-block btn-primary");
        var el7 = dom.createTextNode("Next thing");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n \n\n");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [6]);
        var element2 = dom.childAt(element0, [8]);
        var element3 = dom.childAt(element2, [17, 1]);
        var morphs = new Array(15);
        morphs[0] = dom.createMorphAt(element0, 2, 2);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [4, 1]), 3, 3);
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [1, 1]), 3, 3);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [5, 1]), 3, 3);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [7, 1]), 3, 3);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [9, 1]), 3, 3);
        morphs[8] = dom.createMorphAt(dom.childAt(element2, [13, 1]), 3, 3);
        morphs[9] = dom.createMorphAt(dom.childAt(element2, [15, 1]), 3, 3);
        morphs[10] = dom.createMorphAt(element3, 3, 3);
        morphs[11] = dom.createMorphAt(element3, 7, 7);
        morphs[12] = dom.createMorphAt(element0, 10, 10);
        morphs[13] = dom.createMorphAt(dom.childAt(element0, [12]), 0, 0);
        morphs[14] = dom.createMorphAt(element0, 14, 14);
        return morphs;
      },
      statements: [["block", "power-select", [], ["options", ["subexpr", "@mut", [["get", "plans", ["loc", [null, [9, 14], [9, 19]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "selectedPlan", ["loc", [null, [10, 15], [10, 27]]]]], [], []], "onchange", ["subexpr", "action", ["setPlan"], [], ["loc", [null, [11, 15], [11, 33]]]]], 0, null, ["loc", [null, [8, 2], [15, 19]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "discountCode", ["loc", [null, [21, 20], [21, 32]]]]], [], []]], ["loc", [null, [21, 6], [21, 35]]]], ["element", "action", ["checkDiscount"], [], ["loc", [null, [25, 31], [25, 57]]]], ["element", "action", ["signup"], ["on", "submit"], ["loc", [null, [29, 30], [29, 61]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "total", ["loc", [null, [34, 20], [34, 25]]]]], [], []], "type", "text", "size", "8"], ["loc", [null, [34, 6], [34, 49]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "fname", ["loc", [null, [43, 20], [43, 25]]]]], [], []], "type", "text", "size", "20"], ["loc", [null, [43, 6], [43, 51]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "lname", ["loc", [null, [49, 20], [49, 25]]]]], [], []], "type", "text", "size", "20"], ["loc", [null, [49, 6], [49, 51]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [55, 20], [55, 25]]]]], [], []], "type", "text", "size", "20"], ["loc", [null, [55, 6], [55, 51]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "number", ["loc", [null, [64, 20], [64, 26]]]]], [], []], "type", "text", "size", "20", "data-stripe", "number"], ["loc", [null, [64, 6], [64, 74]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "cvc", ["loc", [null, [71, 20], [71, 23]]]]], [], []], "type", "text", "size", "4", "data-stripe", "cvc"], ["loc", [null, [71, 6], [71, 64]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "exp_month", ["loc", [null, [78, 21], [78, 30]]]]], [], []], "type", "text", "size", "2", "data-stripe", "exp_month"], ["loc", [null, [78, 7], [78, 77]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "exp_year", ["loc", [null, [81, 18], [81, 26]]]]], [], []], "type", "text", "size", "2", "data-stripe", "exp_year"], ["loc", [null, [81, 4], [81, 72]]]], ["block", "if", [["get", "loginFailed", ["loc", [null, [94, 6], [94, 17]]]]], [], 1, null, ["loc", [null, [94, 0], [96, 7]]]], ["content", "message", ["loc", [null, [98, 6], [98, 17]]]], ["content", "outlet", ["loc", [null, [100, 0], [100, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('duck-bill/config/environment', ['ember'], function(Ember) {
  var prefix = 'duck-bill';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("duck-bill/app")["default"].create({"name":"duck-bill","version":"0.0.0+ae06ba56"});
}

/* jshint ignore:end */
//# sourceMappingURL=duck-bill.map