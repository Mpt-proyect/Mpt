import React, { Component } from 'react';
import Icono_mpt from '../components/Icono_mpt' 
import NavTabs from '../Pruebas/Item_menu_tab'
import { Hidden } from '@material-ui/core';
class Navigation extends Component{

  
  render(){
        return (
          <nav>
          <h1 class= "h4"> Bienvenido a <br></br>     
          <Icono_mpt> </Icono_mpt>
          </h1> 
          <NavTabs></NavTabs>
        </nav>
        
      
        )
    }
}

export default Navigation;