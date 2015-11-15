import DS from 'ember-data';

const { attr, Model, belongsTo } = DS;

export default Model.extend({
  event: belongsTo('event', { async: true }),
  user: belongsTo('user', { async: true }),
  payment: belongsTo('payment', { async: true })
});
