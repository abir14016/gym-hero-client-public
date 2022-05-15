import React from 'react';
import blog1 from '../../images/blogs/blog-1.jpg';
import blog2 from '../../images/blogs/blog-2.png';
import blog3 from '../../images/blogs/blog-3.jpg';
import blog4 from '../../images/blogs/blog-4.png';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <div className='blog-container container my-5shadow-lg border rounded'>
                <div className='blog-container-image'>
                    <img src={blog1} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>Difference between javascript and node js.</h2>
                    <p className='ms-3 mt-2'>Many of us do not know properly what are the actual differences between Java Script and Node JS. Today I'm gonna discuss some of the main differences between Javascript and node js. Java Script is actually single treated programming language. On the other hand Node, js is a runtime of JavaScript. Java Script is running in any web browser with a proper browser engine like the V8 engine for google chrome, and the JavaScript core engine for Safari. But Node JS is using the v8 engine directly. It actually helps us to use Javascript from outside of the browser.</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded'>
                <div>
                    <h2 className='ms-3 mt-2'>When should you use nodejs and when should you use MongoDB</h2>
                    <p className='ms-3 mt-2'>In java script for back end most of the time we use Node JS and Mongodb. This two this plays in deferent ways. Node JS is actually a runtime of Java script that is used for making backend. On the other hand Mongodb is database. We use Mongodb for store our data of our site. MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data). On the other site. It is very lightweight and fast. There has been over 200000 visits on this website in three weeks and minimal server resources has been able to handle it all. </p>
                </div>
                <div className='blog-container-image'>
                    <img src={blog2} alt="" />
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded py-3'>
                <div className='blog-container-image'>
                    <img src={blog3} alt="" />
                </div>
                <div>
                    <h2 className='ms-3 mt-2'>What is the purpose of jwt and how does it work?</h2>
                    <p className='ms-3 mt-2'>JWT stands for JSON web token. we use JWT for Authorizing user in our website. Authorizing mean what can actually do a user. How do We use JWT? When a user login a web page we give him a temporary token. And it has a expire date. When he again come again web site later. We authenticate with his token by jwt. If matched than we give him access to the site. Other JWT doesn't allow him in the site.</p>
                </div>
            </div>
            <div className='blog-container container my-5 shadow-lg border rounded'>
                <div>
                    <h2 className='ms-3 mt-2'>Differences between SQL and NoSQL databases.</h2>
                    <p className='ms-3 mt-2'>SQL databases are relational, NoSQL databases are non-relational.
                        SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        Enjoying This Article?</p>
                </div>
                <div className='blog-container-image'>
                    <img src={blog4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;