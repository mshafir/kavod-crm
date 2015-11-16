import Ember from 'ember';

export default Ember.Route.extend({
  parse: Ember.inject.service(),

  actions: {
    signup() {
      this.get('parse').signup({
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password')
      }).then((user) => {
        console.log(user);
        this.transitionTo('index');
      });
    }
  }
});
