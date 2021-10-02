import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext, FirebaseContext} from '../../context/Context'
import { useContext } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()
  const handleSubmit = ()=> {
    firebase.storage().ref(`/Images/${image.name}`).put(image).then(({ref})=> {
      ref.getDownloadURL().then((url)=> {
        firebase.firestore().collection('products').add({
          userId:user.uid,
          name,
          category,
          price,
          url,
          createdAt:date.toDateString()
        }).then(()=> history.push('/'))
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
