import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  keyForModel() {
    return 'mappings';
  },

  serialize(payload) {
    const json = RestSerializer.prototype.serialize.apply(this, arguments);
    return typeof(payload.models) === 'undefined' ? json.mappings : json;
  }
});
