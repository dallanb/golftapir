import { END, eventChannel } from 'redux-saga';

function countdown(secs: number) {
    return eventChannel((emitter) => {
        const iv = setInterval(() => {
            secs -= 1;
            if (secs > 0) {
                emitter(secs);
            } else {
                // this causes the channel to close
                emitter(END);
            }
        }, 1000);
        // The subscriber must return an unsubscribe function
        return () => {
            clearInterval(iv);
        };
    });
}

export default countdown;
