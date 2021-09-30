import axios from 'axios';
import React,{useEffect, useState} from 'react';


function ShowClinicals(props) {
    const [Clinicals,setClinicals] = useState([]);
    useEffect(()=>{
        //console.log(props.match.params.patientId);
        axios.get('http://localhost:8000/clinicalapi/clinicals')
            .then(res => setClinicals(res.data));
        },[props.match.params.patientId])
    const id = props.match.params.patientId;
    return (
        <div>
            <h1>Clincal Data of Patient</h1>
            <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <tr>
                    <th class="th-sm">Component Name</th>
                    <th class="th-sm">Component Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Clinicals.filter(patient => patient.patient === id).map(clinical=><RowCreator item={clinical}/>)}
                </tbody>
            </table>
        </div>
    );
}

class RowCreator extends React.Component{
    render(){
        const clinical = this.props.item;
        return(
                <tr>
                    <td>{clinical.componentName}</td>
                    <td>{clinical.componentvalue}</td>
                </tr>
        );
    }
}

export default ShowClinicals;
    
                