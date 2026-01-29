function timeConversion(s) {
    const modifier = s.slice(-2);
    const time = s.slice(0, -2);
    let [ hour, minute, second ] = time.split(':');

    if ( modifier === 'PM' && hour !== '12' ) {
        hour = parseInt(hour) + 12;
    }
    
    if ( modifier === 'AM' && hour === '12' ) {
        hour = '00';
    }

    console.log(`${String(hour).padStart(2, '0')}:${minute}:${second}`);
    return `${String(hour).padStart(2, '0')}:${minute}:${second}`;
}

timeConversion('12:30:30AM');
timeConversion('06:15:30AM');
timeConversion('08:30:30PM');
timeConversion('06:00:00PM');
timeConversion('12:30:00PM');
timeConversion('06:40:03AM');