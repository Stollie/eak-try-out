import LineGraphConfig from 'appkit/components/line-graph-config';
Ember.Logger.log(LineGraphConfig);
export default Ember.ObjectController.extend({
  graphConfig: function(type) {
    switch (type) {
      case 'line':
        return LineGraphConfig;
    }
  },
  graphType: function(type) {
    switch (type) {
      case 'line':
        return 'line';
    }
  },
  render: function(render_to, type, data, categories, title) {
    Ember.Logger.log('Render shit');
    var graph, graphType;
    graph = this.graphConfig(type).create();
    graphType = this.graphType(type);
    graph.set('chartType', graphType);
    graph.set('renderToId', render_to);
    graph.set('series', data);
    graph.set('categories', categories);
    graph.set('title', title);
    graph.initialize();
    return new Highcharts.Chart(graph);
  }
});
//export default GraphController;
