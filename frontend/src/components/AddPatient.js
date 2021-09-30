import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router';

function AddPatient() {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setage] = useState("")
    const history = useHistory();

    function HandleSubmit(event){
        event.preventDefault();
        const patientData = {
            firstName : firstName,
            lastName : lastName,
            age : age
        }
        axios.post('http://localhost:8000/clinicalapi/patients',patientData).then(res=>{
            history.push('/');
        })
    }
    return (
        <div>
            <h1>Add Patient Details:</h1>
            <form>
                <div class="row mb-3">
                    <label for="inputfirstName" class="col-sm-2 col-form-label">First Name : </label>
                    <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputfirstName" onChange={e=>setfirstName(e.target.value)}
                    />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputLastName" class="col-sm-2 col-form-label">Last Name : </label>
                    <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputLastName"
                    onChange={e=>setlastName(e.target.value)}/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputAge" class="col-sm-2 col-form-label">Age : </label>
                    <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputAge"
                    onChange={e=>setage(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" onClick={HandleSubmit.bind(this)}>Register</button>
            </form>
        </div>
  );
}

export default AddPatient;