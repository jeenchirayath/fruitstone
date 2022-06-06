import React, { useEffect, useRef, useState } from 'react';
import { Container, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import {v4 as uuidv4} from 'uuid';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Slider } from '@mui/material';
import { alpha,styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Switch from '@mui/material/Switch';
import { List, ListItem } from '@mui/material';
import { pink } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import charmander from '../Images/CharmanderHappy.PNG'
import squirtle from '../Images/Squirtle.PNG'
import bulbasaur from '../Images/Bulbasaur Field.PNG'

const PrettoSlider = styled(Slider)({
    color: '#FE5454',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#FE5454',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#FE5454',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFFFFF',
        height: "1181px",
        paddingLeft: '80px',
        paddingRight: '80px',
        borderRadius: '10px',
        position: 'relative',
        top: '80px'
    }

});
const items = [
    {
        id: 1,
        name: 'Poke Ball',
        value: 5
    },
    {
        id: 2,
        name: 'Great Ball',
        value: 10
    },
    {
        id: 3,
        name: 'Super Potion',
        value: 10
    },
    {
        id: 4,
        name: 'Hyper Potion',
        value: 20
    },
    {
        id: 5,
        name: 'Bag',
        value: 2
    }
];
const chipsData=[
    {
        id:1,
        name:'Poke Balls',
        count:6,
        value:30
    },
    {
        id:2,
        name:'Great Balls',
        count:10,
        value:100
    },
    {
        id:3,
        name:'Super Potions',
        count:10,
        value:100
    }
];
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ContainerBox = () => {
    const classes = useStyles();
    const [formIsVaild, setFormIsValid] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(charmander);
    const [chips,setChips]=useState(chipsData);
    const [selectedChip,setSelectedChip]=useState();
    const [addChip,setAddChip]=useState('');
    const [innerSlide,setInnerSlide]=useState(2)
    const [chipDialog,setChipDialog]=useState(false);
    const [startingRegion,setStartingRegion]=useState('');
    const [finalDialog,setFinalDialog]=useState(false);
    const [cost,setCost]=useState(0);
    const [name,setName]=useState('Input Text')
    const [mainSlider,setMainSlider]=useState(60);
    const [code,setCode]=useState('Code');
    useEffect(()=>{
       ;
        if(addChip !==''){
             const calculateCost=addChip.value * innerSlide;
             setCost(calculateCost);
        }
    },[addChip,innerSlide])
    const handleListItemClick = (event, index) => {
        setSelectedAvatar(index);
    };
    const chipSelectedHandler=(e)=>{
        setSelectedChip(e);
    };
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: red[500],
          '&:hover': {
            backgroundColor: alpha(red[500], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: red[500],
        },
      }));
    const chipDeleteHandler=(e)=>{
        if(e.id===selectedChip?.id) setSelectedChip(null);
        const updatedChips=chips.filter(chip=> chip.id!==e.id);
        setChips(updatedChips)
    };
    const regionHandler=(e)=>{
        setStartingRegion(e.target.value);
    };
    const chipDialogHandler=()=>{
        setChipDialog(true);
    };
    const addChipCurrent=(e)=>{
        setAddChip(e);
    };
    const innerSlider=(e)=>{
        setInnerSlide(e.target.value);
    };
    const addNewChipToHome=()=>{
        if(addChip !==''){
        const uuid=uuidv4();
        setChips([...chips,{id:uuid,name : addChip.name,value:cost,count:innerSlide}])
        setSelectedChip({
            id:uuid,
            name: addChip.name,
            value:cost,
            count:innerSlide
        })
        setChipDialog(false);
        }
    };
    const handleClose=()=>{
        setFinalDialog(false);
    };
    const finalSubmit=()=>{
       
        if(name.length < 3 ){
            setFormIsValid(false);
        }
        else{
            setFormIsValid(true);
            setFinalDialog(true);
        }
    }
    return (
        <div>
            <CssBaseline />
            <Container maxWidth='sm' className={classes.root} >
                <Typography variant='h4' align='center' style={{ color: '#FE5454', fontWeight: 600, paddingTop: "80px" }} >
                    Fill This Form
                </Typography>
                <Typography paragraph align='center' style={{ color: '#889296', fontWeight: 600, marginTop: '40px' }}>
                    We'll use this info to dominate the poke world! Muhahahahah
                </Typography>
                <TextField
                    error={formIsVaild ? false : true}
                    helperText={formIsVaild ? "" : "We know that's not yo name!!"}
                    id="filled-error-helper-text"
                    label="Full Name"
                    defaultValue={name}
                    variant="filled"
                    onChange={(e)=> setName(e.target.value)}
                    fullWidth
                    style={{ marginTop: '24px' }}
                    
                />
                <TextField
                    id="filled-error-helper-text"
                    defaultValue={code}
                    variant="filled"
                    fullWidth
                    style={{ marginTop: '24px' }}
                    onChange={(e)=> setCode(e.target.value)}
                />
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={60}
                    max={200}
                    onChange={(e)=> setMainSlider(e.target.value)}
                    style={{ marginTop: '80px' }}
                />
                <Typography paragraph align='center' style={{ fontWeight: 400, marginTop: '10px' }}>
                    How far is your nearest pokemon center? (In KMs)
                </Typography>
                
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=""
                    value={startingRegion}
                    fullWidth
                    displayEmpty
                    onChange={regionHandler}
                    style={{ color: '#00000099', marginTop: '40px' }}
                >
                    <MenuItem key={1} disabled value=''>What's your starting region?</MenuItem>
                    <MenuItem key={2} value={`Kanto`}>Kanto</MenuItem>
                    <MenuItem key={3} value={`Jhoto`}>Jhoto</MenuItem>
                    <MenuItem key={4} value={`Hoenn`}>Hoenn</MenuItem>
                </Select>
                <Typography paragraph style={{ fontWeight: 400, marginTop: '40px', color: '#00000099' }}>
                    Choose your starter pokemon
                </Typography>

                <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }} direction='row' aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedAvatar === bulbasaur}
                        onClick={(event) => handleListItemClick(event, bulbasaur)}
                        style={{ justifyContent: 'center' }}
                    >
                        <Avatar
                            alt="Bulbasaur"
                            src={bulbasaur}
                            sx={{ width: 76, height: 76 }}
                        />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedAvatar === charmander}
                        onClick={(event) => handleListItemClick(event, charmander)}
                        style={{ justifyContent: 'center' }}
                    >
                        <Avatar
                            alt="Charmander"
                            src={charmander}
                            sx={{ width: 86, height: 86 }}
                            style={{ border: '3px solid red' }}
                        />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedAvatar === squirtle}
                        onClick={(event) => handleListItemClick(event, squirtle)}
                        style={{ justifyContent: 'center' }}
                    >
                        <Avatar alt="Squirtle"
                            src={squirtle}
                            sx={{ width: 76, height: 76 }} />
                    </ListItemButton>
                </List>
                <div style={{ paddingTop: '51px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography paragraph align='left' style={{ fontWeight: 400, marginTop: '10px', color: '#00000099' }}>
                        What do you want to pack?
                    </Typography>
                    <AddCircleIcon sx={{ color: pink[500] }} fontSize='large'
                    onClick={chipDialogHandler}
                    ></AddCircleIcon>
                </div>
                <Stack direction="row" spacing={1}>
                    {chips.map(chip =>( <Chip
                        label={`${chip.count} ${chip.name}`}
                        value={chip}
                        key={chip.id}
                        onClick={()=>chipSelectedHandler(chip)}
                        onDelete={()=>chipDeleteHandler(chip)}
                        clickable={true}
                        sx={{backgroundColor: selectedChip?.id ===chip.id ? cyan[500] : 'default'}}

                    />)) }
                    
                </Stack>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography paragraph align='left' style={{ fontWeight: 600, marginTop: '40px', color: '#889296' }}>
                        Total Cost
                    </Typography>
                    {selectedChip &&(
                    <Typography paragraph align='left' style={{ fontWeight: 600, marginTop: '40px', color: '#393B3B' }}>
                        ${selectedChip?.value}
                    </Typography>)}
                </div>
                <div style={{textAlign:'center'}}>
                    <Button variant="contained" style={{backgroundColor:'#FE5454'}} onClick={finalSubmit}>
                    START MY JOURNEY
                    </Button>
                </div>
                <Dialog open={chipDialog} >
                    <DialogTitle style={{color:'#FE5454',fontWeight:600, textAlign:'center'}}>Place Your Order</DialogTitle>
                    <DialogContent>
                    <Typography paragraph align='left' style={{ fontWeight: 600, marginTop: '40px', color: '#889296' }}>
                    We'll use this info to pack your order! Muhahahahahaha
                    </Typography>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=""
                    value={addChip===''? '': addChip.name}
                    fullWidth
                    displayEmpty
                    style={{ color: '#00000099', marginTop: '40px' }}
                    >
                        <MenuItem key={1} disabled value=''>Choose Item?</MenuItem>
                        {items.map(item=>(<MenuItem key={item.id} value={item.name} onClick={()=>addChipCurrent(item)}>{item.name}</MenuItem>) )}
                       
                    </Select>
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={innerSlide}
                        max={10}
                        style={{ marginTop: '80px' }}
                        onChange={(e)=> innerSlider(e)}
                    />
                    <Typography paragraph  style={{ color: '#000000DE', fontWeight: 300, marginTop: '20px' }}>
                    Select Quantity
                    </Typography>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography paragraph  style={{ color: '#00000099', fontWeight: 300, marginTop: '20px' }}>
                            I need a bag for that!
                        </Typography>
                        <GreenSwitch {...label} defaultChecked  />
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography paragraph  style={{ color: '#889296', fontWeight: 600, marginTop: '20px' }}>
                        Cost:
                        </Typography>
                        <Typography paragraph  style={{ color: '#393B3B', fontWeight: 600, marginTop: '20px' }}>
                        ${cost}
                        </Typography>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Button variant="contained" style={{backgroundColor:'#FE5454'}}
                        onClick={addNewChipToHome}>
                        ADD TO CART
                        </Button>
                    </div>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={finalDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Name : {name}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                       Code : {code}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                       Nearest Pokemon Center : {mainSlider}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                       Your Starting Region : {startingRegion}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" style={{display:'flex'}}>
                      Your Avatar: <Avatar
                            alt="Charmander"
                            src={selectedAvatar}
                            sx={{ width: 86, height: 86 }}
                            style={{ border: '3px solid red' }}
                        />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                       Your Pack : {selectedChip?.count} {selectedChip?.name}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                      Total Cost : {selectedChip?.value} 
                    </DialogContentText>
                    </DialogContent>
                </Dialog>
               
            </Container>
        </div>
    );
};

export default ContainerBox;