define('duck-bill/tests/adapters/coupon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/coupon.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/coupon.js should pass jshint.');
  });
});
define('duck-bill/tests/adapters/customer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/customer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/customer.js should pass jshint.');
  });
});
define('duck-bill/tests/adapters/plan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/plan.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/plan.js should pass jshint.');
  });
});
define('duck-bill/tests/adapters/subscription.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/subscription.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/subscription.js should pass jshint.');
  });
});
define('duck-bill/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('duck-bill/tests/components/signup-plans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/signup-plans.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/signup-plans.js should pass jshint.');
  });
});
define('duck-bill/tests/controllers/plans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/plans.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/plans.js should pass jshint.');
  });
});
define('duck-bill/tests/controllers/signup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/signup.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/signup.js should pass jshint.\ncontrollers/signup.js: line 81, col 50, \'response\' is defined but never used.\n\n1 error');
  });
});
define('duck-bill/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('duck-bill/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('duck-bill/tests/helpers/ember-power-select', ['exports', 'ember'], function (exports, _ember) {
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;

  // Helpers for integration tests

  function typeText(selector, text) {
    $(selector).val(text);
    $(selector).trigger('input');
  }

  function triggerKeydown(domElement, k) {
    var oEvent = document.createEvent("Events");
    oEvent.initEvent('keydown', true, true);
    $.extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    _ember['default'].run(function () {
      domElement.dispatchEvent(oEvent);
    });
  }

  function typeInSearch(text) {
    _ember['default'].run(function () {
      typeText('.ember-power-select-search input, .ember-power-select-trigger-multiple-input', text);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-power-select-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    var event = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return event[key] = options[key];
    });
    _ember['default'].run(function () {
      return _ember['default'].$(selector)[0].dispatchEvent(event);
    });
  }

  // Helpers for acceptance tests

  exports['default'] = function () {
    var isEmberOne = _ember['default'].VERSION.match(/1\.13/);

    _ember['default'].Test.registerAsyncHelper('selectChoose', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      // If the dropdown is closed, open it
      if (_ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      // Select the option with the given text
      click('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-option:contains("' + value + '")');
    });

    _ember['default'].Test.registerAsyncHelper('selectSearch', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      var isMultipleSelect = _ember['default'].$(cssPath + ' .ember-power-select-trigger-multiple-input').length > 0;

      var dropdownIsClosed = _ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0;
      if (dropdownIsClosed) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      if (isMultipleSelect) {
        fillIn(cssPath + ' .ember-power-select-trigger-multiple-input', value);
        if (isEmberOne) {
          triggerEvent(cssPath + ' .ember-power-select-trigger-multiple-input', 'input');
        }
      } else {
        fillIn('.ember-power-select-search input', value);
        if (isEmberOne) {
          triggerEvent('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-search input', 'input');
        }
      }
    });
  };
});
define('duck-bill/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'duck-bill/tests/helpers/start-app', 'duck-bill/tests/helpers/destroy-app'], function (exports, _qunit, _duckBillTestsHelpersStartApp, _duckBillTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _duckBillTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _duckBillTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('duck-bill/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('duck-bill/tests/helpers/resolver', ['exports', 'duck-bill/resolver', 'duck-bill/config/environment'], function (exports, _duckBillResolver, _duckBillConfigEnvironment) {

  var resolver = _duckBillResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _duckBillConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _duckBillConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('duck-bill/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('duck-bill/tests/helpers/start-app', ['exports', 'ember', 'duck-bill/app', 'duck-bill/config/environment'], function (exports, _ember, _duckBillApp, _duckBillConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _duckBillConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _duckBillApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('duck-bill/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('duck-bill/tests/integration/components/signup-plans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('signup-plans', 'Integration | Component | signup plans', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'signup-plans', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'signup-plans', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('duck-bill/tests/integration/components/signup-plans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/signup-plans-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/signup-plans-test.js should pass jshint.');
  });
});
define('duck-bill/tests/models/coupon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/coupon.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/coupon.js should pass jshint.');
  });
});
define('duck-bill/tests/models/customer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/customer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/customer.js should pass jshint.');
  });
});
define('duck-bill/tests/models/plan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/plan.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/plan.js should pass jshint.');
  });
});
define('duck-bill/tests/models/subscription.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/subscription.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/subscription.js should pass jshint.');
  });
});
define('duck-bill/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('duck-bill/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('duck-bill/tests/routes/signup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/signup.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass jshint.');
  });
});
define('duck-bill/tests/serializers/coupon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/coupon.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/coupon.js should pass jshint.');
  });
});
define('duck-bill/tests/serializers/customer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/customer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/customer.js should pass jshint.');
  });
});
define('duck-bill/tests/serializers/plan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/plan.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/plan.js should pass jshint.');
  });
});
define('duck-bill/tests/serializers/subscription.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/subscription.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/subscription.js should pass jshint.');
  });
});
define('duck-bill/tests/test-helper', ['exports', 'duck-bill/tests/helpers/resolver', 'ember-qunit'], function (exports, _duckBillTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_duckBillTestsHelpersResolver['default']);
});
define('duck-bill/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('duck-bill/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/adapters/subscription-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:subscription', 'Unit | Adapter | subscription', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('duck-bill/tests/unit/adapters/subscription-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/subscription-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/subscription-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/controllers/plans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:plans', 'Unit | Controller | plans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('duck-bill/tests/unit/controllers/plans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/plans-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/plans-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/controllers/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:signup', 'Unit | Controller | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('duck-bill/tests/unit/controllers/signup-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/signup-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/signup-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/models/coupon-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('coupon', 'Unit | Model | coupon', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('duck-bill/tests/unit/models/coupon-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/coupon-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/coupon-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/models/customer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('customer', 'Unit | Model | customer', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('duck-bill/tests/unit/models/customer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/customer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/customer-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/models/plan-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('plan', 'Unit | Model | plan', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('duck-bill/tests/unit/models/plan-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/plan-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/plan-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/models/subscription-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('subscription', 'Unit | Model | subscription', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('duck-bill/tests/unit/models/subscription-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/subscription-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/subscription-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/routes/plans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:plans', 'Unit | Route | plans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('duck-bill/tests/unit/routes/plans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/plans-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/plans-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/routes/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('duck-bill/tests/unit/routes/signup-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/signup-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('duck-bill/tests/unit/serializers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('duck-bill/tests/unit/serializers/subscription-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('subscription', 'Unit | Serializer | subscription', {
    // Specify the other units that are required for this test.
    needs: ['serializer:subscription']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('duck-bill/tests/unit/serializers/subscription-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/subscription-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/subscription-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('duck-bill/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map