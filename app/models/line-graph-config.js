import GraphConfig from 'appkit/models/graph-config';
var LineGraphConfig = Ember.Object.extend(GraphConfig, {
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
export default LineGraphConfig;
