import { Container, Grid, Typography } from '@mui/material';
import leftImg from '../../../assets/aboutLeft.png';
import rightImg from '../../../assets/aboutRight.png';
import styles from './About.module.css';
import r1 from '../../../assets/r1.png';
import r2 from '../../../assets/r2.png';
import l1 from '../../../assets/l1.png';
import l2 from '../../../assets/l2.png';

export default function About() {
	return (
		<div className={styles.about}>
			<Container maxWidth='xl'>
				<Typography
					color='primary'
					variant='h3'
					textAlign='center'
					fontSize='48px'
				>
					Узнайте нас
				</Typography>
				<Typography
					color='primary'
					variant='h4'
					textAlign='center'
					fontSize='40px'
				>
					Наш путь и ценности
				</Typography>
				<Grid container spacing={2} sx={{ pt: '80px' }}>
					<Grid item xs={6}>
						<Typography color='primary' variant='h4' fontSize='25px' pb='20px'>
							Lorem ipsum dolor sit amet consectetur
						</Typography>
						<Typography
							color='primary'
							variant='body1'
							fontSize='17px'
							pb='40px'
						>
							Lorem ipsum dolor sit amet consectetur. Auctor maecenas nunc in
							cras egestas diam lorem elementum. Mi massa sapien cras
							suspendisse turpis in scelerisque justo. Semper maecenas proin
							massa turpis. Eget dui a venenatis dolor sit. Dictum tellus
							interdum in hac sollicitudin. Ultrices quam egestas ac elementum
							in.
						</Typography>
						<img src={leftImg} alt='Left' style={{ width: '100%' }} />
					</Grid>
					<Grid item xs={6}>
						<img
							src={rightImg}
							alt='Right'
							style={{ width: '100%', paddingTop: '10px' }}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ pt: '80px', ml: '260px' }}>
					<Grid item xs={6}>
						<img
							src={r1}
							alt='Right'
							style={{ width: '100%', paddingTop: '10px' }}
						/>
					</Grid>
					<Grid item xs={6}>
						<Typography color='primary' variant='h4' fontSize='25px' pb='20px'>
							Lorem ipsum dolor sit amet consectetur
						</Typography>
						<Typography
							color='primary'
							variant='body1'
							fontSize='17px'
							pb='40px'
						>
							Lorem ipsum dolor sit amet consectetur. Auctor maecenas nunc in
							cras egestas diam lorem elementum. Mi massa sapien cras
							suspendisse turpis in scelerisque justo. Semper maecenas proin
							massa turpis. Eget dui a venenatis dolor sit. Dictum tellus
							interdum in hac sollicitudin. Ultrices quam egestas ac elementum
							in.
						</Typography>
						<img src={l1} alt='Left' style={{ width: '100%' }} />
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ pt: '80px' }}>
					<Grid item xs={6}>
						<Typography color='primary' variant='h4' fontSize='25px' pb='20px'>
							Lorem ipsum dolor sit amet consectetur
						</Typography>
						<Typography
							color='primary'
							variant='body1'
							fontSize='17px'
							pb='40px'
						>
							Lorem ipsum dolor sit amet consectetur. Auctor maecenas nunc in
							cras egestas diam lorem elementum. Mi massa sapien cras
							suspendisse turpis in scelerisque justo. Semper maecenas proin
							massa turpis. Eget dui a venenatis dolor sit. Dictum tellus
							interdum in hac sollicitudin. Ultrices quam egestas ac elementum
							in.
						</Typography>
						<img src={r2} alt='Left' style={{ width: '100%' }} />
					</Grid>
					<Grid item xs={6}>
						<img
							src={l2}
							alt='Right'
							style={{ width: '100%', paddingTop: '10px' }}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
