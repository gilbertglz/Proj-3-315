import React from 'react';
import styles from "./AddressSearchBar.module.scss";
import Autocomplete from 'react-google-autocomplete';

const AddressSearchBar = () => {
    // const addressRef = useRef()

    // function passAddress(e){
    //     const address = addressRef.current.value
    //     addressRef.current.value = null
    //     if(address === '') return
    //     console.log(address) // test if textbox works
    //     //use the passed in address here
    // }
    
    
    return (
        <div>
            <Autocomplete
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {console.log(place);}}
            types={['address']}
            />
        </div>
    );
}


export default AddressSearchBar;