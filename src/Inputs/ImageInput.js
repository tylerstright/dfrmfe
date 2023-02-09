import { Row, Form, InputGroup, Button } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function ImageInput(props) {

    if (!props) {
        return <></>;
    }

    return (
        <>
            <Form.Label>{props.label}</Form.Label>
            <InputGroup className="mb-3" >
                <Form.Control
                    type='file'
                    aria-label="Choose File"
                    // aria-describedby="basic-addon1"
                    placeholder='No file chosen'
                    accept='image'
                />
            </InputGroup>
        </>
    )
}