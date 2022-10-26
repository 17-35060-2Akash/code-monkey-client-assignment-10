import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='display-4 py-5 mt-5 fw-normal'>Question Answers</h2>
            {/*  */}
            <div className='text-start container'>
                <h3 className='display-5 pb-5 text-primary'>1. What is cors?</h3>
                <p className='fs-3 fw-lighter'>
                    <strong><span className='fs-3 text-success fw-normal'> Cross-Origin Resource Sharing (CORS): </span><br />
                        mechanism basically allows a server to indicate any
                        origins <span className='text-success fw-normal'>(domain, scheme, or port)</span> other than its
                        own from which a browser should permit loading
                        resources. CORS also relies on a mechanism by which
                        browsers make a "preflight" request to the server
                        hosting the cross-origin resource,
                        <span className='text-success fw-normal'> in order to check that the server will
                            permit the actual request. In that preflight,
                            the browser sends headers that indicate
                            the HTTP method and headers that will
                            be used in the actual request.</span>
                        <br /><br />
                        Another easy way to say, it's a browser security feature that
                        restricts cross-origin HTTP requests that are
                        initiated from scripts running in the browser.
                        The CORS mechanism supports secure
                        cross-origin requests and data
                        transfers between browsers and servers.
                        Modern browsers use CORS in APIs such as
                        <code className='fs-5'> XMLHttpRequest</code> or <code> Fetch</code> to mitigate the risks
                        of cross-origin HTTP requests.</strong>
                </p>
            </div>
            {/*  */}

            {/*  */}
            <div className='text-start container mt-5 pt-5'>
                <h3 className='display-5 pb-5 text-primary'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fs-3 fw-lighter'>
                    <strong><span className='fs-1 text-danger fw-semibold'> Firebase </span>
                        is a <span className='text-success fw-normal'>Backend-as-a-Service (Baas)</span>.
                        It provides developers with a variety of tools and
                        services to help them develop quality apps,
                        grow their user base, and earn profit.
                        <span className='fs-2 text-danger fw-semibold'>It is built on Google's infrastructure. </span>
                        Firebase is categorized as a <span className='text-success fw-normal'>NoSQL</span> database program,
                        which stores data in JSON-like documents.
                        it is possible to set up the whole authentication process
                        in just a couple of minutes. Firebase allows users to
                        authenticate with their <span className='text-primary'>phone number, email, Google, and
                            Facebook accounts and more options can be found here.</span >
                        <br /><br />
                        Firebase is great for quick projects.
                        It's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication,
                        web sockets or database connections. but there are more Competitors and Alternatives to Firebase Realtime Database in teh market some of
                        which are maybe better than firebase usage wise.
                        <br /><br />
                        For Example: <br />
                        <ul className='alternatives fw-normal'>
                            <li>MongoDB</li>
                            <li>Auth0</li>
                            <li>MS Azure</li>
                            <li>Jump Cloud</li>
                            <li>One Login etc.</li>
                        </ul>
                        <br />

                        By using such systems we got rid of traditioanl hard SQL query based DBMS's.
                    </strong>
                </p>
            </div>
            {/*  */}

            {/*  */}
            <div className='text-start container mt-5 pt-5'>
                <h3 className='display-5 pb-5 text-primary'>3. How does the private route work?</h3>
                <p className='fs-3 fw-lighter'>
                    <strong><span className='fs-2 text-danger fw-normal'> Private/Protected routes </span>
                        are those routes
                        that only grant access to authorized
                        users. This means that users must first
                        meet certain conditions before accessing
                        that specific route. For instance, your
                        application can require only logged-in users
                        be able to visit the dashboard page.
                        <br /><br />
                        <span className='alternatives fw-normal'>The Route component from react-router is public
                            by default but we can build upon
                            it to make it restricted.</span> We can add a
                        restricted prop with a default value of
                        false and use the condition if the user is
                        authenticated and the route is restricted,
                        then we redirect the user back to the
                        Dashboard component.
                        <br /><br />
                        The main thing is that, <span className='mark'>the react private route component renders child
                            components ( children ) if the user is
                            logged in. If not logged in the user is
                            redirected to the /login page with the
                            return url passed in the location state
                            property.</span></strong>

                </p>
            </div>
            {/*  */}

            {/*  */}
            <div className='text-start container mt-5 pt-5 mb-5 pb-5'>
                <h3 className='display-5 pb-5 text-primary'>4. What is Node? How does Node work?</h3>
                <p className='fs-3 fw-lighter'>
                    <strong><span className='text-success fw-normal fs-1'> Node </span>
                        is used as backend service where javascript works on the server-side of the application.
                        <span className='text-primary'>Node allows developers to write JavaScript code that runs
                            directly in a computer process itself instead of in a
                            browser.</span> Node can, therefore, be used to write server-side
                        applications with access to the operating system, file
                        system, and everything else required to build fully-functional applications.
                        <br /><br />
                        <span className='text-danger'> Node is completely event-driven. </span>
                        Basically the server consists of one thread
                        processing one event after another.
                        A new request coming in is one kind of event.
                        <span className='alternatives'> Originally it was designed for use as a
                            web application, but the author realized it could be used
                            for more general purposes and renamed it to node.</span>
                    </strong>
                </p>
            </div>
            {/*  */}
        </div>

    );
};

export default Blog;