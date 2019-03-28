import React,{Component} from 'react'
import Highcharts from 'highcharts'
import './comp.css'

class TagChart extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		}

	}


	componentDidMount(){
		fetch(`https://codeforces.com/api/user.status?handle=${this.props.handle}&from=1`)
		.then(res=>res.json())
		.then((res)=>{
			var array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var arrLen = res.result.length;
			for(let i=0;i<arrLen;i++)
			{
				var d = new Date();
				d.setTime(res.result[i].creationTimeSeconds*1000);
				array[d.getHours()]++;
			}
			console.log(array);
			this.setState({
				data:array
			})

			this.highchartRender();
		});

	}

	highchartRender(){

		Highcharts.chart('containerbar', {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Happy Coding Hours'
		    },
		    subtitle: {
		        text: 'Source: <a href="https://codeforces.com/api/help/methods" target="_blank">Codeforces</a>'
		    },
		    xAxis: {
		    	categories:['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14',
		    	'14-15','15-16','16-17','17-18','18-19','19-20','20-21','21-22','22-23','23-0'],
		        type: 'category',
		        labels: {
		            rotation: -45,
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Number of Questions attempted'
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: 'Question Attempted  <b>{point.y:.1f}</b>'
		    },
		    series: [{
		        name: 'Population',
		        data: [
		            [this.state.data[0]],
		            [this.state.data[1]],
		            [this.state.data[2]],
		            [this.state.data[3]],
		            [this.state.data[4]],
		            [this.state.data[5]],
		            [this.state.data[6]],
		            [this.state.data[7]],
		            [this.state.data[8]],
		            [this.state.data[9]],
		            [this.state.data[10]],
		            [this.state.data[11]],
		            [this.state.data[12]],
		            [this.state.data[13]],
		            [this.state.data[14]],
		            [this.state.data[15]],
		            [this.state.data[16]],
		            [this.state.data[17]],
		            [this.state.data[18]],
		            [this.state.data[19]],
		            [this.state.data[20]],
		            [this.state.data[21]],
		            [this.state.data[22]],
		            [this.state.data[23]],

		        ],
		        dataLabels: {
		            enabled: true,
		            rotation: -90,
		            color: '#FFFFFF',
		            align: 'right',
		            format: '{point.y:.1f}', // one decimal
		            y: 10, // 10 pixels down from the top
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    }]
		});
	}

	render(){
		return(
			<div className="round" id="containerbar"> </div>
			)
	};
}

export default TagChart;