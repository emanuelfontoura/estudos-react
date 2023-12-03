import React from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'CEP inválido!'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido!'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value){
        if(value.length === 0){
            setError(types[type].message)
            return false
        }else if(!types[type].regex.test(value)){
            setError(types[type].message)
        }else{
            setError(null)
            return true
        }
    }
    
    function onChange({target}){
        if (error) validate(target.value)
        setValue(target.value)
    }

    function onBlur ({target}){
        validate(target.value)
    }

    return {type, value, setValue, error, onChange, onBlur}
}

export default useForm