import React from 'react';
import Calculator from './Calculator';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Keeper from './Keeper';


function Section(){
   
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
      const classes = useStyles();

        
    return (
    <div className="formSection">

            
        <Calculator />
        <Keeper />
        
    </div>

    );
}

export default Section;