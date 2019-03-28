import React,{Component} from 'react'
import './comp.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand navbar-nav" href="."><i className="fas fa-paper-plane icon"></i>&nbsp;&nbsp;&nbsp;<b>StalkForces</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        )
    }
}

export default Navbar;