import { Component, OnDestroy } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrl: './horizontal-bar-chart.component.css',
})
export class HorizontalBarChartComponent implements OnDestroy{
  results: any[] = [
    {
      name: 'Game #1',
      value: 20,
    },
    {
      name: 'Game #2',
      value: 25,
    },
    {
      name: 'Game #3',
      value: 15,
    },
    {
      name: 'Game #4',
      value: 30,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  interval: any ;

  constructor() {
    this.interval = setInterval(() => {
      console.log('tick')

      const newResults = [...this.results];

      for (let i in newResults) {
        this.results[i].value = Math.round(Math.random() * 500);
      }

      this.results = [...newResults];
    }, 1500);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  onSelect(event: any) {
    console.log(event);
  }
}
/* '#A10A28', '#C7B42C', '#AAAAAA'  */
