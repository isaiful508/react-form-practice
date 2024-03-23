import useInputstate from "../../Hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputstate('saiful hooked')
    const emailState = useInputstate('saiful@co')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form data', emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password"  name="password"/>
                <br /> <br />
               <input type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default HookForm;