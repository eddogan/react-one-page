import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './sidedrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerOpacity: false,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerOpacity: true 
            }) 
        } else {
            this.setState({
                headerOpacity: false
            })              
        }
    }
    

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }


    render() {
        return (
            <AppBar 
                position="fixed"
                style={{
                    backgroundColor: this.state.headerOpacity ? '#0091cd' : 'rgba(0,0,0,.2)',
                    boxShadow: 'none',
                    padding: '16px 0'
                }}            
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}
                    >
                        <MenuIcon 
                            aria-label
                        />
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=>this.toggleDrawer(value)}
                    />

                </Toolbar>    
            </AppBar>
        );
    }
}

export default Header;