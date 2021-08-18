import React from 'react';
import styled from 'styled-components';

function Headers() {

    return (
        <div>
            <Head>
                Instagram Data
            </Head>
        </div>
    );
}


const Head = styled.h1`
    font-size: 30px;
    color: #FF82FF;
    text-align: center;
`;
export default Headers;