import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import axios from 'axios';

import TextInput from '../Inputs/TextInput';
import TextAreaInput from '../Inputs/TextAreaInput';
// import MultiSelectInput from '../Inputs/MultiSelectInput';
// import ImageInput from '../Inputs/ImageInput';
// import DateInput from '../Inputs/DateInput';
// import SelectInput from '../Inputs/SelectInput';

//https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

export default function HookForm(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('HookForm Submit:')
        console.log(data);
    };

    return (
        <Container style={{ backgroundColor: 'chartreuse' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <TextInput
                    name='emailField'
                    label='Email Input'
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
                    required
                />

                <TextInput
                    name='text2'
                    label='Text Input'
                    type='text'
                    placeholder='Six character min text input!'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'This field requires at least 6 characters!',
                        // pattern: {
                        //     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        //     message:'please enter text2 email'
                        // }
                        minLength: {
                            value: 6,
                            message: 'Please enter at minimum 6 characters'
                        }
                    }}
                    required
                />

                <TextAreaInput
                    name='description'
                    label='Text Area Input'
                    rows= {5}
                    placeholder='Description placeholder...'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'Please include a description.'
                    }}
                    required
                />


                <Button type='submit' value='Save' size='lg' className='float-end' >Save</Button>
            </Form>
            <br />
        </Container>
    )
}