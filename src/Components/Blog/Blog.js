import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className="mt-10 container mx-auto p-3">

            {/* for dynamic tittle */}
            <Helmet>
                <title>Blogs - Fruits Warehouse</title>
            </Helmet>

            {/* first question */}
            <div>
                <h1 className="text-2xl text-slate-500 font-semibold text-justify">Difference between Javascript and Node Js</h1>
                <p className='text-gray-500 text-justify'>1.Javascript is used in frontend development but Nodejs is used in server-side development. <br />
                    2.Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.  <br />
                    3.Javascript can only be run in the browsers and to run JavaScript outside we need help of node.js. <br />
                    4.Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment. <br />
                    5.Javascript is used on the client-side but node js mostly used on the server-side.
                </p>
            </div>


            {/* second question */}
            <div className="mt-5 text-justify">
                <h1 className="text-2xl text-slate-500 font-semibold">What is the purpose of jwt and how does it work?</h1>
                <p className='text-gray-500'>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture. <br />
                    When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                    By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                </p>
            </div>


            {/* third question */}
            <div className="mt-5 text-justify">
                <h1 className="text-2xl text-slate-500 font-semibold">When should you use nodejs and when should you use mongodb?</h1>
                <p className='text-gray-500 '>

                    NodeJS is a Javascript runtime environment. Nodejs is used in server-side development. It is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. <br />
                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc... <br />
                    These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.

                </p>
            </div>



            {/* fourth question */}
            <div className="mt-5 text-justify">
                <h1 className="text-2xl text-slate-500 font-semibold">Differences between sql and nosql databases</h1>
                <p className='text-gray-500 '>

                    1.SQL databases are relational, NoSQL databases are non-relational. <br />
                    2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br />
                    3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
                    4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br />
                    5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                </p>
            </div>
        </div>
    );
};

export default Blog;