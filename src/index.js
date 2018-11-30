const errMsg = 'TimeString is not valid. please enter TimeString in (hh:mm:ss) format.'
const numericErr = 'Please enter numeric Value.'

module.exports = {
    ConvertMstoTimeString: (ms) => {
        if (isNaN(ms)) {
            return numericErr
        } else {
            let seconds = ms / 1000;
            let hours = parseInt(seconds / 3600);
            seconds = seconds % 3600;
            let minutes = parseInt(seconds / 60);
            seconds = Math.round(seconds % 60)
            if (hours < 10) hours = '0' + hours
            if (minutes < 10) minutes = '0' + minutes
            if (seconds < 10) seconds = '0' + seconds
            return (hours + ":" + minutes + ":" + seconds);
        }
    }, ConvertTimeStringtoMs: (timestring) => {
        let ts = /^[0-9/:]*$/
        if (ts.test(timestring) === true) {
            let a = timestring.split(':')
            let mSeconds
            if (a.length === 1) {
                mSeconds = (+a[0]);
            }
            else if (a.length === 2) {
                mSeconds = (+a[0]) * 60 + (+a[1]);
            } else {
                mSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            }
            return mSeconds * 1000
        } else {
            return errMsg
        }
    }
}

function ConvertTimeStringtoMs(timestring) {
    let ts = /^[0-9/:]*$/
    if (ts.test(timestring) === true) {
        let a = timestring.split(':')
        let mSeconds
        if (a.length === 1) {
            mSeconds = (+a[0]);
        }
        else if (a.length === 2) {
            mSeconds = (+a[0]) * 60 + (+a[1]);
        } else {
            mSeconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        }
        return mSeconds * 1000
    } else {
        return errMsg
    }
}