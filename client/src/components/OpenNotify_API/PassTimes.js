import React from 'react';

const PassTimes = (props) => {

    const { pts } = props;

    if (!pts || pts.length === 0) return <p>No Pass Times, an invalid api requst</p>;

    var arr = [];
    Object.keys(pts).forEach( (k) => {
        console.log(pts[k])
        arr.push(pts[k])
    });

    var obj = []; // Contains ISS passover time objects
    Object.keys(arr[2]).forEach( (n) => {
        console.log(arr[2].[n])
        obj.push(arr[2].[n]) 
    });

    return (
    <ul>
        <h2>Available Pass Times</h2>
        {obj.map ((elem) => {
            return (
               <li>Duration: {elem.duration} Risetime: {elem.risetime}</li>
            );
        })}  
    </ul>
    );
};
export default PassTimes;