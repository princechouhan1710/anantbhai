import { Component } from "react";
export default class Stats extends Component{
    render(){
        return(
            <div className="ww">
            <h1 className=' m-auto text-center p-3'>Tast stats</h1>
            <div className="d-flex flex-rowcard flex-wrap  justify-content-center gap-5">
                <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Total Task</h3>
                    <h3>1</h3>
                    <p>110 last month</p>
                </div>
                  
                      <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Pending Task</h3>
                    <h3>1</h3>
                    <p>110 last month</p>
                </div>
                    <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Progress Task</h3>
                    <h3>0</h3>
                    <p>110 last month</p>
                </div>
                    <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Complete Task</h3>
                    <h3>1</h3>
                    <p>110 last month</p>
                </div>
                    <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Depolyed Task</h3>
                    <h3>1</h3>
                    <p>110 last month</p>
                </div>
                    <div className="box shadow p-3 mb-5 bg-body-tertiary rounded border w-25 m-3 ">
                    <h3>Deferred Task</h3>
                    <h3>1</h3>
                    <p>110 last month</p>
                </div>

                   

      
            </div>
            
            </div>
        )
    }
}