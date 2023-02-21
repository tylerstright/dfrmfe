import React from 'react';
import { Container, Stack } from 'react-bootstrap';

export default function FacilityContact({ facility }) {

    return (
        <Container className="py-5">
            <Stack>
                <h2 className="text-center">{`Phone Number: ${facility.phone_number}`}</h2>
                <h2 className="text-center">{facility.street_address}</h2>
                <h2 className="text-center">{facility.mailing_address}</h2>
            </Stack>
        </Container>
    )
}