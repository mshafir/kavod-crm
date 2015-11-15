import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ParseAdapter from 'ember-parse-adapter/adapters/application';

const { Promise } = Ember.RSVP;

export default Base.extend({
  store: Ember.inject.service(),
  adapter: null,

  init() {
    this._super();
    this.adapter = new ParseAdapter();
  },

  restore(data) {
    return Ember.RSVP.reject();
  },

  authenticate(options) {
    return new Promise((resolve, reject) => {
      return this.adapter.ajax(this.adapter.buildURL('login'), 'GET', { data: options }).then((response) => {
        console.log(response);
        return resolve(response);
      }, (response) => {
        return Ember.RSVP.reject(response.responseJSON);
      });
    });
  },

  invalidate(data) {
    return Ember.RSVP.resolve();
  }
});
