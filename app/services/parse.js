import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';

const { Promise } = Ember.RSVP;

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  adapter() {
    return this.get('store').adapterFor('application');
  },
  signup(options) {
    return new Promise((resolve, reject) => {
      return this.adapter().ajax(this.adapter().buildURL('users'), 'POST', { data: options }).then((response) => {
        console.log(`signed up user ${options.username}`);
        return resolve(response);
      }, (response) => {
        return reject(response.responseJSON);
      });
    });
  },
  requestPasswordReset(email) {
    return new Promise((resolve, reject) => {
      return this.adapter().ajax(this.adapter().buildURL('requestPasswordReset'), 'POST', { email }).then((response) => {
        console.log(`send password reset email to ${email}`);
        return resolve(response);
      }, (response) => {
        return reject(response.responseJSON);
      });
    });
  },
  setSession(token) {
    this.adapter().set('sessionToken', token);
  },
  authenticate(options) {
    return new Promise((resolve, reject) => {
      return this.adapter().ajax(this.adapter().buildURL('login'), 'GET', { data: options }).then((response) => {
        console.log(response);
        return resolve(response);
      }, (response) => {
        return reject(response.responseJSON);
      });
    });
  },

  invalidate(data) {
    return new Promise((resolve, reject) => {
      return this.adapter().ajax(this.adapter().buildURL('logout'), 'POST').then(resolve, reject);
    });
  }
});
