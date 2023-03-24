import React from 'react'
import { useQuery } from '@apollo/client'
import INFO_PERSON from './service/query/RickMortyQuery'
import { Person } from './model/Person'

import {
  Box,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  IconButton,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@emotion/react'
import { ColorModeContext } from './ToggleColorMode'

import { ThemeOptions } from '@mui/material/styles/createTheme'

function App() {
  const { loading, error, data } = useQuery(INFO_PERSON)

  const colorMode = React.useContext(ColorModeContext)

  const theme: ThemeOptions = useTheme()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>an error occurred...</p>
  }

  return (
    <Box>
      <div style={{ display: 'flex' }}>
        <Typography component="div" variant="h4">
          This website is using {theme.palette?.mode} mode{' '}
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette?.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
      <Box className="parent" sx={{ display: 'flex', flexDirection: 'column' }}>
        {data.characters.results.map((person: Person, idx: string) => (
          <Paper
            elevation={3}
            className="card"
            aria-details={person.name + idx}
            key={person.name}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              margin: '1em 10%',
            }}
          >
            <CardMedia component="img" height="150" image={person?.image} />

            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {person.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                GENDER: {person.gender}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                SPECIE: {person.species}
              </Typography>
            </CardContent>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default App
