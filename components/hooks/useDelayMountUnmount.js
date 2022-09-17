import React from "react";

const useDelayMountUnmount = (isMounted, unmountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = React.useState(false);

    React.useEffect(() => {
        let timeoutId;

        if (isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        } else if (!isMounted && hasTransitionedIn) {
            timeoutId = setTimeout(
                () => setHasTransitionedIn(false),
                unmountDelay
            );
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [unmountDelay, isMounted, hasTransitionedIn]);

    return hasTransitionedIn;
};

export default useDelayMountUnmount;
