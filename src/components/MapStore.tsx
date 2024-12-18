import React, { useState, useCallback, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  TextField 
} from '@mui/material';
import { 
  GoogleMap, 
  LoadScript, 
  Marker, 
  Autocomplete 
} from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Define map container style
const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px'
};

// Default center of the map
const center = {
  lat: 16.8409, // Vietnam's center
  lng: 106.3477
};

const StoreFinder: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Handle map load
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // Handle autocomplete load
  const onAutocompleteLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  // Handle place changed
  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry) {
        setSelectedPlace(place);
        
        // Center map on selected place
        map?.panTo(place.geometry.location!);
        map?.setZoom(14);
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={['places']}
    >
      <Box 
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: ` url('https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149145960.jpg?semt=ais_hybrid')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: 3,
                  textAlign: 'left',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon 
                    sx={{ 
                      fontSize: 60, 
                      color: '#ba0404',
                      mr: 2 
                    }} 
                  />
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: '#453f3f',
                    }}
                  >
                    Store Locator
                  </Typography>
                </Box>
                
                <Autocomplete
                  onLoad={onAutocompleteLoad}
                  onPlaceChanged={onPlaceChanged}
                >
                  <TextField
                    fullWidth
                    label="Enter your location"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Autocomplete>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2
                  }}
                >
                  Find the nearest Voopoo authorized retailer in your area.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                onLoad={onLoad}
              >
                {selectedPlace && selectedPlace.geometry && (
                  <Marker 
                    position={{
                      lat: selectedPlace.geometry.location?.lat() || center.lat,
                      lng: selectedPlace.geometry.location?.lng() || center.lng
                    }} 
                  />
                )}
              </GoogleMap>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LoadScript>
  );
};

export default StoreFinder;