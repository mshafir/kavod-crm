import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login() {
      let options = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:parse', options).then((data) => {
        console.log('user logged in', data);
        this.transitionToRoute('index');
      });
    }
  }
});
