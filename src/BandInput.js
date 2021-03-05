import React from 'react';
import firebase from './firebase';

export const BandInput = ({band}) => {
    const [Name, setName] = React.useState(band.name);
    
    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('Bands').doc(band.id).set({...band, Name})
    }
    
    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('Bands').doc(band.id).delete()
    }

    return (<>
        <input 
            value={Name} 
            onChange={(e) => {
                setName(e.target.value);
            }}
            text={band.Name}
        />
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
    </>
    );
};