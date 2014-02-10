$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Online_Daily',
                type: 'spline'
            },
            title: {
                text: 'Online Users',
                
            },
            xAxis: {
                categories: ['01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '00']
            },
            yAxis: {
                title: {
                    text: 'Online Users'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Max User',
				marker: {
                    symbol: 'circle'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Avg User',
				marker: {
                    symbol: 'circle'
                },
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Signups',
				marker: {
                    symbol: 'circle'
                },
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });
    
})

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Online_weekly',
                type: 'spline'
            },
            title: {
                text: 'Online Users',
                
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
            },
            yAxis: {
                title: {
                    text: 'Online Users'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Max User',
				marker: {
                    symbol: 'circle'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
            }, {
                name: 'Avg User',
				marker: {
                    symbol: 'circle'
                },
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
            }, {
                name: 'Signups',
				marker: {
                    symbol: 'circle'
                },
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
            }]
        });
    });
    
})

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Online_Month',
                type: 'spline'
            },
            title: {
                text: 'Online Users',
                
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Users Online'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Max User',
				marker: {
                    symbol: 'circle'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Avg User',
				marker: {
                    symbol: 'circle'
                },
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Signups',
				marker: {
                    symbol: 'circle'
                },
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });
    
})

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Types_Daily',
                type: 'column'
            },
            title: {
                text: 'Account Membership'
            },
            xAxis: {
                categories: ['01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '00']
            },
            yAxis: {
                title: {
                    text: 'Types Of Users'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Free',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Mid Tier',
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Premium',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });
    
})

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Types_weekly',
                type: 'column'
            },
            title: {
                text: 'Account Membership'
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
            },
            yAxis: {
                title: {
                    text: 'Types Of Users'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Free',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
            }, {
                name: 'Mid Tier',
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
            }, {
                name: 'Premium',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
            }]
        });
    });
    
})

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'Users_Types_Month',
                type: 'column'
            },
            title: {
                text: 'Account Membership'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Types Of Users'
                },
                labels: {
                    formatter: function() {
                        return this.value +''
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Free',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Mid Tier',
                data: [0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Premium',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });
    
})