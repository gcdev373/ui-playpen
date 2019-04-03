import React, { useCallback, useState } from 'react';

import './App.css';


import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch';
const client = new Client({ node: 'http://localhost:9200' });

const App: React.FunctionComponent = () => {

  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() =>
    setCount(count + 1)
    , [count, setCount])

  const params: RequestParams.Search =
  {
    index: 'git-*',
    body: { user: 'stroomdev66' }
  }

  const onSearch = useCallback(() => {
    client.search(params).then((result: ApiResponse) => {
      console.log("The results are in");
      console.log(result.body.hits.hits);
    })
      .catch((err: Error) => {
        console.log(err);
      })
  }, [client]);

  return (
    <div className="App">
      <header className="App-header">

        <p>That dev has committed {count} objects</p>
        {
        }
        <button onClick={onSearch}>Increment</button>
      </header>
    </div>
  );
}

export default App;
