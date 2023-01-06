import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/History/history';


export const initialState = {
  data: null,
  request: '',
  loading: false,
  history: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        ...state,
        request: action.payload,
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        history: [...state.history, { data: action.payload, request: action.req }],
        data: action.payload,
        loading: false,
      };
    case 'START_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};




const App = (props) => {

  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [json, setJson] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let formData = {
      method: method,
      url: url,
      json: json
    };
    let action = {
      type: 'SUBMIT_FORM',
      payload: formData,
    }
    dispatch(action);
  }

  useEffect(() => {
    
    const callApi = async (requestParams) => {
      // mock output
      setLoading(true);
      
      const data = await axios(state.requestParams);
      console.log(data);
  
      setData(data.data);
      setParams(requestParams);
      setLoading(false);
    }
    callApi();
  }, [state.requestParams]);

  console.log(state.history);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method?.toUpperCase}</div>
      <div>URL: {requestParams.url}</div>
      <Form data-testid="form" handleSetMethod={setMethod} handleSetUrl={setUrl} handleSubmit={handleSubmit} handleSetJson={setJson}/>
      <Results data={data} loading={loading} />
      <History data-testid="history" history={state.history}/>
      <Footer />
    </>
  );
}


export default App;