import { useEffect, useRef, useState } from "react";
import Login from "../Login";
function useTimeout(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}

export default function LandingPage() {
    const [isIdle, setIdle] = useState(true);

    useTimeout(() => setIdle(false), 1000 * 2);


    return <div>
        {isIdle ? <div className='grid  place-content-center py-[300px] '>
            <h2 className='text-[#09062C] font-sans font-bold text-[50px]'>
                Translate<span className='text-[#BE2117]'>4Edu
                </span>
            </h2>

        </div> : <Login />}
    </div>;
}


