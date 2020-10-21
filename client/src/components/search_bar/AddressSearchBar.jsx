import React, {useRef} from 'react';
import styles from "./AddressSearchBar.module.scss";

const AddressSearchBar = (props) => {
    const addressRef = useRef()

    function passAddress(e){
        const address = addressRef.current.value
        addressRef.current.value = null
        if(address === '') return
        console.log(address) // test if textbox works
        //use the passed in address here
    }
    
    
    return (
        <>
        <h1 className={styles.addressSearchBar}>
            {props.children}
        </h1>
        <input ref={addressRef} type = "text"/>
        <button onClick={passAddress}> Go </button>
        </>
    );
}


export default AddressSearchBar;