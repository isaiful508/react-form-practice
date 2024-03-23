import { useState } from "react"

const useInputstate = (defaultValue = null) => {
const [value, setValue] = useState(defaultValue);


const onChange = e =>{
    setValue(e.target.value);
}
// const handleChange = e =>{
//     setValue(e.target.value);
// }
return{
    value,
    onChange
}
}

export default useInputstate;

