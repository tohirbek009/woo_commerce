import React from 'react';
import rasmm from '../Assets/svg/one.svg'
import {Cardd, Two, Three, One, Text,Img} from './styleCard'
import Switch from '@material-ui/core/Switch';
import pay from '../Assets/svg/Pay.svg'
import pal from '../Assets/svg/Pal.svg'

  

const Card = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (

       <Cardd>
           <One>
               <Img src={rasmm}/>
               <Text>Stripe gateway</Text>
               <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
           </One>
           <One next>
                <Img src={pay}/>
               <Text>Paypal payments</Text>
               <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
           </One>
           <One next>
                <Img src={pal}/>
               <Text>Bank Transfers</Text>
               <Switch
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color= "primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
           </One>
       </Cardd>
    )
}

export default Card
