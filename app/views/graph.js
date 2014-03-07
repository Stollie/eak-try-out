import GraphController from 'appkit/controllers/graph';
var GraphView = Ember.View.extend({
//templateName: 'graph',
  tagName: 'div',
  classNames: ['highcharts'],
  title: 'Graph',
  type: 'line',
  didInsertElement: function() {
    console.log('Graph View');
    var graph;
    graph = new GraphController();
    return graph.render(this.elementId, this.type, this.content, this.categories, this.title);
  }
});
export default GraphView;
