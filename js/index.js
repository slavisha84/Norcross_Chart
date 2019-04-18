/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{"TIME_STAMP":"2019-04-11 3:00","TEMPERATURE":70,"F_TEMP":65.45,"A_TEMP":65.81},{"TIME_STAMP":"2019-04-11 4:00","TEMPERATURE":68,"F_TEMP":62.79,"A_TEMP":64.1},{"TIME_STAMP":"2019-04-11 5:00","TEMPERATURE":67,"F_TEMP":60.54,"A_TEMP":63.04},{"TIME_STAMP":"2019-04-11 6:00","TEMPERATURE":67,"F_TEMP":60.48,"A_TEMP":62.8},{"TIME_STAMP":"2019-04-11 7:00","TEMPERATURE":67,"F_TEMP":60.08,"A_TEMP":62.19},{"TIME_STAMP":"2019-04-11 8:00","TEMPERATURE":67,"F_TEMP":60.08,"A_TEMP":61.62},{"TIME_STAMP":"2019-04-11 9:00","TEMPERATURE":67,"F_TEMP":60.88,"A_TEMP":60.08},{"TIME_STAMP":"2019-04-11 10:00","TEMPERATURE":69,"F_TEMP":60.65,"A_TEMP":58.9},{"TIME_STAMP":"2019-04-11 11:00","TEMPERATURE":70,"F_TEMP":60.1,"A_TEMP":57.95},{"TIME_STAMP":"2019-04-11 12:00","TEMPERATURE":72,"F_TEMP":60.14,"A_TEMP":58.52},{"TIME_STAMP":"2019-04-11 13:00","TEMPERATURE":74,"F_TEMP":63.5,"A_TEMP":61.8},{"TIME_STAMP":"2019-04-11 14:00","TEMPERATURE":75,"F_TEMP":67.9,"A_TEMP":65.99},{"TIME_STAMP":"2019-04-11 15:00","TEMPERATURE":77,"F_TEMP":71.61,"A_TEMP":69.61},{"TIME_STAMP":"2019-04-11 16:00","TEMPERATURE":79,"F_TEMP":74.56,"A_TEMP":72.66},{"TIME_STAMP":"2019-04-11 17:00","TEMPERATURE":80,"F_TEMP":77.36,"A_TEMP":74.81},{"TIME_STAMP":"2019-04-11 18:00","TEMPERATURE":80,"F_TEMP":79.4,"A_TEMP":77.28},{"TIME_STAMP":"2019-04-11 19:00","TEMPERATURE":81,"F_TEMP":80.87,"A_TEMP":78.98},{"TIME_STAMP":"2019-04-11 20:00","TEMPERATURE":81,"F_TEMP":81.14,"A_TEMP":80.4},{"TIME_STAMP":"2019-04-11 21:00","TEMPERATURE":81,"F_TEMP":81.6,"A_TEMP":80.4},{"TIME_STAMP":"2019-04-11 22:00","TEMPERATURE":80,"F_TEMP":81.11,"A_TEMP":79.63},{"TIME_STAMP":"2019-04-11 23:00","TEMPERATURE":80,"F_TEMP":79.93,"A_TEMP":76.92},{"TIME_STAMP":"2019-04-12 0:00","TEMPERATURE":79,"F_TEMP":78.1,"A_TEMP":74.43},{"TIME_STAMP":"2019-04-12 1:00","TEMPERATURE":78,"F_TEMP":75.28,"A_TEMP":72.41},{"TIME_STAMP":"2019-04-12 2:00","TEMPERATURE":78,"F_TEMP":73.35,"A_TEMP":71.22},{"TIME_STAMP":"2019-04-12 3:00","TEMPERATURE":76,"F_TEMP":72.19,"A_TEMP":72.7},{"TIME_STAMP":"2019-04-12 4:00","TEMPERATURE":76,"F_TEMP":71.15,"A_TEMP":70.61},{"TIME_STAMP":"2019-04-12 5:00","TEMPERATURE":75,"F_TEMP":70.2,"A_TEMP":68.47},{"TIME_STAMP":"2019-04-12 6:00","TEMPERATURE":75,"F_TEMP":68.88,"A_TEMP":66.95},{"TIME_STAMP":"2019-04-12 7:00","TEMPERATURE":74,"F_TEMP":68.71,"A_TEMP":66.43},{"TIME_STAMP":"2019-04-12 8:00","TEMPERATURE":74,"F_TEMP":68.36,"A_TEMP":65.94},{"TIME_STAMP":"2019-04-12 9:00","TEMPERATURE":73,"F_TEMP":69.38,"A_TEMP":65.3},{"TIME_STAMP":"2019-04-12 10:00","TEMPERATURE":73,"F_TEMP":68.89,"A_TEMP":64.83},{"TIME_STAMP":"2019-04-12 11:00","TEMPERATURE":73,"F_TEMP":68.39,"A_TEMP":64.58},{"TIME_STAMP":"2019-04-12 12:00","TEMPERATURE":73,"F_TEMP":67.34,"A_TEMP":64.95},{"TIME_STAMP":"2019-04-12 13:00","TEMPERATURE":74,"F_TEMP":67.53,"A_TEMP":65.78},{"TIME_STAMP":"2019-04-12 14:00","TEMPERATURE":75,"F_TEMP":68.85,"A_TEMP":67.36},{"TIME_STAMP":"2019-04-12 15:00","TEMPERATURE":76,"F_TEMP":70.53,"A_TEMP":69.44},{"TIME_STAMP":"2019-04-12 16:00","TEMPERATURE":77,"F_TEMP":72.59,"A_TEMP":71.61},{"TIME_STAMP":"2019-04-12 17:00","TEMPERATURE":78,"F_TEMP":75.01,"A_TEMP":74.13},{"TIME_STAMP":"2019-04-12 18:00","TEMPERATURE":79,"F_TEMP":76.9,"A_TEMP":76.02},{"TIME_STAMP":"2019-04-12 19:00","TEMPERATURE":79,"F_TEMP":78.23,"A_TEMP":77.47},{"TIME_STAMP":"2019-04-12 20:00","TEMPERATURE":79,"F_TEMP":78.68,"A_TEMP":78.78},{"TIME_STAMP":"2019-04-12 21:00","TEMPERATURE":79,"F_TEMP":78.31,"A_TEMP":79.68},{"TIME_STAMP":"2019-04-12 22:00","TEMPERATURE":78,"F_TEMP":77.74,"A_TEMP":79.63},{"TIME_STAMP":"2019-04-12 23:00","TEMPERATURE":76,"F_TEMP":76.72,"A_TEMP":78.22},{"TIME_STAMP":"2019-04-13 0:00","TEMPERATURE":75,"F_TEMP":74.03,"A_TEMP":75.55},{"TIME_STAMP":"2019-04-13 1:00","TEMPERATURE":74,"F_TEMP":68.99,"A_TEMP":72.89},{"TIME_STAMP":"2019-04-13 2:00","TEMPERATURE":72,"F_TEMP":66.35,"A_TEMP":70.3},{"TIME_STAMP":"2019-04-13 3:00","TEMPERATURE":71,"F_TEMP":64.53,"A_TEMP":68.62},{"TIME_STAMP":"2019-04-13 4:00","TEMPERATURE":70,"F_TEMP":62.93,"A_TEMP":66.7},{"TIME_STAMP":"2019-04-13 5:00","TEMPERATURE":69,"F_TEMP":61.78,"A_TEMP":65.97},{"TIME_STAMP":"2019-04-13 6:00","TEMPERATURE":68,"F_TEMP":60.87,"A_TEMP":65.49},{"TIME_STAMP":"2019-04-13 7:00","TEMPERATURE":68,"F_TEMP":59.57,"A_TEMP":64.26},{"TIME_STAMP":"2019-04-13 8:00","TEMPERATURE":67,"F_TEMP":58.91,"A_TEMP":63.5},{"TIME_STAMP":"2019-04-13 9:00","TEMPERATURE":67,"F_TEMP":58.42,"A_TEMP":62.53},{"TIME_STAMP":"2019-04-13 10:00","TEMPERATURE":67,"F_TEMP":59.43,"A_TEMP":61.81},{"TIME_STAMP":"2019-04-13 11:00","TEMPERATURE":68,"F_TEMP":59.81,"A_TEMP":61.31},{"TIME_STAMP":"2019-04-13 12:00","TEMPERATURE":69,"F_TEMP":61.07,"A_TEMP":61.63},{"TIME_STAMP":"2019-04-13 13:00","TEMPERATURE":71,"F_TEMP":64.25,"A_TEMP":63.64},{"TIME_STAMP":"2019-04-13 14:00","TEMPERATURE":72,"F_TEMP":67.17,"A_TEMP":66.79},{"TIME_STAMP":"2019-04-13 15:00","TEMPERATURE":74,"F_TEMP":69.47,"A_TEMP":70.1},{"TIME_STAMP":"2019-04-13 16:00","TEMPERATURE":75,"F_TEMP":71.64,"A_TEMP":73.22},{"TIME_STAMP":"2019-04-13 17:00","TEMPERATURE":77,"F_TEMP":73.5,"A_TEMP":75.82},{"TIME_STAMP":"2019-04-13 18:00","TEMPERATURE":78,"F_TEMP":75.66,"A_TEMP":78.38},{"TIME_STAMP":"2019-04-13 19:00","TEMPERATURE":80,"F_TEMP":77.99,"A_TEMP":80.03},{"TIME_STAMP":"2019-04-13 20:00","TEMPERATURE":80,"F_TEMP":79.12,"A_TEMP":81.32},{"TIME_STAMP":"2019-04-13 21:00","TEMPERATURE":80,"F_TEMP":81.13,"A_TEMP":81.66},{"TIME_STAMP":"2019-04-13 22:00","TEMPERATURE":80,"F_TEMP":81.78,"A_TEMP":81.45},{"TIME_STAMP":"2019-04-13 23:00","TEMPERATURE":80,"F_TEMP":81.17,"A_TEMP":79.55},{"TIME_STAMP":"2019-04-14 0:00","TEMPERATURE":79,"F_TEMP":78.72,"A_TEMP":77.31},{"TIME_STAMP":"2019-04-14 1:00","TEMPERATURE":79,"F_TEMP":75.91,"A_TEMP":75.65},{"TIME_STAMP":"2019-04-14 2:00","TEMPERATURE":78,"F_TEMP":74.66,"A_TEMP":74.12}];

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

