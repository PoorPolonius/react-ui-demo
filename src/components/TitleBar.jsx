import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import Icon from './Icon.jsx';

class TitleBar extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return (
            <AppBar 
                title={this.props.title}
                iconElementLeft={
                    <IconButton onClick={this.props.menuOpen}>
                        <Icon name="menu" />
                    </IconButton>
                }
            >
            </AppBar>
        );
    }
}

export default TitleBar;