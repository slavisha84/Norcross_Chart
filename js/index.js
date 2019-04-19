/**
 * ---------------------------------------
 * This chart wqas created using amCharts 4.
 * All documentation for this librarry is available at:
 * https://www.amcharts.com/docs/v4/
 * We have used documentation with boiler code that is
 * specific for this library to create the charts that fited our needs. 
 * The licence for this library is also included in our repo that says that we are allowed to use if free of charge. 
 * ---------------------------------------
 */

//  Setting up the theme with animation. 
am4core.useTheme(am4themes_animated);

// creating the variable chart that will be bassed to chartdiv in html
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Loading Sample of Json Data characteristc for Norcross 
// This data is based on mesurments from Raspbery Pi sensor, and API from DarkSKY
// We are loading the Actual and Forcasting data. 
chart.data = [{"TIME_STAMP":"2019-4-11 03:00","TEMPERATURE":70,"F_Temp":65.45,"A_Temp":65.81},{"TIME_STAMP":"2019-4-11 04:00","TEMPERATURE":68,"F_Temp":62.79,"A_Temp":64.1},{"TIME_STAMP":"2019-4-11 05:00","TEMPERATURE":67,"F_Temp":60.54,"A_Temp":63.04},{"TIME_STAMP":"2019-4-11 06:00","TEMPERATURE":67,"F_Temp":60.48,"A_Temp":62.8},{"TIME_STAMP":"2019-4-11 07:00","TEMPERATURE":67,"F_Temp":60.08,"A_Temp":62.19},{"TIME_STAMP":"2019-4-11 08:00","TEMPERATURE":67,"F_Temp":60.08,"A_Temp":61.62},{"TIME_STAMP":"2019-4-11 09:00","TEMPERATURE":67,"F_Temp":60.88,"A_Temp":60.08},{"TIME_STAMP":"2019-4-11 10:00","TEMPERATURE":69,"F_Temp":60.65,"A_Temp":58.9},{"TIME_STAMP":"2019-4-11 11:00","TEMPERATURE":70,"F_Temp":60.1,"A_Temp":57.95},{"TIME_STAMP":"2019-4-11 12:00","TEMPERATURE":72,"F_Temp":60.14,"A_Temp":58.52},{"TIME_STAMP":"2019-4-11 13:00","TEMPERATURE":74,"F_Temp":63.5,"A_Temp":61.8},{"TIME_STAMP":"2019-4-11 14:00","TEMPERATURE":75,"F_Temp":67.9,"A_Temp":65.99},{"TIME_STAMP":"2019-4-11 15:00","TEMPERATURE":77,"F_Temp":71.61,"A_Temp":69.61},{"TIME_STAMP":"2019-4-11 16:00","TEMPERATURE":79,"F_Temp":74.56,"A_Temp":72.66},{"TIME_STAMP":"2019-4-11 17:00","TEMPERATURE":80,"F_Temp":77.36,"A_Temp":74.81},{"TIME_STAMP":"2019-4-11 18:00","TEMPERATURE":80,"F_Temp":79.4,"A_Temp":77.28},{"TIME_STAMP":"2019-4-11 19:00","TEMPERATURE":81,"F_Temp":80.87,"A_Temp":78.98},{"TIME_STAMP":"2019-4-11 20:00","TEMPERATURE":81,"F_Temp":81.14,"A_Temp":80.4},{"TIME_STAMP":"2019-4-11 21:00","TEMPERATURE":81,"F_Temp":81.6,"A_Temp":80.4},{"TIME_STAMP":"2019-4-11 22:00","TEMPERATURE":80,"F_Temp":81.11,"A_Temp":79.63},{"TIME_STAMP":"2019-4-11 23:00","TEMPERATURE":79,"F_Temp":79.93,"A_Temp":76.92},{"TIME_STAMP":"2019-4-12 00:00","TEMPERATURE":78,"F_Temp":78.1,"A_Temp":74.43},{"TIME_STAMP":"2019-4-12 01:00","TEMPERATURE":78,"F_Temp":75.28,"A_Temp":72.41},{"TIME_STAMP":"2019-4-12 02:00","TEMPERATURE":76,"F_Temp":73.35,"A_Temp":71.22},{"TIME_STAMP":"2019-4-12 03:00","TEMPERATURE":76,"F_Temp":72.19,"A_Temp":72.7},{"TIME_STAMP":"2019-4-12 04:00","TEMPERATURE":75,"F_Temp":71.15,"A_Temp":70.61},{"TIME_STAMP":"2019-4-12 05:00","TEMPERATURE":75,"F_Temp":70.2,"A_Temp":68.47},{"TIME_STAMP":"2019-4-12 06:00","TEMPERATURE":74,"F_Temp":68.88,"A_Temp":66.95},{"TIME_STAMP":"2019-4-12 07:00","TEMPERATURE":74,"F_Temp":68.71,"A_Temp":66.43},{"TIME_STAMP":"2019-4-12 08:00","TEMPERATURE":73,"F_Temp":68.36,"A_Temp":65.94},{"TIME_STAMP":"2019-4-12 09:00","TEMPERATURE":73,"F_Temp":69.38,"A_Temp":65.3},{"TIME_STAMP":"2019-4-12 10:00","TEMPERATURE":73,"F_Temp":68.89,"A_Temp":64.83},{"TIME_STAMP":"2019-4-12 11:00","TEMPERATURE":73,"F_Temp":68.39,"A_Temp":64.58},{"TIME_STAMP":"2019-4-12 12:00","TEMPERATURE":74,"F_Temp":67.34,"A_Temp":64.95},{"TIME_STAMP":"2019-4-12 13:00","TEMPERATURE":75,"F_Temp":67.53,"A_Temp":65.78},{"TIME_STAMP":"2019-4-12 14:00","TEMPERATURE":76,"F_Temp":68.85,"A_Temp":67.36},{"TIME_STAMP":"2019-4-12 15:00","TEMPERATURE":77,"F_Temp":70.53,"A_Temp":69.44},{"TIME_STAMP":"2019-4-12 16:00","TEMPERATURE":78,"F_Temp":72.59,"A_Temp":71.61},{"TIME_STAMP":"2019-4-12 17:00","TEMPERATURE":79,"F_Temp":75.01,"A_Temp":74.13},{"TIME_STAMP":"2019-4-12 18:00","TEMPERATURE":79,"F_Temp":76.9,"A_Temp":76.02},{"TIME_STAMP":"2019-4-12 19:00","TEMPERATURE":79,"F_Temp":78.23,"A_Temp":77.47},{"TIME_STAMP":"2019-4-12 20:00","TEMPERATURE":79,"F_Temp":78.68,"A_Temp":78.78},{"TIME_STAMP":"2019-4-12 21:00","TEMPERATURE":78,"F_Temp":78.31,"A_Temp":79.68},{"TIME_STAMP":"2019-4-12 22:00","TEMPERATURE":76,"F_Temp":77.74,"A_Temp":79.63},{"TIME_STAMP":"2019-4-12 23:00","TEMPERATURE":75,"F_Temp":76.72,"A_Temp":78.22},{"TIME_STAMP":"2019-4-13 00:00","TEMPERATURE":74,"F_Temp":74.03,"A_Temp":75.55},{"TIME_STAMP":"2019-4-13 01:00","TEMPERATURE":72,"F_Temp":68.99,"A_Temp":72.89},{"TIME_STAMP":"2019-4-13 02:00","TEMPERATURE":71,"F_Temp":66.35,"A_Temp":70.3},{"TIME_STAMP":"2019-4-13 03:00","TEMPERATURE":70,"F_Temp":64.53,"A_Temp":68.62},{"TIME_STAMP":"2019-4-13 04:00","TEMPERATURE":69,"F_Temp":62.93,"A_Temp":66.7},{"TIME_STAMP":"2019-4-13 05:00","TEMPERATURE":68,"F_Temp":61.78,"A_Temp":65.97},{"TIME_STAMP":"2019-4-13 06:00","TEMPERATURE":68,"F_Temp":60.87,"A_Temp":65.49},{"TIME_STAMP":"2019-4-13 07:00","TEMPERATURE":67,"F_Temp":59.57,"A_Temp":64.26},{"TIME_STAMP":"2019-4-13 08:00","TEMPERATURE":67,"F_Temp":58.91,"A_Temp":63.5},{"TIME_STAMP":"2019-4-13 09:00","TEMPERATURE":67,"F_Temp":58.42,"A_Temp":62.53},{"TIME_STAMP":"2019-4-13 10:00","TEMPERATURE":68,"F_Temp":59.43,"A_Temp":61.81},{"TIME_STAMP":"2019-4-13 11:00","TEMPERATURE":69,"F_Temp":59.81,"A_Temp":61.31},{"TIME_STAMP":"2019-4-13 12:00","TEMPERATURE":71,"F_Temp":61.07,"A_Temp":61.63},{"TIME_STAMP":"2019-4-13 13:00","TEMPERATURE":72,"F_Temp":64.25,"A_Temp":63.64},{"TIME_STAMP":"2019-4-13 14:00","TEMPERATURE":74,"F_Temp":67.17,"A_Temp":66.79},{"TIME_STAMP":"2019-4-13 15:00","TEMPERATURE":75,"F_Temp":69.47,"A_Temp":70.1},{"TIME_STAMP":"2019-4-13 16:00","TEMPERATURE":77,"F_Temp":71.64,"A_Temp":73.22},{"TIME_STAMP":"2019-4-13 17:00","TEMPERATURE":78,"F_Temp":73.5,"A_Temp":75.82},{"TIME_STAMP":"2019-4-13 18:00","TEMPERATURE":80,"F_Temp":75.66,"A_Temp":78.38},{"TIME_STAMP":"2019-4-13 19:00","TEMPERATURE":80,"F_Temp":77.99,"A_Temp":80.03},{"TIME_STAMP":"2019-4-13 20:00","TEMPERATURE":80,"F_Temp":79.12,"A_Temp":81.32},{"TIME_STAMP":"2019-4-13 21:00","TEMPERATURE":80,"F_Temp":81.13,"A_Temp":81.66},{"TIME_STAMP":"2019-4-13 22:00","TEMPERATURE":80,"F_Temp":81.78,"A_Temp":81.45},{"TIME_STAMP":"2019-4-13 23:00","TEMPERATURE":79,"F_Temp":81.17,"A_Temp":79.55},{"TIME_STAMP":"2019-4-14 00:00","TEMPERATURE":79,"F_Temp":78.72,"A_Temp":77.31},{"TIME_STAMP":"2019-4-14 01:00","TEMPERATURE":78,"F_Temp":75.91,"A_Temp":75.65},{"TIME_STAMP":"2019-4-14 02:00","TEMPERATURE":78,"F_Temp":74.66,"A_Temp":74.12},{"TIME_STAMP":"2019-4-14 03:00","TEMPERATURE":78,"F_Temp":73.55,"A_Temp":73.08},{"TIME_STAMP":"2019-4-14 04:00","TEMPERATURE":77,"F_Temp":54.3,"A_Temp":53.83},{"TIME_STAMP":"2019-4-14 05:00","TEMPERATURE":77,"F_Temp":52.77,"A_Temp":51.42},{"TIME_STAMP":"2019-4-14 06:00","TEMPERATURE":76,"F_Temp":51.79,"A_Temp":49.66},{"TIME_STAMP":"2019-4-14 07:00","TEMPERATURE":76,"F_Temp":50.91,"A_Temp":48.26},{"TIME_STAMP":"2019-4-14 08:00","TEMPERATURE":75,"F_Temp":49.76,"A_Temp":47.15},{"TIME_STAMP":"2019-4-14 09:00","TEMPERATURE":75,"F_Temp":48.55,"A_Temp":45.79},{"TIME_STAMP":"2019-4-14 10:00","TEMPERATURE":75,"F_Temp":46.8,"A_Temp":44.41},{"TIME_STAMP":"2019-4-14 11:00","TEMPERATURE":74,"F_Temp":45.46,"A_Temp":43.14},{"TIME_STAMP":"2019-4-14 12:00","TEMPERATURE":74,"F_Temp":45.41,"A_Temp":42.95},{"TIME_STAMP":"2019-4-14 13:00","TEMPERATURE":73,"F_Temp":46.89,"A_Temp":44.78},{"TIME_STAMP":"2019-4-14 14:00","TEMPERATURE":74,"F_Temp":49.02,"A_Temp":48.0},{"TIME_STAMP":"2019-4-14 15:00","TEMPERATURE":75,"F_Temp":52.39,"A_Temp":51.1},{"TIME_STAMP":"2019-4-14 16:00","TEMPERATURE":76,"F_Temp":54.96,"A_Temp":54.26},{"TIME_STAMP":"2019-4-14 17:00","TEMPERATURE":77,"F_Temp":57.04,"A_Temp":57.49},{"TIME_STAMP":"2019-4-14 18:00","TEMPERATURE":78,"F_Temp":59.83,"A_Temp":60.24},{"TIME_STAMP":"2019-4-14 19:00","TEMPERATURE":78,"F_Temp":62.34,"A_Temp":63.24},{"TIME_STAMP":"2019-4-14 20:00","TEMPERATURE":76,"F_Temp":63.79,"A_Temp":65.67},{"TIME_STAMP":"2019-4-14 21:00","TEMPERATURE":74,"F_Temp":65.11,"A_Temp":67.34},{"TIME_STAMP":"2019-4-14 22:00","TEMPERATURE":72,"F_Temp":65.57,"A_Temp":67.1},{"TIME_STAMP":"2019-4-14 23:00","TEMPERATURE":70,"F_Temp":64.69,"A_Temp":65.35},{"TIME_STAMP":"2019-4-15 00:00","TEMPERATURE":67,"F_Temp":62.32,"A_Temp":62.62},{"TIME_STAMP":"2019-4-15 01:00","TEMPERATURE":65,"F_Temp":57.75,"A_Temp":59.87},{"TIME_STAMP":"2019-4-15 02:00","TEMPERATURE":63,"F_Temp":54.61,"A_Temp":56.59},{"TIME_STAMP":"2019-4-15 03:00","TEMPERATURE":62,"F_Temp":52.12,"A_Temp":54.57},{"TIME_STAMP":"2019-4-15 04:00","TEMPERATURE":60,"F_Temp":48.94,"A_Temp":52.46},{"TIME_STAMP":"2019-4-15 05:00","TEMPERATURE":58,"F_Temp":46.98,"A_Temp":50.93},{"TIME_STAMP":"2019-4-15 06:00","TEMPERATURE":57,"F_Temp":45.3,"A_Temp":49.76},{"TIME_STAMP":"2019-4-15 07:00","TEMPERATURE":55,"F_Temp":44.1,"A_Temp":48.62},{"TIME_STAMP":"2019-4-15 08:00","TEMPERATURE":54,"F_Temp":42.97,"A_Temp":47.68},{"TIME_STAMP":"2019-4-15 09:00","TEMPERATURE":54,"F_Temp":43.05,"A_Temp":46.5},{"TIME_STAMP":"2019-4-15 10:00","TEMPERATURE":54,"F_Temp":42.68,"A_Temp":45.17},{"TIME_STAMP":"2019-4-15 11:00","TEMPERATURE":55,"F_Temp":42.12,"A_Temp":43.8},{"TIME_STAMP":"2019-4-15 12:00","TEMPERATURE":56,"F_Temp":44.41,"A_Temp":44.9},{"TIME_STAMP":"2019-4-15 13:00","TEMPERATURE":57,"F_Temp":52.46,"A_Temp":49.44},{"TIME_STAMP":"2019-4-15 14:00","TEMPERATURE":58,"F_Temp":57.4,"A_Temp":56.02},{"TIME_STAMP":"2019-4-15 15:00","TEMPERATURE":60,"F_Temp":61.23,"A_Temp":62.07},{"TIME_STAMP":"2019-4-15 16:00","TEMPERATURE":62,"F_Temp":64.64,"A_Temp":65.87},{"TIME_STAMP":"2019-4-15 17:00","TEMPERATURE":64,"F_Temp":67.29,"A_Temp":69.27},{"TIME_STAMP":"2019-4-15 18:00","TEMPERATURE":65,"F_Temp":69.93,"A_Temp":71.98},{"TIME_STAMP":"2019-4-15 19:00","TEMPERATURE":66,"F_Temp":72.4,"A_Temp":74.89},{"TIME_STAMP":"2019-4-15 20:00","TEMPERATURE":66,"F_Temp":74.36,"A_Temp":76.92},{"TIME_STAMP":"2019-4-15 21:00","TEMPERATURE":66,"F_Temp":75.76,"A_Temp":78.08},{"TIME_STAMP":"2019-4-15 22:00","TEMPERATURE":64,"F_Temp":74.94,"A_Temp":77.51},{"TIME_STAMP":"2019-4-15 23:00","TEMPERATURE":63,"F_Temp":75.2,"A_Temp":75.52}];

