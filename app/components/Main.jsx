var React = require('react');

//因為我們的Route設定為這個為父component，所以有.children，可以影響所有在其底下的page
let Main = (props) => {
    return (
        <div>
         <div>
            <div >
               <p>Main.jsx Rendered</p>
            </div>
         </div>
         
         </div>
       );
}

module.exports = Main;

/*es5 做法
var Main = React.createClass({
   render: function(){
       return (
        <div>
         <Nav/>
         <h2>Main Component</h2>
         {this.props.children}
         </div>
       );
   }
});
*/