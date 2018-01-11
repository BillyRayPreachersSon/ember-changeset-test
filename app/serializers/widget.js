import RESTSerializer from 'ember-data/serializers/rest';
import { copy } from '@ember/object/internals';
import { merge } from '@ember/polyfills';

export default RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      widgets: payload.mappings
    };
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      widget: payload
    };
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  serializeIntoHash(data, type, record, options) {
    delete data.widget;
    merge(data, this.serialize(record, options));
  },

  normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = copy(payload);
    newPayload.id = id;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
