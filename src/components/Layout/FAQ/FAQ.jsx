import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
	Container,
	Accordion as MuiAccordion,
	AccordionDetails as MuiAccordionDetails,
	AccordionSummary as MuiAccordionSummary,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const Accordion = styled(MuiAccordion)(({ theme }) => ({
	border: 'none',
	boxShadow: 'none',
	'&:not(:last-child)': { borderBottom: 'none' },
	'&::before': { display: 'none' },
}));

const AccordionSummary = styled(({ expanded, ...other }) => (
	<MuiAccordionSummary
		expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
		{...other}
	/>
))(({ theme, expanded }) => ({
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper': { order: -1 },
	'& .MuiAccordionSummary-content': { marginLeft: theme.spacing(1) },
	borderBottom: expanded ? 'none' : '1px solid rgba(49, 62, 58, 0.3)',
	paddingBottom: expanded ? '0' : '15px',
	paddingTop: expanded ? '0' : '15px',
	maxWidth: '800px',
	margin: '0 auto',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderBottom: '1px solid rgba(49, 62, 58, 0.3)',
	paddingBottom: '15px',
	paddingTop: '15px',
	maxWidth: '800px',
	margin: '0 auto',
}));

const FAQItem = ({ panel, title, content, expanded, handleChange }) => (
	<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
		<AccordionSummary
			aria-controls={`${panel}d-content`}
			id={`${panel}d-header`}
			expanded={expanded === panel}
		>
			<Typography sx={{ color: '#0C100F', fontSize: '25px', fontWeight: 500 }}>
				{title}
			</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<Typography
				sx={{
					fontSize: '17px',
					fontWeight: 400,
					color: '#313E3A',
				}}
			>
				{content}
			</Typography>
		</AccordionDetails>
	</Accordion>
);

export default function FAQ() {
	const [expanded, setExpanded] = useState('panel1');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const faqItems = [
		{
			panel: 'panel1',
			title: 'Какие форматы файлов вы предоставляете при покупке логотипа?',
			content:
				'Lorem ipsum dolor sit amet consectetur. Ut ornare commodo urna velit nisl mattis. Habitasse nullam etiam justo est viverra. In donec vivamus ac suspendisse. Fringilla scelerisque mi id tristique. Urna consequat volutpat gravida proin donec ipsum eget non.',
		},
		{
			panel: 'panel2',
			title: 'Как долго длится процесс создания и доставки логотипа?',
			content:
				'Lorem ipsum dolor sit amet consectetur. Ut ornare commodo urna velit nisl mattis. Habitasse nullam etiam justo est viverra. In donec vivamus ac suspendisse. Fringilla scelerisque mi id tristique. Urna consequat volutpat gravida proin donec ipsum eget non.',
		},
		{
			panel: 'panel3',
			title: 'Можно ли внести изменения в логотип после его получения?',
			content:
				'Lorem ipsum dolor sit amet consectetur. Ut ornare commodo urna velit nisl mattis. Habitasse nullam etiam justo est viverra. In donec vivamus ac suspendisse. Fringilla scelerisque mi id tristique. Urna consequat volutpat gravida proin donec ipsum eget non.',
		},
		{
			panel: 'panel4',
			title: 'Предоставляете ли вы уникальные и эксклюзивные дизайны?',
			content:
				'Lorem ipsum dolor sit amet consectetur. Ut ornare commodo urna velit nisl mattis. Habitasse nullam etiam justo est viverra. In donec vivamus ac suspendisse. Fringilla scelerisque mi id tristique. Urna consequat volutpat gravida proin donec ipsum eget non.',
		},
		{
			panel: 'panel5',
			title: 'Какие способы оплаты вы принимаете?',
			content:
				'Lorem ipsum dolor sit amet consectetur. Ut ornare commodo urna velit nisl mattis. Habitasse nullam etiam justo est viverra. In donec vivamus ac suspendisse. Fringilla scelerisque mi id tristique. Urna consequat volutpat gravida proin donec ipsum eget non.',
		},
	];

	return (
		<Container maxWidth='xl'>
			<Typography
				variant='h3'
				sx={{
					padding: '80px 0',
					fontSize: '40px',
					textAlign: 'center',
					fontWeight: 600,
				}}
			>
				Часто задаваемые вопросы
			</Typography>
			{faqItems.map(({ panel, title, content }) => (
				<FAQItem
					key={panel}
					panel={panel}
					title={title}
					content={content}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Container>
	);
}
