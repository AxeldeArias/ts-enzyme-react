import { ChangeEvent, useState } from 'react';

type stateType = {
    [k:string]: string,
}

export const useForm = ( initialState: stateType ):
[stateType,(a: ChangeEvent<HTMLInputElement>) => void,() => void] => {
    
    const [values, setValues] = useState<stateType>(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>): void => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];

}