chart.legend = new am4charts.Legend();
chart.legend.useDefaultMarker = true;
var marker = chart.legend.markers.template.children.getIndex(0);
marker.cornerRadius(12, 12, 12, 12);
marker.strokeWidth = 2;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");






// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
var valueAxis3 = chart.yAxes.push(new am4charts.ValueAxis());

// Create series 1
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "TEMPERATURE";
series.dataFields.dateX = "TIME_STAMP";
series.tooltipText = "RAMBO Actual: {TEMPERATURE}"
series.strokeWidth = 2;
series.minBulletDistance = 15;
series.legendSettings.valueText = "Rambo Actual Temp";

// Create series 2
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "F_TEMP";
series2.dataFields.dateX = "TIME_STAMP";
series2.tooltipText = "Dark SKY Forecast: {F_TEMP}"
series2.strokeWidth = 2;
series2.minBulletDistance = 15;
series2.legendSettings.valueText = "Dark SKY Forecast Temp";

// Create series 3
var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "A_TEMP";
series3.dataFields.dateX = "TIME_STAMP";
series3.tooltipText = "Dark SKY Actual: {A_TEMP}"
series3.strokeWidth = 2;
series3.minBulletDistance = 15;
series3.legendSettings.valueText = "Dark SKY Actual Temp";


// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover series 1
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#33ccff");

// Make bullets grow on hover - Series 2
var bullet = series2.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#3366ff");

// Make bullets grow on hover series 3
var bullet = series3.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#6666ff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;

chart.events.on("ready", function () {
  dateAxis.zoom({start:0.79, end:1});
});