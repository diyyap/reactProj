import React from 'react';
 class State extends React.Component{
     constructor(props){
         super(props);
         this.state={
             header:"header from state",
             content:"content from state"
         }
     }
     render(){
         return(
             <div>
                 <h1>
                     {this.state.header}
                 </h1>
                 <h1>
                     {this.state.content}
                 </h1>
             </div>
         )
     }
 }

 export default State;