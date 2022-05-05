import React from 'react';
import 'tw-elements';

const Blogs = () => {
    return (
        <div className='mt-5 mb-5 ml-16 mr-16'>
            <div className="accordion" id="accordionExample5">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne5">
                        <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                            aria-controls="collapseOne5">
                            What are the differences between javascript and NodeJS?
                        </button>
                    </h2>
                    <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
                        <div className="accordion-body py-4 px-5">
                            Javascript is a programming language that is used to write the scripts to develop a website and nodejs is a Javascript runtime environment. Javascript is a client side language but nodejs mostly used in server side. Javascript has capability to use html, dom but nodejs doesn't. Nodejs used in backend development where javascript used in frontend development. Nodejs is written in c, c++ and javascript and javascript itself uses chrome’s v8 engine to render.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo5">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
                            aria-controls="collapseTwo5">
                            When should you use nodejs and when should you use mongodb?
                        </button>
                    </h2>
                    <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
                        <div className="accordion-body py-4 px-5">
                            MongoDB and NodeJS are two different technologies. Nodejs is a javascript engine that you can write any application you want with. It is commonly used to build servers which is popular and can handle web requests. So we should use nodejs when we  need to use a server for website. MonogDB is mainly a database system where we can store data efficiently, we can also store documents, json format in this database and can also perform create, read, update, delete etc operations. So, we should use Mongodb when we need to store data.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree5">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
                            aria-controls="collapseThree5">
                            What are the differences between sql and nosql databases?
                        </button>
                    </h2>
                    <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
                        <div className="accordion-body py-4 px-5">
                            SQL database is a relational database system where NoSQL database is a non relational and a distributed database system. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL database have a fixed schema, NoSQL database have dynamic schema. We can SQL database to store small amount of data but for storing a large amount of data, NoSQL database is suitable.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingFour5">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour5" aria-expanded="false"
                            aria-controls="collapseFour5">
                            What is the purpose of JWT and how does it work?
                        </button>
                    </h2>
                    <div id="collapseFour5" className="accordion-collapse collapse" aria-labelledby="headingFour5">
                        <div className="accordion-body py-4 px-5">
                        JSON Web Token or JWT contains encoded JSON objects, including a set of claims. JWT is signed using a cryptographic algorithm to ensure that the claims cannot be replaced after the token is generated and being used. Purpose of using JWT is to use an access token to prevent unwanted access from outside and to protect resources such as API. When a user logs in to an application with a username and password, an access token containing a reference is generated. For protected routes, the same way an access token can be used to secure it. The client then includes this access token with every request to the server. This way the JWT works. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;