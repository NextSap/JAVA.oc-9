import React from 'react';

type TextAreaProps = {
    label?: string;
    errormessage?: string | undefined;
    register?: any;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: TextAreaProps) => {
    return (
        <div className="flex flex-col">
            {props.label && <label className="text-[17px] mb-1" htmlFor={props.id}>{props.label}</label>}
            <textarea {...props} {...props.register} className={`border rounded text-[15px] mb-0.5 p-1 focus:outline-black hover:border-gray-600 duration-300 ${props.className}`} />
            {props.errormessage && <span className="text-red-500 text-[14px]">Error: {props.errormessage}</span>}
        </div>
    );
};

export default TextArea;