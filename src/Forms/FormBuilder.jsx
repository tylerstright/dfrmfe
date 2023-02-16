import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';

// import CSRFtoken from '../SignIn/CSRFtoken';
import { CheckBoxInput, DateInput, ImageInput, HiddenId, MultiSelectInput, TextAreaInput, SelectInput, TextInput } from './Inputs';

//https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

export default function FormBuilder({ options }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('HookForm Submit:')
        console.log(data);

        const csrftoken = Cookies.get('csrftoken');

        axios.put('/api/division/new/', data, {
            headers: {
                "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Form submitted!')
                console.log(response);
            })
            .catch(error => {
                return error;
            });
    };

    // const fieldArray = [
    //     {name:}
    // ]

    return (
        <Container className='my-3' style={{ backgroundColor: 'hotpink' }}>
            <button onClick={() => console.log(options)}>FormBuilder options</button>

            <Form onSubmit={handleSubmit(onSubmit)}>
                {options.map(o => {
                    switch (o.type) {
                        case 'boolean':
                            return (
                                <CheckBoxInput
                                    name={o.name}
                                    label={o.label}
                                    register={register}
                                />);

                        case 'datetime':
                            return (
                                <DateInput
                                    name={o.name}
                                    label={o.label}
                                    register={register}
                                    errors={errors}
                                    validationSchema={{
                                        required: 'Please select a date.' //,
                                        // pattern: {
                                        //     value: /\d{2}\d{2}\d{4}/,
                                        //     message: 'Date must be MM/DD/YYYY'
                                        // }
                                    }}
                                    required={o.required}
                                    readOnly={o.readOnly}
                                />);

                        case 'field':
                            // HOW DO WE KNOW IF IT's MULTIPLE OR NOT???
                            if ((o.name) === 'IS THIS A MULTIPLE???') {

                                return (
                                    <MultiSelectInput
                                        name={o.name}
                                        label={o.label}
                                        api='/api/employee/'
                                        register={register}
                                        errors={errors}
                                        validationSchema={{
                                            required: 'Select one or more options.'
                                        }}
                                        required={o.required}
                                        readOnly={o.readOnly}
                                    />);
                            }
                            // non-employee select lists
                            if (['department', 'division', 'facility', 'project'].includes(o.name)) {

                                return (
                                    <SelectInput
                                        name={o.name}
                                        label={o.label}
                                        api={`/api/${o.name}/`}
                                        register={register}
                                        errors={errors}
                                        validationSchema={{ required: 'Select at least one option.' }}
                                        required={o.required}
                                        readOnly={o.readOnly} />);
                            }
                            // assuming all others should be employee (API)
                            return (
                                <SelectInput
                                    name={o.name}
                                    label={o.label}
                                    api={`/api/employee/`}
                                    register={register}
                                    errors={errors}
                                    validationSchema={{ required: 'Select an employee.' }}
                                    required={o.required}
                                    readOnly={o.readOnly} />);

                        case 'image upload':
                            return (
                                <ImageInput
                                    name={o.name}
                                    label={o.label}
                                    register={register}
                                    errors={errors}
                                    validationSchema={{ required: `Please choose a ${o.label}` }}
                                    required={o.required}
                                />
                            );

                        case 'integer':
                            if (o.name === 'id') {
                                return (
                                    <HiddenId
                                        id={2}
                                        register={register}
                                    />);
                            }
                            return <h1>{o['name']}</h1>;

                        case 'string':
                            // email?
                            if (o.name.includes('email')) {
                                return (
                                    <TextInput
                                        name={o.name}
                                        label={o.label}
                                        type='email'
                                        placeholder='Enter your email'
                                        register={register}
                                        errors={errors}
                                        validationSchema={{
                                            required: 'Email is required!',
                                            pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: 'You must enter a valid email to submit the form.'
                                            }
                                        }}
                                        required={o.required}
                                        readOnly={o.readOnly}
                                    />);
                            }
                            // limited string length...
                            if (o.max_length) {
                                return (
                                    <TextInput
                                        name={o.name}
                                        label={o.label}
                                        type='text'
                                        placeholder={`Enter ${o.name}`}
                                        register={register}
                                        errors={errors}
                                        validationSchema={{
                                            required: 'This field is required',
                                            maxLength: {
                                                value: o.max_length,
                                                message: `Value cannot exceed ${o.max_length} characters`
                                            }
                                        }}
                                        required={o.required}
                                        readOnly={o.read_only}
                                    />);
                            }
                            // no max length -- assuming a textarea?
                            if (!o.max_length) {
                                return (
                                    <TextAreaInput
                                        name={o.name}
                                        label={o.label}
                                        rows={5}
                                        placeholder={`Please provide ${o.label.toLowerCase()}.`}
                                        register={register}
                                        errors={errors}
                                        validationSchema={{ required: `${o.label} is required.` }}
                                        required={o.required}
                                        readOnly={o.readOnly}
                                    />);
                            }
                            break;
                        default:
                            return <h1>{`Missed ${o['type']}`}</h1>;
                    }
                }
                )}

                <Button className='my-3' type='submit' value='Save' size='lg' >Save</Button>
            </Form>
        </Container>
    )
}