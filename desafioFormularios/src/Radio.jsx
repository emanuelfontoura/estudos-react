import React from "react";

const Radio = ({pergunta, id, active, name, value, onChange, options, ...props}) => {

    if(active){
        return <>
            <h1>{pergunta}</h1>
            {options.map((opt, index) => {
                return <div>
                    <label htmlFor={name} key={id}>
                        <input type="radio" name={name} id={id} value={opt} checked={opt === value} onChange={onChange}/>
                        {opt}
                    </label>
                </div>
            })}
        </>
    }else{
        return null
    }
}

export default Radio