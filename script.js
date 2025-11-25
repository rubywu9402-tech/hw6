Highcharts.chart('container', {
    chart: {
        type: 'pie',
        zooming: {
            type: 'xy'
        },
        panning: {
            enabled: true,
            type: 'xy'
        },
        panKey: 'shift'
    },
    title: {
        text: '2024亞洲地區入境旅客國籍分布圖'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        '資料來源:<a href="https://stat.taiwan.net.tw/statistics/year/inbound/nationality" target="_default">交通部觀光署</a>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: '人次',
            colorByPoint: true,
            data: [
                {
                    name: '亞洲地區',
                    y: 6577539
                },
                {
                    name: '非洲地區',
                    sliced: true,
                    selected: true,
                    y: 11540
                },
                {
                    name: '美洲地區',
                    y: 784855
                },
                {
                    name: '大洋洲地區',
                    y: 131720
                },
                {
                    name: '歐洲地區',
                    y: 349981
                }
            ]
        }
    ]
});