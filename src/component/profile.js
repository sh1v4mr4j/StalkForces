import React,{Component} from 'react'
import './comp.css'
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:{
                handle:'',
                pic:'',
                lastOnline:'',
                rank:'',
                maxRating:0,
                maxRank:'',
                curRating:0,
                friendsOf:0,
                contributions:0
            }
        }
        
    }
    
    componentDidMount(){
        fetch(`http://codeforces.com/api/user.info?handles=${this.props.handle}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.result.length)
            var d = new Date();
            d.setTime(data.result[0].lastOnlineTimeSeconds*1000);
            var da=d.toLocaleTimeString();
            var ad = d.toDateString();
            var daad = da+" " +ad;    
                this.setState({
                    handle:data.result[0].handle,
                    pic:data.result[0].titlePhoto,
                    lastOnline:daad,
                    rank:data.result[0].rank,
                    maxRating:data.result[0].maxRating,
                    maxRank:data.result[0].maxRank,
                    curRating:data.result[0].rating,
                    friendsOf:data.result[0].friendOfCount,
                    contributions:data.result[0].contribution,
            



                })


        }
        )
        

        
    }
    
      render(){
        const {handle} = this.props;
        return(
                    <div className="card" >
                        <img className="card-img-top" src={this.state.pic} alt="Card image cap" /> 
                        <div className="card-header">
                            <b> {this.state.handle}  </b>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Rating : {this.state.curRating}</li>
                        </ul>
                        <div className="card-header">
                            Rank : {this.state.rank}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">last Online: {this.state.lastOnline} </li>
                        </ul>
                        <div className="card-header">
                            Max Rating: {this.state.maxRating} 
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Max Rank: {this.state.maxRank}</li>
                        </ul>   
                        <div className="card-header">
                            Friends: {this.state.friendsOf}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Contribution : {this.state.contributions}</li>
                        </ul>         
                    </div>
        )
    }
}

export default Profile;