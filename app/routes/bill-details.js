import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + params.bill_id + '&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var billDetails = [];
     responseJSON.results.forEach(function(bill) {
       billDetails.push(bill);
     });
     return billDetails;
   });
  }
});
