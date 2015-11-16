import Ember from 'ember';
import ParseAdapter from 'ember-parse-adapter/adapters/application';

export default ParseAdapter.extend({
  pathForType(type) {
    if ('parseUser' === type || 'parse-user' === type) {
      return 'users';
    } else if ('login' === type) {
      return 'login';
    } else if ('logout' === type) {
      return 'logout';
    } else if ('function' === type) {
      return 'functions';
    } else {
      return `classes/${Ember.String.capitalize(Ember.String.camelize(type))}`;
    }
  }
});
