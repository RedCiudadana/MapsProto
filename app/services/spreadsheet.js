import Ember from 'ember';
import Tabletop from 'tabletop';

// MejoraEscuela spreadsheet
var spreadsheet = 'https://docs.google.com/spreadsheets/d/1UmLFS68j8hKdSdTZ24lb3jj1TWdDU6AZOR1f_2sQ8zc/pubhtml'

export default Ember.Service.extend({

  fetch(worksheet) {
    const promise = new Ember.RSVP.Promise(function(resolve) {
      Tabletop.init({
        key: spreadsheet,
        callback: function(data) {
          resolve(data[worksheet].elements);
        }
      });
    });

    return promise;
  }

});
