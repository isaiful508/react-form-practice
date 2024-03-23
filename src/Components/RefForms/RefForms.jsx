import { useEffect } from "react";
import { useRef } from "react";


const RefForms = () => {


const nameRef = useRef(null); 
const emailRef = useRef(null); 
const passwordRef = useRef(null); 

useEffect(() => {
    nameRef.current.focus();
}, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'isaiful@gmail.com'} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br /> <br />

                <input type="submit" value="Submit" />
               
            </form>
        </div>
    );
};

export default RefForms;