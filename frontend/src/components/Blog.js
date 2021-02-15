import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeatueredBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/list/`);
                setBlogs(res.data)
                console.log(res.data)
            }
            catch (err) {

            }
        }
        fetchData();
    }, []);

    const getBlogs = () => {
        let list = [];
        let result = [];
        
        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{blogPost.title}</h3>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src='#' alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container'>
            {getBlogs()}
        </div>
    );
};

export default Blog;