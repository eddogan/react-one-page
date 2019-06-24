import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={()=>props.onClose(false)}
            >
                <List component="nav">
                    <ListItem button onClick={()=>console.log('hey')}
                    >
                        Event Starts in
                    </ListItem>
                    <ListItem button onClick={()=>console.log('hey')}
                    >
                        Venue Info
                    </ListItem>
                    <ListItem button onClick={()=>console.log('hey')}
                    >
                        Higlights
                    </ListItem>
                    <ListItem button onClick={()=>console.log('hey')}
                    >
                        Pricing
                    </ListItem>
                    <ListItem button onClick={()=>console.log('hey')}
                    >
                        Location
                    </ListItem>
                </List>
            </Drawer>
        );
}

export default SideDrawer;