import { Grid } from '@mui/material' 
import Featurette from './Featurette'  
import { useTheme } from '@mui/material/styles'
import  useMediaQuery  from '@mui/material/useMediaQuery'
// import atlanta from '../assets/images/atlanta.png'
// import singapore from '../assets/images/singapore.jpg'

const PlacesToVisit = () => {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg')); 
	const dynamicStyles = {
		...matchesLG && {padding: '0px'} 
	}
	return (
<div>

<Grid container style={{background: 'white'}}>
{/* Atlanta */}
<Grid item 
			md={12}	lg={6}  
			sx={{...dynamicStyles}}>
		<Featurette  
			location= 'Atlanta, GA'
			cta = 'REGISTER NOW'
			date = 'APRIL 15, 2020'
			featuredescription = 'Torquatos nostros? quos tu paulo ante cum soluta nobis est.'
			chiptext = 'domestic'  
		/>
</Grid> 	

{/* Singapore */}
<Grid item  
			md={12}	lg={6}  
			sx={{...dynamicStyles}}>
		<Featurette 
			location= 'Singapore'
			cta = '3 SPOTS LEFT!'
			date = 'FEBRUARY 15, 2020'
			featuredescription = 'Primum igitur, inquit, sic agam, ut aliquid ex eo delectu.'
			chiptext = 'international'  
		/>
</Grid> 	
</Grid> {/* Grid Container End */}
</div>)}
export default PlacesToVisit