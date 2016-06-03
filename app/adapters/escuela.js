import SpreadsheetAdapter from './spreadsheet';

export default SpreadsheetAdapter.extend({
  findAll() {
    return this.get('spreadsheet').fetch('GEO PROCESSING');
  }
});