// SBased on boiler code for this librarry, bellow is atempt to format the time data
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

// Setting up the chart legend using the lines provided fruther down. 
chart.legend = new am4charts.Legend();
chart.legend.useDefaultMarker = true;
var marker = chart.legend.markers.template.children.getIndex(0);
// boiler code to set the legend to be circular
marker.cornerRadius(12, 12, 12, 12);
marker.strokeWidth = 2;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");

// Create axes
// Create date axis and push the data from date axis
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
// Create value Axis and push to yAxis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// Create second value Axis2 and push the data to yxis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
// Create third value and push it to Axis3
var valueAxis3 = chart.yAxes.push(new am4charts.ValueAxis());

// Create the first series based on documentaiton and boiler code from samples. 
// The first seriers contain data for temperature from Rambo with the time stamp. 
var series = chart.series.push(new am4charts.LineSeries());
// Defining the ValueY
series.dataFields.valueY = "TEMPERATURE";
// Definindg the value X
series.dataFields.dateX = "TIME_STAMP";
// Defining tooltipText to be Rambo actual Temperature
series.tooltipText = "RAMBO Actual: {TEMPERATURE}"
// Defining strokeWidth and Minimum bullet distance
series.strokeWidth = 2;
series.minBulletDistance = 13;
// Setting up the legend value as Rambo Actual Temp
series.legendSettings.valueText = "Rambo Actual Temp";

