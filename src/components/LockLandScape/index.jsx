import { useEffect } from 'react';

const useLockOrientation = () => {
    useEffect(() => {
        const lockOrientation = async () => {
            if (screen.orientation && screen.orientation.lock) {
                try {
                    await screen.orientation.lock('landscape');
                } catch (error) {
                    console.error('Screen orientation lock failed:', error);
                }
            }
        };

        lockOrientation();
    }, []);
};

export default useLockOrientation;