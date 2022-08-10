import { react  } from "react";
import './UserLists.css';

const Card = props =>{
        if (props.items.length == 0){
            return (

                <div className="center">
        
                    <h2>No users found.</h2>
                            
                </div>

            )
        }

        return(
            <ul className="user-list">
                {
                    props.items.map(user =>(
                        <div className="card">
                            <h4>{user.id}</h4>
                            <h4>{user.title}</h4>
                            <h4>{user.completed}</h4>
                        </div>
                     

                    ))
                }                               
            </ul>

        )
    }
   

export default Card;
