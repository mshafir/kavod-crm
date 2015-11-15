import DS from 'ember-data';

const { attr, Model, belongsTo } = DS;

export default Model.extend({
  paymentMethod: attr('string'),
  amount: attr('number'),
  date: attr('number'),
  campaign: attr('string'),
  user: belongsTo('user', { async: true })
});
