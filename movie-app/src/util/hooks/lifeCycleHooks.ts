import {useEffect} from "react";

const useOnClickAway = (callback) => {
    useEffect(() => {
        document.addEventListener("mousedown", callback);
        return () => {
            document.removeEventListener("mousedown", callback);
        };
    }, []);
}
export {useOnClickAway}