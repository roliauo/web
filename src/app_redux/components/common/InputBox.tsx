import React, {useState} from "react";
import styled from 'styled-components';

interface Props {
    id: string;
    value: string;
    pattern?: string;
    readonly?: boolean;
    className?: string;
}

const InputBox = (props: Props) => {
    const [input, setInput] = useState<string>(props.value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log("e.target.value: "+e.target.value)
    }
    
    return(
        //<div className={props.className}>
            <input 
                type='text' 
                id={props.id} 
                name={props.id} 
                pattern={props.pattern} 
                value={input} 
                onChange={(e) => handleChange(e)}
                className={props.className}
            />
        //</div>
        
    )
}

const StyledComponent = styled(InputBox)`
    width: 150px;
`

export default StyledComponent;