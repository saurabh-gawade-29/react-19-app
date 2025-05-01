import React from 'react'

const Contact = () => {
    const handleFormSubmit = (formData) => {
        console.log(formData.entries(), "You will get iterator here");
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">
                    Contact Form
                </h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="wrap-form">
                            <form action={handleFormSubmit} className='d-flex flex-column'>
                                <input className="my-2 form-control" type="text" name="username" id="u1" placeholder="Enter Your Full Name" required />
                                <input className="my-2 form-control" type="email" name="email" id="e1" placeholder="Enter Your Email" required />
                                <textarea className="my-2 form-control" name="msg" id="" placeholder="Write a msg" required />
                                <button className="my-2 p-2 w-25 btn-danger" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default Contact