import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import hr from '../../accets/hr.png'
import graf2 from '../../accets/graf2.png'
import graf1 from '../../accets/graf1.png'
import graf3 from '../../accets/graf3.png'
import MyChartTwo from "../cha/another";
import Arm from "../arm/armChart";
import Actor from "../arm/jon";

export default function Center(){
    return(
        <div className="line">
            <div className="row main">
                <div className="col-sm-4">

                    <div className="row one1">
                        <Actor/>
                    </div>
                    <div className="row one2">
                        <Arm/>
                    </div>
                    <div className="row one3">
                        <div className="col-5">
                            <h4> 7</h4>
                            <p>People</p>
                        </div>
                        <div className="col-7">
                            <img src={graf3}/></div>
                    </div>
                </div>

                <div className="col-sm-8">
                    <div className="row cat">
                        <div className="col cat1">
                            <h4>Daily Progress</h4>
                            <p className='hohoho'>Working Hours</p>
                        </div>
                        <div className="col cat2">
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                            Open Menu
                                        </Button>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Cake</MenuItem>
                                            <MenuItem onClick={popupState.close}>Death</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </div>
                    </div>
                    <div className="row two">

                        <div className="col graphic">
                            <MyChartTwo/>
                        </div>
                    </div>
                </div>

            </div>
            <h5>Current Progress</h5>
            <p className='dich'>This table will show you how your current projects are behaving.</p>
        </div>
    )
}
