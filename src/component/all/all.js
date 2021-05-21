import React from "react";
import Big from "../big/big";
import Center from "../center/center";
import Back from "../back/back";
import Trio from "../trio/trio";


export default function All(){
    return(
        <div>
            <h5>Hi Filip,</h5>
            <p>Checkout your latest projects and their progress.</p>
            <Big/>
            <Center/>
            <Back/>
            <Trio/>
        </div>
    )
}
