import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signup() {
      this.store.modelFor('parse-user').signup(this.store, {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password')
      }).then((user) => {
        console.log(user);
      });
    }
  }
});
