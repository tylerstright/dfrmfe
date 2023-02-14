import { Form, InputGroup } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function DateInput({ name, label, register, errors, validationSchema, required }) {

    return (
        // <div className='my-3'>
        <Form.Group className='my-3' controlId={name}>
            <Form.Label>
                {label}
                {required && '*'}
            </Form.Label>
            {/* <InputGroup className="mb-3" > */}
            <Form.Control
                type='date'
                {...register(name, validationSchema)}
            // aria-describedby="basic-addon1"
            />
            {/* </InputGroup> */}
            {errors[name] && <p className="errorMsg">{errors[name].message}</p>}
        </Form.Group>
            // </div >
    )
}