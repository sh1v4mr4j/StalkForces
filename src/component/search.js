import React,{Component} from 'react'
import Profile from './profile.js'
import './comp.css'
import Ratingchart from './ratingchart.js'
import Submissions from './submissions.js'
import TagChart from './tagChart.js'
import Navbar from './navbar.js'

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            userHandle:'',
            flag:0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState(
            {
            userHandle : event.target.value
           
            })
    }


    render()
    {
        if(this.state.flag===0)
        {
        return(

            <div className="container-fluid">
            <Navbar />

            
            <div className="row ">
                <div className="col-xs-4 col-md-4 offset-md-1 description">
                    <center>
                        <pre className="font-change">
                            <b><u>Stalkforces</u></b><br/>
                            This is our first website made<br />
                            using React. Enter the handle of<br />
                            the user you wanna stalk and you <br />
                            can go through the user's codeforces<br />
                            profile, rating, submissions and their <br />
                            Happy Hours. 
                        </pre>
                    </center>
                </div>
                <div className="col-xs-6 col-md-6 offset-md-1 SearchBar">
                    <input type="text" className="form-control" aria-label="Default" value={this.state.userHandle} onChange={this.handleChange} aria-describedby="inputGroup-sizing-default" placeholder="Enter User Handle" />
                    <br />
                    <button type="button" className="btn btn-lg btn-outline-info " onClick={()=>{this.setState({flag:1})}}>Stalk</button>
                </div>
            </div>
            </div>
        )
        }
        else
        {
        return(
            
                <div className="container-fluid container2">
                <Navbar />
                    <div className="row">
                        <div className="col-md-7 offset-md-1">
                            <div className="row round">
                            <TagChart handle={this.state.userHandle} />
                            </div>
                            <div className="row round pie">
                                <Submissions handle={this.state.userHandle}  />
                            </div>
                            <br />
                            <div className="row round">
                                <Ratingchart handle={this.state.userHandle} />
                            </div>
                            
                        </div>
                        <div className="col-md-4 round">
                            <Profile handle={this.state.userHandle} />
                        </div>
                    
                    
                    </div>
                    
                
                
                    
                </div>
    
        )
        }
        

    }
}
export default Search;