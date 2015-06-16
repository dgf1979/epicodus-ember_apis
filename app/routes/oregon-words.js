import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   var url = 'http://capitolwords.org/api/1/phrases.json?entity_type=state&entity_value=or&page=0&sort=count%20desc&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var words = [];
     var index = 0;
     responseJSON.forEach(function(word) {
       if (index < 10) {
         index = words.push(word);
       }
     });
     return words;
   });
  }
});
