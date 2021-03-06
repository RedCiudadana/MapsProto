import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('application');
  },

  setupController(controller, model) {
    this._super(controller, model);

    if (!Ember.isEmpty(model.escuelas)) {
      let currentEscuela = model.escuelas.objectAt(10);

      controller.set('currentEscuela', currentEscuela);
      controller.set('currentLatitude', currentEscuela.get('latitude'));
      controller.set('currentLongitude', currentEscuela.get('longitude'));
    }
  }
});
