import React from 'react';

class App extends React.Component {
   render() {
    var Itsvalue=5;
    var primaryFonts={
      fontSize:14,
      color:'red'

    }
      return (
         <div>
            <h1>Header</h1>
            <h2 style={primaryFonts}>Content</h2> 
            
            <p>This is the content!!!</p>
            <p>{10+10}</p>
            <div><p>{Itsvalue==5 ? 'True' : 'False'}</p></div>   
         </div>
         
      );
     
    }
}


export default App;