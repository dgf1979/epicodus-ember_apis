import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://openstates.org/api/v1/committees/?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&state=or'
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var committees = [];
     responseJSON.forEach(function(committee) {
       committees.push(committee);
     });
     return committees;
   });
  }
});
