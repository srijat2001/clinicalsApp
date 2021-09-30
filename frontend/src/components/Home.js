import axios from "axios";
import { useEffect,useState } from "react";
import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    const [patientData,setpatientData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/clinicalapi/patients').then(res=>{
            setpatientData(res.data);
        })
    })
    return (
        <div>
            <h1>Patients Data</h1>
            <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <tr>
                    <th class="th-sm">First Name</th>
                    <th class="th-sm">Last Name</th>
                    <th class="th-sm">Age</th>
                    <th class="th-sm">Add Clinicals</th>
                    <th class="th-sm">Show Clinicals</th>
                    </tr>
                </thead>
                <tbody>
                    {patientData.map(patient=><RowCreator item={patient}/>)}
                </tbody>
            </table>
            <Link to={'/addPatient'}>Register Patient</Link>
        </div>
  );
}

class RowCreator extends React.Component{
    render(){
        const patient = this.props.item;
        return(
            <tr>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.age}</td>
                <td><Link to={'/addclinicals/'+patient._id}>Add Data</Link></td>
                <td><Link to={'/showclinicals/'+patient._id}>Show Data</Link></td>
            </tr>
        );
    }
}

export default Home;