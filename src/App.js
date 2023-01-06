import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = (props) => {

  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const callApi = async (requestParams) => {
      // mock output
      setLoading(true);
      
      const data = await axios(requestParams);
      console.log(data);
  
      setData(data.data);
      setParams(requestParams);
      setLoading(false);
    }
    callApi(requestParams);
  }, [requestParams])

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method?.toUpperCase}</div>
      <div>URL: {requestParams.url}</div>
      <Form setParams={setParams} setLoading={setLoading} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}


export default App;