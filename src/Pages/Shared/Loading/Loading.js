import React from 'react';
import { TripleMaze } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'

const Loading = () => {
    return (
        <TripleMaze text={"Loading..."} center={true} width={"150px"} height={"150px"} />
    );
};

export default Loading;