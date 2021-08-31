import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from '../components/content';
import Title from '../components/title';
import Comment from '../components/comment';

function PostBox() {

    const [posts, setPost] = useState(null);
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                setPost(null);
                const res = await axios.get(
                    'http://localhost:8000/insta/post/1'
                );
                setPost(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchPost();
    }, []);

    if (!posts) return null;
    return (
        <Post>
            {posts.post_list.map((post,idx) => (
                <Title key={idx} props={post.Title}/>,
                <Content key={idx} props={post.Context}/>,
                <Comment key={idx} props={post.UploadImage}/>
            ))}
        </Post>
    );
}

const Post = styled.div`
    background-color : #FFDCFF;
    margin: 10px;
    padding: 10px;
`;
export default PostBox;