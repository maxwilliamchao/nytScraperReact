import React from "react";
// import {Link} from "react-router-dom";
import "./panel.css";

const Panel = props =>
  <div className="panel panel-default">
    <div className="panel-heading">Query</div>
    <div className="panel-body">
      <form>
        <div className="form-group">
        <label>Topic</label>
        <input type="text" className="form-control" name="Topic" value={props.topic} onChange={props.submitInputHandler}></input>
        <label>StartDate</label>
        <input type="text" className="form-control" name="StartDate" value={props.StartDate} onChange={props.submitInputHandler}></input>
        <label>EndDate</label>
        <input type="text" className="form-control" name="EndDate" value={props.EndDate} onChange={props.submitInputHandler}></input>
        <button type="submit" onClick={props.apiHandler} className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>

export default Panel;