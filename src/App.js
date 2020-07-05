import React from 'react';
import { Grid, Box, Heading } from 'theme-ui'
import './App.css';
import spacings from './spacings.json'

function App() {
  console.log(spacings);

  const sites = Object.keys(spacings).filter(site => spacings[site].length).sort((a, b) => {
    const maxA = Math.max(...spacings[a])
    const maxB = Math.max(...spacings[b]);
    return maxB - maxA
  });

  return (
    <Box className="App" p={4}>
      <Heading as="h1" my={4}>Top {sites.length} Sites Spacing</Heading>
      <Grid columns={1}>
        {sites.map((site) => {
          const siteSpacing = spacings[site].filter(s => s > 0 && s !== null);
          const min = Math.min(...siteSpacing);
          const max = Math.max(...siteSpacing);
          console.log({site, min, max})
          return (
            <Box key={site} padding={3}>
              <Heading as="h3" my={3} style={{fontStyle: 'italic'}}>{site}</Heading>
              <Box>
                <svg width="100%">
                  {siteSpacing.map(w => (
                    <rect key={`${site}-${w}`} width={w} height="100" fill="#000" fillOpacity="5%" stroke="black" strokeWidth="1" />
                  ))}
                </svg>
              </Box>
            </Box>
          )
        })}
      </Grid>



    </Box>
  );
}

export default App;
