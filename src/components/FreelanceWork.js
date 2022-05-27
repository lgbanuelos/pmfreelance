import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function FrelanceWork(props) {
    const [numberOfWeeks, setNumberOfWeeks] = useState(1);
    const [paymentPerWeek, setPaymentPerWeek] = useState(0);

    const handleSubmit = () => {
        console.log("Number of weeks", numberOfWeeks);
        console.log("Web3", props.web3)
        props.web3.eth.getAccounts()
        .then(accounts => console.log(accounts));
    };
    return (
        <div>
            <p/>
            <TextField id="outlined-basic" label="Number of weeks" variant="outlined" sx={{ width: 1 }}
                onChange={ e => setNumberOfWeeks(e.target.value) }
                value={numberOfWeeks}
            />
            <TextField id="outlined-basic" label="Payment per week" variant="outlined" sx={{ width: 1 }}
                onChange={ e => setPaymentPerWeek(e.target.value) }
                value={paymentPerWeek}
            />
            <TextField id="outlined-basic" label="Completion bonus" variant="outlined" sx={{ width: 1 }}/>
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default FrelanceWork;