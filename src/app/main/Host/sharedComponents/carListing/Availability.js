import React from 'react';
import { Typography } from '@mui/material';
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const Availability = () => {

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#D22A8F',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    return (
        <div>
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Monday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Tuesday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Wednesday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Thursday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Friday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Saturday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
            <div className="flex flex-row justify-between mt-24">
                <div >
                    <Typography className="text-sm font-medium ">Sunday</Typography>
                </div>
                <div style={{ float: "right" }}>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </div>
            </div>
            <hr
                className="w-full mt-20"
            />
        </div>
    )
}

export default Availability