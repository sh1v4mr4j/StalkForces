import React,{Component} from 'react'
import ReactChartkick, {  PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import './comp.css'

ReactChartkick.addAdapter(Chart)

class Submissions extends Component{
        constructor(props)
        {
            super(props);
            this.state={
                submit:[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
        }
    }
    componentDidMount()
    {
        var sub=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
        fetch(`http://codeforces.com/api/user.status?handle=${this.props.handle}&from=1`)
        .then(res => res.json())
        .then((res)=>{
            var lenOfResult=res.result.length;

            for(let i=0;i<lenOfResult;i++)
            {
                if(res.result[i].verdict==="OK")
                    sub[0]++;
                else if(res.result[i].verdict==="COMPILATION_ERROR")
                    sub[1]++;
                else if(res.result[i].verdict==="RUNTIME_ERROR")
                sub[2]++;
                else if(res.result[i].verdict==="WRONG_ANSWER")
                sub[3]++;
                else if(res.result[i].verdict==="TIME_LIMIT_EXCEEDED")
                sub[4]++;
                else if(res.result[i].verdict==="MEMORY_LIMIT_EXCEEDED")
                sub[5]++;
                else if(res.result[i].verdict==="TESTING")
                sub[6]++;
                else
                sub[7]++;
            }
            for(let i=0;i<8;i++)
            sub[i]=(sub[i]*100)/lenOfResult;


            this.setState(
                {
                    submit :[
                    
                        (sub[0]/lenOfResult)*100
                        ,
                        (sub[1]/lenOfResult)*100
                        ,
                        (sub[2]/lenOfResult)*100,
                         (sub[3]/lenOfResult)*100
                        ,
                    
                        (sub[4]/lenOfResult)*100
                    ,
                    
                        (sub[5]/lenOfResult)*100
                    ,
                    
                        (sub[6]/lenOfResult)*100
                    ,
                    
                        (sub[7]/lenOfResult)*100
                   ,
                ]
                }
            )

        })
        // this.pieRender();

    }
    render()
    {
        
		
	
        return (
            <PieChart data={[["COMPILATION_ERROR",this.state.submit[1] ], ["WRONG_ANSWER", this.state.submit[3]], ["RUNTIME_ERROR", this.state.submit[2]],["OK", this.state.submit[0]],["TIME_LIMIT_EXCEEDED", this.state.submit[4]],["MEMORY_LIMIT_EXCEEDED", this.state.submit[5]],["TESTING", this.state.submit[6]],["OTHERS", this.state.submit[7]]]}   />
            );
    }


}






export default Submissions;