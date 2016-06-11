import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('application');
  },
  actions: {
    loading(transition, route) {
      console.log('in loading');
    }
  }
});
