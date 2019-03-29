import React,{Component} from 'react'
import Highcharts from 'highcharts'
import './comp.css'

class Ratingchart extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            series:[
                {
            name:'Rating',
            data:[]
            }
        ],
        timeArray:[]
    }
    }


    componentDidMount(){
        fetch(`http://codeforces.com/api/user.rating?handle=${this.props.handle}`)
        .then(res => res.json())
        .then((res)=>{
            var i
            var updateTime = [0];
            var currRating = [1500];
            
            
            var arrayLength = res.result.length;
            for(i=0;i<arrayLength;i++)
            {
                var d = new Date();
                d.setTime(res.result[i].ratingUpdateTimeSeconds * 1000)
               console.log(d)
               console.log(1)
                updateTime.push(d)
                currRating.push(res.result[i].newRating)
            }
            this.setState({
                timeArray:updateTime,
                series:{
                    data:currRating
                }
            })
            console.log(this.state.series.data)
            
        })
        .then((res)=>{
            this.highchartsRender();
        })
        
    }

    highchartsRender(){
        
        Highcharts.chart('containerra', {

            title: {
                text: 'Ratings Graph'
            },
        
            subtitle: {
                text: this.props.handle
            },
        
            yAxis: {
                title: {
                    text: 'Rating'
                }
            },
            xAxis: {
                categories:this.state.timeArray,
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0
                }
            },
        
            series: [{
                name:'Rating Graph',
                data:this.state.series.data,
            },
        ],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
    }


    render(){
        return(
            <div className="rating round" id="containerra">
            </div>
        )
    }

}


export default Ratingchart;