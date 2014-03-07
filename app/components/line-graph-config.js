import GraphConfig from 'appkit/components/graph-config';
Ember.Logger.log(GraphConfig);
export default GraphConfig.extend({
  yAxis: {
    title: {
      text: null
    }
  },
  plotOptions: {
    bar: {
      animation: false,
      borderWidth: 0,
      shadow: false,
      dataLabels: {
        enabled: true
      }
    }
  }
});
//export default LineGraphConfig;
