import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  Institution: attr(),
  latitude: attr('number'),
  longitude: attr('number'),
  State: attr(),

  normalizedState: Ember.computed('State', function() {
    return this.get('State').toLowerCase();
  })
});
