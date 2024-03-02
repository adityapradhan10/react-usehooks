import { useState } from "react";

export function useDefault<T>(initialValue: T, defaultValue: T) {
    const [state, setState] = useState(initialValue);

    if (typeof state === "undefined" || state === null) {
        return [defaultValue, setState];
    }

    return [state, setState];
}