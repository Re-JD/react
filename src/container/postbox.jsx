import React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Title from '../components/title';
import Comment from '../components/comment';

function PostBox() {

    return (
        <Post>
            <Title/>
            <Content/>
            <Comment/>
        </Post>
    );
}

const Post = styled.div`
    background-color : #FFDCFF;
    margin: 10px;
    padding: 10px;
`;
export default PostBox;