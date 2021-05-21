import React from "react";
import avatar from '../../accets/avatar.png'
import gr from '../../accets/gr.png'
import cr from '../../accets/cr.png'
import MyChartGo from "../cha/chart";
import Acto from "../arm/anto";

export default function Trio(){
    return(
        <div className="line">
            <div className="row lastrow">

                <div className="col-sm-4 last1">
                    <h4>Client Hours</h4>
                    <p>Working Hours</p>
                    <div className="graphic">
                        <Acto/>
                    </div>
                   

                </div>

                <div className="col-sm-4 last2">
                    <div className="avatar"><img src={avatar}/>
                        <h5>Jake Appleseed</h5>
                        <p>London, UK</p>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div className="weak">Working Hours</div>
                                <div className="strong">14 hours</div>
                            </td>
                            <td>
                                <div className="weak">Ammount Total</div>
                                <div className="strong">$ 6,269</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="weak">Overdue</div>
                                <div className="strong">$ 829</div>
                            </td>
                            <td>
                                <div className="weak">% overall work</div>
                                <div className="strong">48%</div>
                            </td>
                        </tr>
                    </table>

                    <p className='text-center'>
                        <a href="#">Send Invoice</a>
                    </p>
                </div>
                <div className="col-sm-4 last3">
                    <h4>Total Overdue</h4>
                    <p >I need Dollars</p>
                    <h2> $14,220</h2>
                   <MyChartGo/>
                    <p>
                        <a href="#">Export PDF</a>
                    </p>
                </div>

            </div>

        </div>
    )
}
