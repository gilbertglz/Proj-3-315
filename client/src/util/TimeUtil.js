/**
 * Converts UNIX Timestamp to JavaScript Date object
 */
const UNIXTimeStampToDate = (timestamp) => {
    return new Date(timestamp * 1000)
}

/**
 * Converts time from UTC +0 to UTC +UTCOffset
 * 
 * ex to convert from UTC +0 to UTC -5: 
 * DateFromUTC0ToTimeZone(Date obj containing 10:00:00, -5) -> 05:00:00 
 */
const DateFromUTC0ToTimeZone = (date, UTCOffset) => {
    return new Date(date.getTime() + (UTCOffset * 3600 * 1000));
}

export {UNIXTimeStampToDate, DateFromUTC0ToTimeZone};