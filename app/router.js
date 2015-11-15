import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('members', {});
  this.route('events', {});
  this.route('resources', {});
  this.route('contributions', {});
  this.route('preferences', {});
  this.route('login', {});
  this.route('signup', {});
});

export default Router;
