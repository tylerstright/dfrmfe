import { Link, useNavigate } from 'react-router-dom';
import { Eye, Pencil, CheckCircle, XCircle } from 'react-bootstrap-icons'

// Useful Links:
// https://getbootstrap.com/docs/4.0/components/buttons/
// https://icons.getbootstrap.com/


export const ViewButton = (props) => {
    const navigate = useNavigate();

    // this is necessary to center the content. We pass the TD className to the cell properties (className='htCenter')
    props.TD.className = props.cellProperties.className;

    const stateInfo = {
        api: props.value
    }

    return (
        // <button type='image' className="btn btn-success" onClick={() => console.log(`View Value: ${props.value}`)}>
        // <button type='image' className="btn btn-success" onClick={() => navigate(props.value, {state:{test:'BLAPHDRPZA'}})}>
        //     <Eye />
        // </button>

        <Link className="btn btn-success" to={props.value} state={{data:stateInfo}} >
            <Eye color='white'/>
        </Link>

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

    var imgSize = '25';

    return (
        <>
            {props.value === true ? <CheckCircle color='green' size={imgSize} /> : <XCircle color='red' size={imgSize} />}
        </>
    )
}