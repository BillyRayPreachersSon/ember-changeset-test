import DS from 'ember-data';
import { copy } from '@ember/object/internals';

export default DS.Transform.extend({
  deserialize(serialized) {
    return copy(serialized, true);
  },

  serialize(deserialized) {
    return copy(deserialized, true);
  }
});
