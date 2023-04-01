import React from 'react'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global src={'../index.css'}>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          background-color: #f5f5f7;
        }
      `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default App