// import { useNavigate } from 'react-router-dom';
import { Eye, Pencil, CheckCircle, XCircle } from 'react-bootstrap-icons'

// Useful Links:
// https://getbootstrap.com/docs/4.0/components/buttons/
// https://icons.getbootstrap.com/


export const ViewButton = (props) => {
    // const navigate = useNavigate();

    // this is necessary to center the content. We pass the TD className to the cell properties (className='htCenter')
    props.TD.className = props.cellProperties.className;

    return (
        <button type='image' className="btn btn-success" onClick={() => console.log(`View Value: ${props.value}`)}>
        {/* <button type='image' className="btn btn-success" onClick={() => console.log(`View Click`)}> */}

            <Eye />
        </button>
    )
}

export const EditButton = (props) => {

    // this is necessary to center the content. We pass the TD className to the cell properties (className='htCenter')
    props.TD.className = props.cellProperties.className;

    return (
        <button type='image' className="btn btn-warning" onClick={() => console.log(`Edit Value: ${props.value}`)}>
            <Pencil />
        </button>
    )
}

export const ActiveCheck = (props) => {

    // this is necessary to center the content. We pass the TD className to the cell properties (className='htCenter')
    props.TD.className = props.cellProperties.className;

    // variable CSS based on true/false
    var btnClass;
    props.value === true ? btnClass = 'btn btn-primary' : btnClass = 'btn btn-danger';
    
    return (
        <button type='image' className={btnClass} onClick={() => console.log(`Active Value: ${props.value}`)}>
            {props.value === true ? <CheckCircle /> : <XCircle /> }
        </button>
    )
}