import DS from 'ember-data';

const { attr, Model, belongsTo } = DS;

export default Model.extend({
  type: attr('string'),
  user: belongsTo('user', { async: true }),
  payment: belongsTo('payment', { async: true })
});
