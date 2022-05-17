import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const UserElement = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Body>
        </Popover>
    );



    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
    );
};

export default UserElement;