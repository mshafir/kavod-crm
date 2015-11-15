import DS from 'ember-data';

const { attr, Model, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  startDate: attr('number'),
  endDate: attr('number'),
  organizer: belongsTo('user', { async: true })
});
