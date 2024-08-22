import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Stars } from '@mui/icons-material';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

const comments = Array.from({ length: 228 }, (_, index) => ({
  id: index + 1,
  name: 'Алексей Петров',
  rating: 4.8,
  date: '2024-08-22',
  text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse eu augue leo a venenatis ac pharetra. Habitasse ultrices enim vel id neque semper sed laoreet nunc. Mauris nec fermentum viverra rhoncus aliquet a proin risus. Vitae at id viverra gravida id in. Sapien consectetur in fringilla proin sed ipsum lacus mi.'
}));

const Reviews = () => {
  const [visibleComments, setVisibleComments] = useState(8);

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 8);
  };

  return (
    <Box>
      <Container maxWidth="xl" pt="80px">
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Stars />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  4.8
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  (224 оценок)
                </Typography>
              </Box>
            </Grid>
            <TransitionGroup component={null}>
              {comments.slice(0, visibleComments).map((comment, index) => (
                <CSSTransition key={comment.id} timeout={500} classNames="fade">
                  <React.Fragment>
                    {index % 2 === 0 && (
                      <>
                        <Grid item xs={12} sm={6} md={4} />
                        <Grid item xs={12} sm={6} md={4}>
                          <Box display="flex" alignItems="center">
                            <Stars />
                            <Typography variant="body2" sx={{ marginLeft: 1 }}>
                              {comment.rating}
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ marginTop: 1 }}>
                            {comment.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {comment.date}
                          </Typography>
                          <Typography variant="body2" sx={{ marginTop: 1 }}>
                            {comment.text}
                          </Typography>
                        </Grid>
                      </>
                    )}
                    {index % 2 === 1 && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box display="flex" alignItems="center">
                          <Stars />
                          <Typography variant="body2" sx={{ marginLeft: 1 }}>
                            {comment.rating}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                          {comment.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {comment.date}
                        </Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                          {comment.text}
                        </Typography>
                      </Grid>
                    )}
                  </React.Fragment>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Grid>
          {visibleComments < comments.length && (
            <Box textAlign="center" sx={{ marginTop: 2 }}>
              <Button variant="contained" onClick={loadMoreComments}>
                Прогрузить еще
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
