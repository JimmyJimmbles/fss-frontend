
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  header: DS.attr('string'),
  tableName: DS.attr('string'),
  columnName: DS.attr('string'),
  columnOrder: DS.attr('number'),
  width: DS.attr('number')

  //relationships, if any
  reportId: DS.belongsTo('report'),
  updatedBy: DS.belongsTo('person')
});
