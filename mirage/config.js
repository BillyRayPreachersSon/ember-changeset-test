export default function() {

  this.get('/widgets', function (schema) {
    return schema.widgets.all().models;
  });

  this.post('/widgets', function(schema, request) {
    const requestBodyData = JSON.parse(request.requestBody);
    return schema.widgets.create(requestBodyData);
  });

  this.get('/widget/:widget_id', function (schema, request) {
    return schema.widgets.find(request.params.widget_id);
  });

}
