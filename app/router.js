import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', { path: '/' }, function() {
    this.resource('contact', { path: 'contact/:zip' });
  });
  this.resource('upcoming-bills', function() {
    this.resource('bill-details', { path: 'bill-details/:bill_id/' }, function() {
      this.resource('committee-details', { path: 'committee-details/:committee_id' });
    });
  });
  this.resource('upcoming-senate-bills', function() {
    this.resource('bill-senate-details', { path: 'bill-senate-details/:bill_id/:session/:state' }, function () {
      this.resource('senate-contact', { path: 'senate-contact/:leg_id'});
    });
  });
  this.resource('committees', function() {
    this.resource('house-committees', function() {
      this.resource('subcommittees', { path: 'subcommittee/:committee_id' });
    });
    this.resource('state-committees');
  });
});

export default Router;
