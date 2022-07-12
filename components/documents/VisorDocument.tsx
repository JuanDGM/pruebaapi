import { FC } from "react";
import { Box } from "@mui/material"
import { IDocument } from "../../interfaces";

interface Props{
  document?:IDocument;
}

export const VisorDocument:FC<Props> = ({document}) => {
  let d = document?.fileVisor!
  return (
    <Box>
        <embed
            src={`${"/"+d}`} 
            type="application/pdf" 
            width="100%" 
            height="600px"
           /*  style={{position:'absolute',marginTop:'-100px',width:'95%'}} */
            />
    </Box>
  )
}
