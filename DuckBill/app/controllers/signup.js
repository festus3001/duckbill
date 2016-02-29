import Ember from 'ember';

// https://guides.emberjs.com/v1.10.0/object-model/what-do-i-use-when/


export default Ember.Controller.extend({


  selectedPlan: null,
  discountCode: '',
  total: 0,

  fname:null,
  lname:null,


  number: '4012888888881881',
  cvc:'123',
  exp_month:'12',
  exp_year:'24',

  message: '',

  stripeTokenId  : null,


  customer: null,

stripe: Ember.inject.service(),

 actions: {
        
        setPlan(plan) {
          this.set('selectedPlan', plan);
          console.log(" setPlan called "+this.get('selectedPlan'));

          var thisPlan = this.get('selectedPlan');

          var newtotal = thisPlan.get('amount') / 100;

          this.set('total', newtotal.toFixed(2));

          return false;
        },
        checkDiscount() {
                    
          this.set('total', this.get('total'));

          if (this.get('discountCode')) { 

          var self = this; // Store away current this  
          
          this.store.findRecord('coupon', this.get('discountCode')).then(function(response) {

            var discount = self.get('total') * (response.get('percent_off') * 0.01);
            var newTotal = self.get('total') - (discount + response.get('amount_off'));
            
            self.set('total',  newTotal.toFixed(2));

          }


          ); // end discountCode exists

          
//           console.log(couponResponse);

        }

          return false;



        },
        signup() {
          console.log(" signup called ");
           var self = this; // Store away current this
           this.set('message', 'called');

          // let's get a token from stripe so we can get to business
          this.stripeCreateToken().then(function(response) {

            console.log(" signup stripeCreateToken then : ");
             console.log(" current stripeTokenId "+self.get('stripeTokenId'));
             
             
            // create customer
           var customer = self.store.createRecord('customer', {

                firstName:   self.get('fname'),
                lastName:  self.get('lname'),
                email:   self.get('email'),
                stripeToken: self.get('stripeTokenId')


            });

           
            customer.save().then(function(response) {  // customer

            console.log('customer save then starts');

            console.log(response.id);

            // subscribe customer to plan
            
              var thisPlan = self.get('selectedPlan');
              
            var subscription = self.store.createRecord('subscription', {

                customer:   response.id,
                plan:  thisPlan.get('id'),
                coupon: self.get('discountCode')

            });
           
           subscription.save();


            }); // customer
           


          }); // stripeCreateToken
            

        
      
         }
      },
  stripeCreateToken: function() {

  var self = this; // Store away current this

    // obtain access to the injected service
    var stripe = this.get('stripe');

    
    var mycard  = {
      number: this.get('number'),
      cvc: this.get('cvc'),
      exp_month: this.get('exp_month'),
      exp_year: this.get('exp_year')
    };
    
    console.log("mycard "+JSON.stringify(mycard));
   
    return stripe.card.createToken(mycard).then(function(response) {

      console.log("token id "+response.id);

      self.set('stripeTokenId', response.id);




    }).then(function() {

     self.set('message', 'called 3rd time');


    }).catch(function(response) {
      // if there was an error retrieving the token you could get it here

        console.log("error retrieving the token "+JSON.stringify(response));

        self.set('message', response.error.message);

      if (response.error.type === 'card_error') {
        // show the error in the form or something
          console.log("card_error "+ JSON.stringify(response) );
      }
    });
  }





}); // end of  export default Ember.Controller.extend({
