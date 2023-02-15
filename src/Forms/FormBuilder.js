import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import axios from 'axios';

import HiddenId from './Inputs';
import TextInput from '../Inputs/TextInput';
import TextAreaInput from '../Inputs/TextAreaInput';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import ImageInput from '../Inputs/ImageInput';
import DateInput from '../Inputs/DateInput';
// import SelectInput from '../Inputs/SelectInput';

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
    };

    function loop() {
        // for (let i = 0; i < Object.keys(options).length; i++) {
        //     console.log(Object.keys(options)[i]);
        // }
        // console.log(Object.keys(options));
        // let x = Object.keys(options);
        // console.log(typeof(x));

        let objArray = [];
        for (let i = 0; i < Object.keys(options).length; i++) {
            objArray.push(options[Object.keys(options)[i]]);
            objArray[i]['name'] = Object.keys(options)[i];
        }
        console.log(objArray);
    }
    // const fieldArray = [
    //     {name:}
    // ]

    return (
        <Container className='my-3' style={{ backgroundColor: 'hotpink' }}>
            <button onClick={() => console.log(options)}>FormBuilder options</button>
            <button onClick={loop}>Loop</button>

            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* {Object.keys(options).map((o, index) => {
                    return <h1>{options[o]}</h1>;
                    }
                )} */}
                {/* <HiddenId 
                    id={2}
                    register={register} 
                    /> */}

                {/* <TextInput
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
                /> */}

                <TextInput
                    name='name'
                    label='Project Name'
                    type='text'
                    placeholder='Enter project name'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'This field requires at least 6 characters!',
                        minLength: {
                            value: 6,
                            message: 'Please enter at minimum 6 characters'
                        }
                    }}
                    required
                />

                <TextAreaInput
                    name='description'
                    label='Project Description'
                    rows={5}
                    placeholder='Description placeholder...'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'Please include a description.'
                    }}
                    required
                />

                <MultiSelectInput
                    name='project_leader'
                    label='Project Leader'
                    api='/api/employee/'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'Select at least one option.'
                    }}
                    required />

                <DateInput
                    name='created'
                    label='Project Creation Date'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'Please select a date' //,
                        // pattern: {
                        //     value: /\d{2}\d{2}\d{4}/,
                        //     message: 'Date must be MM/DD/YYYY'
                        // }
                    }}
                    required
                />

                <Form.Group className='my-3' controlId='active'>
                    <Form.Check
                        type="checkbox"
                        label="Active Project"
                        {...register("active")}
                    />
                </Form.Group>

                <ImageInput
                    name='project_image1'
                    label='Choose Project Image'
                    placeholder='No image chosen.'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'Please choose a project image.'
                    }}
                    required
                />


                <Button className='my-3' type='submit' value='Save' size='lg' >Save</Button>
            </Form>
        </Container>
    )
}