import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const UserElement = ({ userElement }) => {
    const { image, name, email } = userElement;



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
            {/* <div className='m-2 border border-2'>
                <div className='text-center'>
                    <img src={image} alt="" />
                </div>
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>{email}</p>
            </div> */}

            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
    );
};

export default UserElement;