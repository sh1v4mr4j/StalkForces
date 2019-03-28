import React,{Component} from 'react'
import './css/style.css'

class WrongUser extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Oops!</h1>
                        </div>
                        <h2>404 - Page not found</h2>
                        <p>The handle you entered was incorrect or is temporarily unavailable.</p>
                        
                    </div>
                </div>
            </div>
        )
    }
	
}

export default WrongUser;