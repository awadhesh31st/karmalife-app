import * as React from "react";

import { cm } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cm(
                "flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-biege placeholder-grayDark border-grayDark hover:border-grayLight focus:border-grayLight focus-visible:outline-grayLight",
                className
            )}
            ref={ref}
            autoComplete="off"
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
