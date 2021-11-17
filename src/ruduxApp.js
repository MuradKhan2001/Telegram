import React, {useState} from 'react';
import {connect} from "react-redux";

function RuduxApp(props) {
    return (
        <div>
            <h1>{props.a}</h1>
            <button onClick={props.addCounter}>ADD</button>
        </div>
    );
}

function mapStateToProps(state) {
    return{
        a:state.count
    }

}

function mapDispatchToProps(dispatech) {
    return{
        addCounter:()=>{
            dispatech({
                type: "ADD",
                payload:{
                    count:1
                }
            })
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps) (RuduxApp);