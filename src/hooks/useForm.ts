import { ChangeEvent, useState } from 'react';


export const useForm = <T>( initialState: T ): 
    [T,( a:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, (newState?: T ) => void ] => {

    const [values, setValues] = useState<T>(initialState);

    const reset = (newState: T = initialState) => {
        setValues( newState );
    }


    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];

}