import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">
                    Contact Form
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="wrap-input d-flex flex-column">
                            <input className="my-2" type="text" name="username" id="u1" placeholder="Enter Your Full Name" />
                            <input className="my-2" type="email" name="email" id="e1" placeholder="Enter Your Email" />
                            <textarea className="my-2" name="msg" id="" placeholder="Write a msg"></textarea>
                        </div>
                        <button className="my-2 p-2" type="submit">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact