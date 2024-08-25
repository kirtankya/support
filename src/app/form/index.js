import React, { useEffect, useState } from 'react';
import './form.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
    const [data, setData] = useState({
        supportVisblity: false,
        product: '',
        code: '',
        fullname: '',
        email: '',
        password: '',
        repeatPassword: '',
        ticketSubject: '',
        relatedURL: '',
        ticketDescription: '',
        file: '',
        ticketVisibility: false,
        agreeVisibility: false,
    });

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setData(JSON.parse(savedData));
        } else {
            setData({
                supportVisblity: false,
                product: '',
                code: '',
                fullname: '',
                email: '',
                password: '',
                repeatPassword: '',
                ticketSubject: '',
                relatedURL: '',
                ticketDescription: '',
                file: '',
                ticketVisibility: false,
                agreeVisibility: false,
            });
        }
    }, []);

    const [selectCategory, setSelectCategory] = useState('');
    const [showInput, setShowInput] = useState(false);

    const productCategory = ['TalentTrove', 'Portfolio'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setData(prevData => ({
            ...prevData,
            [name]: newValue
        }));

        if (name === 'product') {
            setSelectCategory(value);
            setShowInput(value !== '');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!selectCategory) {
            isValid = false;
            toast.error('Please select a product category');
            return;
        }

        const requiredFields = ['fullname', 'email', 'password', 'repeatPassword', 'ticketSubject', 'ticketDescription'];
        requiredFields.forEach(field => {
            if (!data[field].trim()) {
                isValid = false;
                toast.error(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            }
        });

        if (isValid) {
            saveFormData(data); // Save form data to localStorage
            resetForm();
        }
    };

    const handleFileChange = (files) => {
        if (files && files.length > 0) {
            const selectedFile = files[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

            if (allowedTypes.includes(selectedFile.type)) {
                setData(prevData => ({
                    ...prevData,
                    file: selectedFile
                }));
            } else {
                toast.error("Please select a valid image file (JPEG, PNG, GIF).", {
                    position: "top-right"
                });
            }
        } else {
            toast.warn("Please select a file to upload.", {
                position: "top-right"
            });
        }
    };

    const resetForm = () => {
        setData({
            supportVisblity: false,
            product: '',
            code: '',
            fullname: '',
            email: '',
            password: '',
            repeatPassword: '',
            ticketSubject: '',
            relatedURL: '',
            ticketDescription: '',
            file: '',
            ticketVisibility: false,
            agreeVisibility: false,
        });
    };

    const saveFormData = (formData) => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const existingData = JSON.parse(savedData);
            const newData = [...existingData, formData];
            localStorage.setItem('formData', JSON.stringify(newData));
        } else {
            localStorage.setItem('formData', JSON.stringify([formData]));
        }
    };

    return (
        <div>
            <div className="container">
                <div className="support-main">
                    <div className='support_main'>
                        <div className="text">
                            <h3>Submit a Ticket</h3>
                        </div>
                        <div className="support-aligment">
                            <div className="support_query">
                                <input type="radio" checked={data.supportVisblity} required name="radio" id="" />
                                <p>Pre Sale Query(I want to purchase but have some query)</p>
                            </div>
                            <div className="support_query">
                                <input type="radio" checked={data.supportVisblity} required name="radio" id="" />
                                <p>Post Sale Query(I have purchased and have some query)</p>
                            </div>
                        </div>
                        <div className="product_category">
                            <label>Product Or Category *</label>
                            <select value={selectCategory} onChange={handleChange} name="product" id="">
                                {!selectCategory && <option value="">Choose One...</option>}
                                {productCategory.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <p> With which product or category do you need help?</p>
                        </div>
                        {showInput && (
                            <>
                                <div className='otherInput'>
                                    <label>Enter Your Purchase Code *</label><br />
                                    <input type="text" value={data.code} placeholder='Enter Your Purchase Code' name="code" id="" required onChange={handleChange} />
                                    <p>Enter your Envato purchase code here to verify your purchase.</p>
                                </div>
                                <div className="registerForm">
                                    <h2>Registration</h2>
                                    <p className='text'>You will need to register an account with us to get support.</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form_aligment">
                                            <div className="aligment">
                                                <label htmlFor="">Full Name *</label><br />
                                                <input type="text" value={data.fullname} name="fullname" id="" required onChange={handleChange} />
                                            </div>
                                            <div className="aligment">
                                                <label htmlFor="">Email *</label><br />
                                                <input type="email" value={data.email} name="email" id="" required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form_aligment">
                                            <div className="aligment">
                                                <label htmlFor="">Password *</label><br />
                                                <input type="password" value={data.password} name="password" id="" required onChange={handleChange} />
                                            </div>
                                            <div className="aligment">
                                                <label htmlFor="">Repeat Password *</label><br />
                                                <input type="password" value={data.repeatPassword} name="repeatPassword" id="" required onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form_aligment">
                                            <div className="aligment">
                                                <label htmlFor="">Ticket Subject *</label><br />
                                                <select value={data.ticketSubject} name="ticketSubject" id="" required onChange={handleChange}>
                                                    <option value="Request For demo images">Request For demo images</option>
                                                    <option value="Responsive issue Design / SetUp Issue">Responsive issue Design / SetUp Issue</option>
                                                    <option value="I want custom work -paid">I want custom work -paid</option>
                                                    <option value="Wrong Purchase, want to replace with ...">Wrong Purchase, want to replace with ...</option>
                                                    <option value="Request for WP Theme Setup On custom server">Request for WP Theme Setup On custom server</option>
                                                    <option value="Installation Issue">Installation Issue</option>
                                                    <option value="No satisfy, Missing Pages / Functionality, Buggy">No satisfy, Missing Pages / Functionality, Buggy </option>
                                                    <option value="New Projects Requirements">New Projects Requirements </option>
                                                </select>
                                                <p>In general, what is this ticket about?</p>
                                            </div>
                                            <div className="aligment">
                                                <label htmlFor="">Related URL</label><br />
                                                <input type="url" value={data.relatedURL} placeholder='http://' name="relatedURL" id="" onChange={handleChange} />
                                                <p>Optional, but very helpful.</p>
                                            </div>
                                        </div>
                                        <label htmlFor="">Ticket Description *</label><br />
                                        <textarea value={data.ticketDescription} name="ticketDescription" id="" required onChange={handleChange}></textarea>
                                        <p>Please be as descriptive as possible regarding the details of this ticket.</p>
                                        <input type="file" onChange={(e) => handleFileChange(e.target.files)} name="file" id="" />
                                        <p>Ticket Visibility</p>
                                        <span>By default, only the support team can view and respond to your tickets. A public ticket, however, would allow the entire community to view and reply. Note that they cannot view any information entered into the "private" fields above.</span>
                                        <div className="aligments">
                                            <input checked={data.ticketVisibility} required type="checkbox" name="ticketVisibility" id="" onChange={handleChange} />
                                            <span>Make this ticket public</span>
                                        </div>
                                        <p>Read our privacy policy and see how we handle your personal data</p>
                                        <div className="aligments">
                                            <input checked={data.agreeVisibility} required type="checkbox" name="agreeVisibility" id="agreeVisibility" onChange={handleChange} />
                                            <span>Agree to terms and conditions</span>
                                        </div>
                                        <div className="button">
                                            <button type="submit">Submit Ticket</button>
                                            <ToastContainer />
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
