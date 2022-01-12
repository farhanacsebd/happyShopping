import { Typography } from '@mui/material';
import React from 'react';
import Typed from 'react-typed';


const ChatChef = () => {
    return (
        <div style={{}}>
            <div style={{ backgroundColor: 'skyblue', height: '200px', width: '100%' }}>
                <div style={{ padding: '50px' }}>

                    <Typography paragraph>

                        <Typography variant="h6" component="div">
                            <Typed
                                strings={["Explore Virtual Mall"]}
                                typeSpeed={250}
                            />
                        </Typography>



                        <br />
                        Schedule a free 5-minute tour and we will show you  the largest and perfect shop.
                    </Typography>
                    <div style={{ backgroundColor: '#FFE4B5', width: '90px', padding: '3px', marginLeft: '45%' }}>
                        <a style={{ textDecoration: 'none' }} target="_blank" href="https://facebook.com/faisalDotMe">Let's Chat</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChatChef;