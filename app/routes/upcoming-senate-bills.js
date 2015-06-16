import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://openstates.org/api/v1/bills/?state=or&q=taxi&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7'
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var bills = [];
     var date = new Date("2015-01-01 00:00:00")
     responseJSON.forEach(function(bill) {
       var billDate = new Date(bill.created_at);
       if(billDate >= date) {
         bills.push(bill);
       }
     });
     return bills;
   });
  }
});
