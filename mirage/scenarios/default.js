export default function(server) {
  // Bootstrap some widget data
  server.create('widget', { name:'Widget 1', properties: { size:'Small', colour:'Green' }});
  server.create('widget', { name:'Widget 2', properties: { size:'Medium', colour:'Blue' }});
}
