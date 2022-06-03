import { Grid, Box } from '@mui/material'  
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery'
import atlanta from '../assets/images/atlanta.png'



const Featurette = ({location, cta, date, featuredescription, chiptext, place}) => {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg')); 
	const dynamicStyles = {
		...matchesLG && {padding: '0px'} 
	}
	return (
<div>

<Grid container >

	{/* Left */}
	<Grid item 
				md={12}	lg={6}  
				sx={{...dynamicStyles}} 
			  className="featureLeft">
		<div className='image-wrapper'>
	  <Box 
				component='img'
				alt="Atlanta, GA"
        src={atlanta}>
		</Box> 
		<span className="chip-text chip-blue">{chiptext}</span>
		</div>
	</Grid> 

	{/* Right */}
	<Grid item 	 md={12}	lg={6} className="featureRight" > 
		<Box bgcolor='white' >
				<div >
					<h5>
							{cta}
					</h5>
					<h3>{location}</h3>
					<h5 className="featurette-dark">
							{date}
					</h5>
					<p className='featurette-p '>
						{featuredescription}
					</p>
				</div>
		</Box>
	</Grid> 	
 

	
</Grid> {/* Grid Container End */}

</div>)}
export default Featurette