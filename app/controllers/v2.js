import Ember from 'ember';

export default Ember.Controller.extend({
  currentLatitude: 15.850389275322584,
  currentLongitude: -89.6099853515625,
  currentZoom: 8,
  currentEscuela: null,
  currentDepartamento: null,
  currentSearch: null,

  // departamentos: Ember.A([
  //   'Guatemala',
  //   'El Progreso',
  //   'Alta Verapaz',
  //   'Huehuetenango'
  // ]),
  
  departamentos: {
    'dude': 'sup',
    'dude2': 'sup2'
  },

  currentEscuelas: Ember.computed('currentDepartamento', 'currentSearch', function() {
    let escuelas = this.get('model').escuelas;

    if (!this.get('currentDepartamento')) {
      return escuelas;
    }

    return escuelas.filterBy(
      'normalizedState',
      this.get('currentDepartamento').toLowerCase()
    );
  }),

  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('currentLatitude', center.lat);
      this.set('currentLongitude', center.lng);
    }
  }
});
