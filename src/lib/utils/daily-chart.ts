export function getDailyChartOptions(action: any): any {
  if (action) {
    const start_date = new Date(Date.parse(action?.metrics.stats.all_time[0].ts)); // ordred by ts asc
    const allTimeStats = action?.metrics.stats.all_time.reduce((acc: object, cur: any) => ({
      ...acc,
      [new Date(Date.parse(cur.ts)).toLocaleDateString()]: cur
    }));
    const number_of_days = Math.ceil(
      (new Date().getTime() - start_date.getTime()) / (1000 * 3600 * 24)
    );
    const dates = [...new Array(number_of_days)].map((_, i: number) => {
      const a = new Date(start_date);
      a.setDate(start_date.getDate() + i);
      return a.toLocaleDateString('en-US');
    });

    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: true,
        data: ['Total Runs', 'Errors', 'Latency'],
        textStyle: {
          color: '#a7adba'
        }
      },
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: [
        {
          name: 'Runs',
          type: 'value'
        },
        {
          name: 'Latency (ms)',
          type: 'value',
          alignTicks: true
        }
      ],
      color: ['#5470c6', '#c65454', '#c6c254'],
      series: [
        {
          name: 'Total Runs',
          data: [...new Array(dates.length)].map(
            (_, i: number) => allTimeStats[dates[i]]?.runs ?? 0
          ),
          type: 'line'
        },
        {
          name: 'Errors',
          data: [...new Array(dates.length)].map(
            (_, i: number) => allTimeStats[dates[i]]?.errors ?? 0
          ),
          type: 'line'
        },
        {
          name: 'Latency',
          data: [...new Array(dates.length)].map((_, i: number) =>
            Math.round(allTimeStats[dates[i]]?.avg_latency ?? 0)
          ),
          type: 'line',
          yAxisIndex: 1
        }
      ]
    };
  }

  return undefined;
}
