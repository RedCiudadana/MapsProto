import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      escuelas: this.store.findAll('escuela').then(() => {
        console.log('done loading model for application');
      })
    });
  }
});
