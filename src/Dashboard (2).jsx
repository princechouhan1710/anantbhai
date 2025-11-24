import { Component } from "react";
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./Pages/Sidebar.jsx";
import Task from "./pages/New_task.jsx";
import Card from "./pages/Dashboard.jsx"
import Complete from "./pages/Complete.jsx";
import Deferred from "./pages/Deferred.jsx";
import Deployed from "./pages/Deployed.jsx";
import Pending from "./pages/Pending.jsx";
import Progress from "./pages/Progress.jsx";
import Stats from "./pages/Task_stats.jsx";
export default class App extends Component{
    constructor(props){
        super(props)
      this.state={
        componetName:"Task"  ,data: [], isUpdate: false, updateIndex: null
        
      }
     
    }
    render(){
        let {componetName , data, updateIndex, isUpdate}=this.state;
        let changename=(name)=>{
            this.setState({componetName:name})
        }
    let addData = (newdata) => {
      this.setState({ data: [...data, newdata] })
    }
    let deletehandler = (index) => {
      this.setState({ data: data.filter((a, i) => { return i != index }) })
    }
    let updatehandler = (index) => {
      this.setState({ isUpdate: true, updateIndex: index, componentName: "Controlled" })
    }
    let updatedata = (updateindex, newdata) => {
      this.setState({
        data: data.map((v, i) => {
          if (updateIndex == i) {
            return { ...newdata }
          } else {
            return v
          }
        }), isUpdate: false, updateIndex: null, componentName: "Card"
      })
    }
        return(
            <div className="d-flex">

            <Navbar changename={changename}/>
            {componetName =="Task" && <Task data={data} addData={addData}
          isUpdate={isUpdate} updateIndex={updateIndex} updatedata={updatedata}/> }
              {componetName == "Dashboard" && <Card data={data} deletehandler={deletehandler} updatehandler={updatehandler}
        />}
        {componetName =="Complete" && <Complete/>}
        {componetName =="Deferred" && <Deferred/>}
        {componetName =="Deployed" && <Deployed/>}
        {componetName =="Pending" && <Pending/>}
        {componetName =="Progress" && <Progress/>}
        {componetName =="Stats" && <Stats/>}
            {/* <Navbar/>x */}
            </div>
        )
    }
}