/// <reference path="typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {Chart} from 'canvasjs/canvasjs';
import {Home} from 'components/home/home';

@Component({
  selector: 'hello'
})

@View({
  template: `
    <h2>hello</h2>
    <a [router-link]="['/home']">Home</a>
    <div id="chartContainer" height="450" width="600"></div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

class HelloCmp {
constructor(){
   var columnChart = new CanvasJS.Chart("chartContainer",
        {
            title: {
                text: "Top Oil Reserves",
            },
            axisY: {
                title: "Reserves(MMbbl)"
            },
            legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            theme: "theme2",
            data: [
                {
                    type: "column",
                    showInLegend: true,
                    legendMarkerColor: "grey",
                    legendText: "MMbbl = one million barrels",
                    dataPoints: [
                        { y: 297571, label: "Venezuela" },
                        { y: 267017, label: "Saudi" },
                        { y: 175200, label: "Canada" },
                        { y: 154580, label: "Iran" },
                        { y: 116000, label: "Russia" },
                        { y: 97800, label: "UAE" },
                        { y: 20682, label: "US" },
                        { y: 20350, label: "China" }
                    ]
                }
            ]
        });
    columnChart.render();
 }
    } 



bootstrap(HelloCmp, [ROUTER_BINDINGS]);