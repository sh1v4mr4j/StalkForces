import React,{Component} from 'react'
import './comp.css'

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand navbar-nav" href="."><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;&nbsp;<b>StalkForces</b></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        )
    }
}

export default Navbar;