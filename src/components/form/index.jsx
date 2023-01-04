import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const { handleApiCall } = props;
  const [currentMethod, setMethod] = useState('GET');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: currentMethod,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  }

  const setActiveClass = (method) => {
    return method === currentMethod ? 'active' : '';
  }


  return (
    <>
      <form data-testid="submit-button" onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label>Update API</label>
        <textarea id='uplod' name='upload'
          rows='5' cols='33'></textarea>
        <label className="methods">
          <span id="get" className={setActiveClass('GET')} onClick={() => setMethod('GET')}>GET</span>
          <span id="post" className={setActiveClass('POST')} onClick={() => setMethod('POST')}>POST</span>
          <span id="put" className={setActiveClass('PUT')} onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" className={setActiveClass('DELETE')} onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;
