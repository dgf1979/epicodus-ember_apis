import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://openstates.org/api/v1//bills/' + params.state + '/' + params.session + '/' + params.bill_id + '/?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON;
   });
  }
});
