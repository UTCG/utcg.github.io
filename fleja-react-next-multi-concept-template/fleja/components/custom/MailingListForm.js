import React from 'react';

function FormItem(props) {
    return (
        <div className="form-item">
            {props.itemName}
            {props.required ? <span className="form-ast">*</span> : ''}
            <br/>
            <input name={props.inputName}
                   type={props.inputType}
                   className={(props.required ? "required " : "") + "form-input"}/>
        </div>
    );
}

export default function MailingListForm(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-6" style={{padding: '10px'}}>
                    <h2>Subscribe to our Mailing List!</h2>
                    <form
                        action="https://facebook.us19.list-manage.com/subscribe/post?u=cf7d8138decd989c4827a3920&amp;id=ef6b20691a"
                        method="post" target="_blank">
                        <FormItem itemName="Email Address" inputName="EMAIL" inputType="email" required/>
                        <FormItem itemName="First Name" inputName="FNAME" inputType="text" required/>
                        <FormItem itemName="Last Name" inputName="LNAME" inputType="text" required/>
                        <FormItem itemName="Student number" inputName="MMERGE5" inputType="number" required/>
                        <FormItem itemName="Program of Study" inputName="MMERGE6" inputType="text"/>
                        <FormItem itemName="Current Year (1st, 3rd, etc.)" inputName="MMERGE7" inputType="text"/>
                        <div style={{position: 'absolute', left: '-5000px;', display: 'none'}} aria-hidden="true">
                            <input type="text"
                                   name="b_cf7d8138decd989c4827a3920_ef6b20691a"
                                   tabIndex="-1"
                                   value=""/>
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe"
                                   id="mc-embedded-subscribe" className="btn btn-primary wow"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}