import { Link } from 'react-router-dom';
import { Eye, Pencil, CheckCircle, XCircle } from 'react-bootstrap-icons'

// Useful Links:
// https://getbootstrap.com/docs/4.0/components/buttons/
// https://icons.getbootstrap.com/


export const ViewButton = (props) => {
    // this is necessary to center the content. We pass the TD className to the cell properties (className='htCenter') // ONLY NEEDED FOR PASSING FROM HoT
    // props.TD.className = props.cellProperties.className;

    // used for routing to correct page
    // const stateInfo = { api: props.value }

    return (
        <Link className="btn btn-success" to={props.value} >
            <Eye color='white' />
        </Link>
    )
}

export const EditButton = (props) => {
    return (
        <Link className="btn btn-warning" to={props.value} >
            <Pencil color='white' />
        </Link>
    )
}

export const ActiveCheck = (props) => {
    var imgSize = '30';

    return (
        <>
            {props.value === true ? <CheckCircle color='green' size={imgSize} /> : <XCircle color='red' size={imgSize} />}
        </>
    )
}