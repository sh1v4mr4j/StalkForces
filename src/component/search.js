import React,{Component} from 'react'
import Profile from './profile.js'
import './comp.css'
import Ratingchart from './ratingchart.js'
import Submissions from './submissions.js'
import TagChart from './tagChart.js'
import Navbar from './navbar.js'
import WrongUser from './wrongUser.js'
import Footer from './footer.js'
import Loading from './Loading.js'

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            userHandle:'',
            flag:0,
            loading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

    }

    handleChange(event){
        this.setState(
            {
            userHandle : event.target.value
           
            })
    }

    handleCheck() {
        this.setState({
                loading:true
            })

        fetch(`http://codeforces.com/api/user.info?handles=${this.state.userHandle}`)
        // .then(response => response.json())
        .then((data) => {
            this.setState({
                flag:1,
            })

            setTimeout(
                function() {
                    this.setState({loading: false});
                }
                .bind(this),
                3000
            );

            console.log(".then");
        })
        .catch((err) => {
            this.setState({
                flag:2
            })

            setTimeout(
                function() {
                    this.setState({loading: false});
                }
                .bind(this),
                2000
            );
            console.log(".catch");

        })
    }


    render()
    {
        if(this.state.flag===0)
        {
            if(this.state.loading)
            {
                return (
                    <div className="loader"><Loading /></div>
                )
            }

            else
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
                    <button type="button" className="btn btn-lg btn-outline-info " onClick={this.handleCheck}>Stalk</button>
                </div>
            </div>
            <Footer />
            </div>
        )
        }
        else if(this.state.flag===2){
            if(this.state.loading)
            {
                return (
                    <div className="loader"><Loading /></div>
                )
            }

            else
            return(
                <div className="container-fluid">
                    <Navbar />
                    <WrongUser />
                </div>
            )
        }
        else
        {
            if(this.state.loading)
            {
                return (
                    <div className="loader"><Loading /></div>
                )
            }

            else
            return(
            
                <div className="container-fluid container2">
                <Navbar />
                    <div className="row margin">
                        <div className="col-md-7 offset-md-1 ">
                            <div className="row ">
                            <TagChart handle={this.state.userHandle} />
                            </div>
                            <br />
                            <div className="row pie pieMargin">
                                <Submissions handle={this.state.userHandle}  />
                            </div>
                            <br />
                            <br />
                            <div className="row ">
                                <Ratingchart handle={this.state.userHandle} />
                            </div>
                            
                        </div>
                        <div className="col-md-4 profile">
                            <Profile handle={this.state.userHandle} />
                        </div>
                    </div>
                </div>
    
        )
        }
        

    }
}
export default Search;