import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Content from '../components/content';
import Title from '../components/title';
import ImageBox from '../components/imagebox';

function PostBox() {

    const [posts, setPost] = useState(null);

    /*
    useEffect(() => {
        axios.get('http://127.0.0.1:3000/insta/post/1').then((response) => {
            setPost(response.data);
            console.log(response);
        })
    }, []);*/

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setPost(null);
                const res = await axios.get(
                    'http://localhost:8000/insta/post/1'
                );
                setPost(res.data);
            } catch (e){
                console.log("error");
            }
        };
        fetchPost();
    }, []);

    if (!posts) return null;
    return (
        <div>
            {posts.post_list.map((post,idx) => (
                <Post key={idx}> 
                    <Title title={post.Title}/>
                    <Content content={post.Context}/>
                    <ImageBox image={post.UploadImage}/>
                </Post>
            ))}
        </div>
    );
}

const Post = styled.div`
    background-color : #FFDCFF;
    margin: 10px;
    padding: 10px;
`;

export default PostBox;