import React from "react";
import photo5 from '../../accets/photo5.png'
import photo4 from '../../accets/photo4.png'
import photo3 from '../../accets/photo3.png'
import photo1 from '../../accets/photo1.png'
import photo2 from '../../accets/photo2.png'

export default function Back(){
    return(
        <div className="line">

            <div className="row maintable">
                <div className="col-1 img">
                    <img src={photo2}/>
                </div>
                <div className="col-2">
                    <h5>Project Title</h5>
                    <p className='dich'> Design & Development</p>
                </div>
                <div className="col-4 tilo">
                    <p className='dich'>Last updated<span className="colortext"> Today at 4:24 AM </span><span
                        className="linis"></span><span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                        26:30<img src={photo5}/> 624</p>
                </div>

                <div className="col-3">
                    <div className="progress">
                        <div className="progress-bar hh" role="progressbar" aria-valuenow="15"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="row second">
                <div className="col-1 img">
                    <img src={photo1}/>
                </div>
                <div className="col-2">
                    <h5>Project Title</h5>
                    <p lassName='dich'> Design & Development</p>
                </div>
                <div className="col-4 tilo">
                    <p className='dich'>Last updated<span className="colortext"> Today at 4:24 AM </span><span
                        className="linis"></span><span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                        26:30<img src={photo5}/> 624</p>
                </div>

                <div className="col-3">
                    <div className="progress">
                        <div className="progress-bar qq" role="progressbar"
                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="row second">
                <div className="col-1 img">
                    <img src={photo3}/>
                </div>
                <div className="col-2">
                    <h5>Project Title</h5>
                    <p className='dich'> Design & Development</p>
                </div>
                <div className="col-4 tilo">
                    <p className='dich'>Last updated<span className="colortext"> Today at 4:24 AM </span><span
                        className="linis"></span><span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                        26:30<img src={photo5}/> 624</p>
                </div>

                <div className="col-3">
                    <div className="progress">
                        <div className="progress-bar " role="progressbar ccc"
                             aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="row second1">
                <div className="col-1 img">
                    <img src={photo4}/>
                </div>
                <div className="col-2">
                    <h5>Project Title</h5>
                    <p className='dich'> Design & Development</p>
                </div>
                <div className="col-4 tilo">
                    <p className='dich'>Last updated<span className="colortext"> Today at 4:24 AM </span><span
                        className="linis"></span><span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                        26:30<img src={photo5}/> 624</p>
                </div>

                <div className="col-3">
                    <div className="progress">
                        <div className="progress-bar mm" role="progressbar"
                             aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="row parent">
                <div className="col infa">
                    <h5>Crunch some Numbers</h5>
                    <p className='dich'>See how your projects are progressing via the new statistics
                        engine.</p>
                </div>
                <div className="col text">
                    <p className='lol'>Timeline:</p>

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            7 days
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
