import { SyntheticEvent, useState } from 'react'
import './App.css'
import { Autocomplete, Button, FormControl, Grid, TextField, Typography } from '@mui/material';

type Option = { label: string; }

function App() {

  const allNames = [
    { label: "Tinsae Abay" },
    { label: "Akinola Adigun" },
    { label: "Anik Bandyopadhyay" },
    { label: "Ryan Barley" },
    { label: "Benita Boateng" },
    { label: "Carolyn Cao" },
    { label: "Alhagie Bai Cham" },
    { label: "Ashley Chiddick" },
    { label: "Carlyle Davis" },
    { label: "Lwendo Davis" },
    { label: "Daniel DeFoe" },
    { label: "Amir Delsouz" },
    { label: "Danielle Dukes" },
    { label: "Joseph Faulkner" },
    { label: "Alan Fiddes" },
    { label: "Christopher Foley" },
    { label: "Michael Gonzalez" },
    { label: "O'Dwayne Irving" },
    { label: "Jason Jarosz" },
    { label: "David Kadokhov" },
    { label: "Michael Kolb" },
    { label: "Melissa Lujan" },
    { label: "Robert Persaud" },
    { label: "Marilyn Phan" },
    { label: "Philip Polocano" },
    { label: "Stacey Proctor" },
    { label: "Ranjay Salmon" },
    { label: "Kabir Shaikh" },
    { label: "Saad Shamim" },
    { label: "Namrata Singh" },
    { label: "Jeffrey Thomas" },
    { label: "Marina Tsallagova" },
    { label: "Shaquille Whaley" },
    { label: "Kindal White" },
    { label: "Ian Williams" },
    { label: "Joshua Wood" }
  ]

  const [alreadyWent, setAlreadyWent] = useState<Option[]>([]);
  const [notInCall, setNotInCall] = useState<Option[]>([]);
  const [name, setName] = useState<string>("")

  const availableNames = allNames.filter(opt => !notInCall.some(a => a.label == opt.label) && !alreadyWent.some(a => a.label == opt.label))

  const handleNotInCallChange = (_: SyntheticEvent, newValues: Option[]) => {
    setNotInCall(newValues)
  }


  const handleAlreadyWentChange = (_ : SyntheticEvent, newValues: Option[]) => {
    setAlreadyWent(newValues)
  }

  const handleButtonClick = () => {
    setName(availableNames[Math.floor(Math.random() * availableNames.length)].label)
  }

  return (
    <Grid container width={"1028px"} padding={"20px"}>
      <FormControl fullWidth>
        <Grid item padding={"20px"}>
          <Grid >
            <Autocomplete
              fullWidth
              multiple
              value={notInCall}
              options={availableNames}
              getOptionLabel={option => option.label}
              renderInput={(params) => <TextField {...params} label="Not In Call" />}
              onChange={handleNotInCallChange}
            />
          </Grid>
        </Grid>

        <Grid item padding={"20px"}>
          <Grid >
            <Autocomplete
              multiple
              value={alreadyWent}
              options={availableNames}
              renderInput={(params) => <TextField {...params} label="Already Went" />}
              getOptionLabel={option => option.label}
              onChange={handleAlreadyWentChange}
            />
          </Grid>
        </Grid>

        <Grid item padding={"20px"}>
          <Grid >
            <Button variant="outlined"
              onClick={handleButtonClick}>
              <Typography>Pick Random Name</Typography>
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h1">{name}</Typography>
      </FormControl>
    </Grid>

  )
}

export default App
