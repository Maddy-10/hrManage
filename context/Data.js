import React, { createContext, useState } from "react";

export const Data = createContext(null);

export const DataProvider = (props) => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [rec_date,setRec_Date]=useState('');
  const [leave_date,setLeave_Date]=useState('');
  const [entertime,setEnterTime]=useState('');
  const [reasonstr,setReasonStr]=useState('');
  const [qrToken,setQrToken]=useState('');

  const entered= ({time})=>{
    setEnterTime(time);
    console.log(entertime);
  }
  const contextValue = {username,setUsername,rec_date,setRec_Date,leave_date,setLeave_Date,entertime,setEnterTime ,entered,reasonstr,setReasonStr,password,setPassword,qrToken,setQrToken };
  return (
    <Data.Provider value={contextValue}>
      {props.children}
    </Data.Provider>
  );
};
