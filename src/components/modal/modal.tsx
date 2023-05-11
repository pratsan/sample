import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import background from '../../assets/background.png'
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundImage: `url(${background})`,
    p: 4,

};

export default function MyModal(props: any) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    function handleClose() {
        navigate("/");
        setOpen(false);
    }


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>

                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}