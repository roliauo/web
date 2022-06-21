import React, {Fragment, useState} from "react";
import styled from "styled-components";
import InputBox from './common/InputBox';

/*<InputBox id='num' value={input}/>*/

function Calculator () {
    const [input, setInput] = useState<string>('0');
    const [result, setResult] = useState<number>(0);

    function onAdd(){
        if (isNaN(Number(input))) return;
        setResult(result+Number(input));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return(
        <Fragment>
            <input 
                type='text' 
                name='num'
                value={input}
                pattern='[0-9]+' 
                onChange={(e) => handleChange(e)}
                //className={props.className}
            />
            {/* <InputBox id='num' value={input}/> */}
            <input type='submit' value='Add' className="btn_" onClick={onAdd} />
            <div className="result"> {result} </div>
        </Fragment>

    );
}

const StyledComponent = styled(Calculator)`

`

export default Calculator;