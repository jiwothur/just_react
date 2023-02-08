import './Card.css'; 
/**
* @author
* @function Card
**/

function Card(props){
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
   
 }
 export default Card;