import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/checks-radios/

export default function CheckboxInput(props) {

    if (!props) {
        return <></>;
    }

    return (
        <div className="my-3">
            <Form.Check
                id={props.id}
                label={props.label}
            />
        </div>
    )
}