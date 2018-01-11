import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import WidgetValidations from '../validations/widget';

export default Route.extend({
  model(params) {
    // return this.get('store').findAll('widget').then(...);
    return $.get('/widgets').then((widgets) => {
      const widgetCount = widgets.length;
      const newWidget = this.store.createRecord('widget', {
        name: `Widget ${widgetCount + 1}`,
        properties: {
          size: 'Large',
          colour: 'Yellow'
        }
      });

      return new Changeset(newWidget, lookupValidator(WidgetValidations), WidgetValidations);
    });
  }
});
