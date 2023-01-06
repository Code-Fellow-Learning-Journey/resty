import { useState } from 'react';

import './form.scss';

const Form = (props) => {

  // const { handleApiCall, setLoading } = props;
  const [jasonData, setJsonData] = useState();
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  

 

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      json: jasonData,
      url: url,
    };
     props.setParams(formData);
  }
  

  const setActiveClass = (method) => {
    return method === setMethod ? 'active' : '';
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button data-testid="submit-button" type="submit">GO!</button>
        </label>
        <label>Update API
          <textarea onChange={(e) => setJsonData(e.target.value)} id='uplod' name='upload'
          rows='5' cols='33'></textarea>
        </label>
        <label className="methods">
          <span id="get" className={setActiveClass('get')} onClick={() => setMethod('GET')}>GET</span>
          <span id="post" className={setActiveClass('post')} onClick={() => setMethod('POST')}>POST</span>
          <span id="put" className={setActiveClass('put')} onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" className={setActiveClass('delete')} onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;
