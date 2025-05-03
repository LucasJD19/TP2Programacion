import React from 'react';
import Aside from './Aside';
import Article from './Article';
import LangTable from './LangTable';
import "../index.css"

const MainHome = ({ lenguajes }) => {
  return (
    <div>
      <main className="principal">
        <br/>
        <Aside/>
        <Article lenguajes={lenguajes} />
        <LangTable lenguajes={lenguajes} />
        <br/>
        <br/>
      </main>  
    </div>
  );
};

export default MainHome;

