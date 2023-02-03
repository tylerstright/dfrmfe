// import { useNavigate } from 'react-router-dom';
import { Eye, Pencil } from 'react-bootstrap-icons'

// Useful Links:
    // https://getbootstrap.com/docs/4.0/components/buttons/
    // https://icons.getbootstrap.com/


export const ViewButton = (props) => {
    // const navigate = useNavigate();

    return (
        // this works...
        <button type='image' className="btn btn-success" onClick={() => console.log('CLICK View Button')}>
            <Eye />
        </button>

        // trying to bring in HotColumn
        // <HotColumn key={index} data={column} width={50} readOnly={true}>
        //                     <ViewButton hot-renderer />
        // </HotColumn>
    )
}

export const EditButton = (props) => {
    return (
        <button type='image' className="btn btn-warning" onClick={() => console.log('CLICK Edit Button')}>
            <Pencil />
        </button>
    )
}