// Create the second  series based on documentaiton and boiler code from samples. 
// The second seriers contain data for forcast temperature from DarkSKY with the time stamp.
var series2 = chart.series.push(new am4charts.LineSeries());
// Setting up value for Y axis to represent Forecast Temperature
series2.dataFields.valueY = "F_Temp";
// Setting up x axist as date to reffer to Time Stamp
series2.dataFields.dateX = "TIME_STAMP";
// Setting up the tooltip text with stroke width and minBulletsdistance
series2.tooltipText = "Dark SKY Forecast: {F_Temp}"
series2.strokeWidth = 2;
series2.minBulletDistance = 13;
// Setting up the legend to Dark SKy Forecast Temp
series2.legendSettings.valueText = "Dark SKY Forecast Temp";

// Create the third  series based on documentaiton and boiler code from samples. 
// The third seriers contain data for  actual  temperature from DarkSKY with the time stamp.
var series3 = chart.series.push(new am4charts.LineSeries());
// Setting up the y axist to present Actual temperature
series3.dataFields.valueY = "A_Temp";
// Setting up x axis to read time stamp
series3.dataFields.dateX = "TIME_STAMP";
// setting up the tooltip text to say Dark Sky Actual 
series3.tooltipText = "Dark SKY Actual: {A_Temp}"
series3.strokeWidth = 2;
series3.minBulletDistance = 13;
// Setting up the legends for this line
series3.legendSettings.valueText = "Dark SKY Actual Temp";


// Setting up bullets to grow on hover series 1
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 5;
bullet.circle.fill = am4core.color("#33ccff");

// Setting up bullets to grow on hover series 2
var bullet = series2.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 5;
bullet.circle.fill = am4core.color("#3366ff");

// Setting up bullets to grow on hover series 3
var bullet = series3.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 5;
bullet.circle.fill = am4core.color("#6666ff");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Based on documentation and sample code we define the cursors behaviour on
// XY axis
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;


// Based on Documentation, setting up the scroll bar on the left
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Based on documenatation we are setting up horizontal scrollbar with preview alocated  underneath the X axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;

//using the function based on event to zoom the charts once the scrollbars initiated
chart.events.on("ready", function () {
  dateAxis.zoom({start:0.79, end:1});
});