import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  username: attr('string'),
  email: attr('string')
});
