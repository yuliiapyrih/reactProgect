import React, {Component} from 'react';



import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";




am4core.useTheme(am4themes_material);




class Arm extends Component {

    state = {
        chart: null,
        dateAxis: null
    }

    componentDidMount() {
        const chart = am4core.create("chartdiv", am4charts.XYChart);

        this.createChart(chart);

        this.setState(() => ({chart}))
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    createChart = (chart) => {


// Themes end

// Create chart instance

// Add data


// Add data
        chart.data = generateChartData();

// Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());




// Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.minBulletDistance = 10;
        series.tooltipText = "{valueY}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.fillOpacity = 0.5;
        series.tooltip.label.padding(5,5,5,5)

// Add scrollbar
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);

        valueAxis.labelsEnabled = false;

        valueAxis.tooltip.disabled = true;
// Add cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;

        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 1000);
            var visits = 1200;
            for (var i = 0; i < 500; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
    }

    render() {
        return (
            <div className="chart-wrapper">
                <div className="progress-container">
                    {/*<img className="eboy" src={progressBar} alt="progress bar"/>*/}
                </div>
                <div className="graph-container">


                    <div id="chartdiv" style={{width: "100%", height: "200px"}}/>


                </div>
            </div>

        );
    }
}

export default Arm;
