
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router';


function AddClinicals(props) {
    const [componentName, setcomponentName] = useState("")
    const [componentvalue, setcomponentvalue] = useState("")
    const history = useHistory();

    function HandleSubmit(event){
        event.preventDefault();
        const Data = {
            patient : props.match.params.patientId,
            componentName : componentName,
            componentvalue : componentvalue
        }
        axios.post('http://localhost:8000/clinicalapi/clinicals',Data).then(res=>{
            window.history.push('/');
        })
    }
    return (
        <div>
             <h1>Add Clinical Details:</h1>
            <form>
                <div class="row mb-3">
                    <label for="inputclinicalEntry" class="col-sm-2 col-form-label">Clinical Entry Type : </label>
                    <div class="col-sm-9">
                        <select class="form-select" aria-label="Default select example"
                        onChange={e=>setcomponentName(e.target.value)}>
                            <option selected>Open this select menu</option>
                            <option value="bp">Blood Pressure</option>
                            <option value="hw">Height/Weight</option>
                            <option value="heartrate">Heart Rate</option>
                        </select>
                     </div>
                </div>
                <div class="row mb-3">
                    <label for="inputcomponentvalue" class="col-sm-2 col-form-label">Component Value : </label>
                    <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputcomponentvalue" onChange={e=>setcomponentvalue(e.target.value)}
                    />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" onClick={HandleSubmit.bind(this)}>Confirm</button>
            </form>
        </div>
  );
}

export default AddClinicals;