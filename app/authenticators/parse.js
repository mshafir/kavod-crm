import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ApplicationAdapter from '../adapters/application';

const { Promise } = Ember.RSVP;

export default Base.extend({
  parse: Ember.inject.service(),
  restore(data) {
    console.log('resoring session from ', data);
    this.get('parse').setSession(data.sessionToken);
    return Ember.RSVP.resolve(data);
  },
  authenticate(options) {
    return this.get('parse').authenticate(options);
  },
  invalidate() {
    return this.get('parse').invalidate();
  }
});
