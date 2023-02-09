import { Row, Form, InputGroup, Button } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function DateInput(props) {

    if (!props) {
        return <></>;
    }

    return (
        <div className='my-3'>
            <Form.Label>{props.label}</Form.Label>
            <InputGroup className="mb-3" >
                <Form.Control
                    type='date'
                    aria-label="Date selector"
                    // aria-describedby="basic-addon1"
                    // placeholder='No file chosen'
                    accept='image'
                />
            </InputGroup>
        </div>
    )
}