import React from 'react';
import { Form } from 'react-bootstrap';

// https://docs.djangoproject.com/en/4.0/ref/csrf/

export default function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

const CSRFhidden = ({ register }) => {
    return (
        <Form.Group controlId='csrfmiddlewaretoken'>
            <Form.Control 
            type='hidden'
            value={csrftoken}
            {...register('csrfmiddlewaretoken')}
            readOnly
            />
        </Form.Group>
    );
};