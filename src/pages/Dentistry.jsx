import React, { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import background from "../img/backgroundd.jpg";
import { Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
const EducationSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const videos = [
      { title: 'How to Brush Your Teeth Correctly', description: 'A step-by-step guide on brushing.', link: '/video1', image: background },
      { title: 'Preventing Gum Disease', description: 'Learn how to avoid gum disease with proper care.', link: '/video2', image: background },
      { title: 'The Importance of Regular Checkups', description: 'Why regular checkups are crucial.', link: '/video3', image: background },
    ];
  
    const blogs = [
      { title: 'Why Regular Dental Visits Matter', description: 'The importance of maintaining oral health.', link: '/blog1', image: background },
      { title: 'How Diet Affects Your Oral Health', description: 'Understanding the impact of food on your teeth.', link: '/blog2', image: background },
      { title: 'Top 10 Tips for a Healthy Smile', description: 'Practical tips to improve your smile.', link: '/blog3', image: background },
    ];

    // Sort function based on how much the search query matches the content
    const sortByRelevance = (contentArray, query) => {
      return contentArray
        .map(item => {
          let score = 0;
          if (item.title.toLowerCase().includes(query.toLowerCase())) score += 2;
          if (item.description.toLowerCase().includes(query.toLowerCase())) score += 1;
          return { ...item, score };
        })
        .sort((a, b) => b.score - a.score); 
    };

    const filteredVideos = sortByRelevance(videos, searchQuery);
    const filteredBlogs = sortByRelevance(blogs, searchQuery);
  
    return (
      <section id="education" style={{ backgroundColor: "#f9fafb" }}>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 3 }}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          <Grid container spacing={4} justifyContent="center">
            {/* Educational Videos */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ color: "#374151" }}>
                Educational Videos
              </Typography>
              <Grid container spacing={2}>
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "325px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={video.image}
                          alt={video.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" noWrap>
                            {video.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {video.description}
                          </Typography>
                        </CardContent>

                        <Button
                          size="small"
                          color="primary"
                          href={video.link}
                          sx={{
                            marginTop: "auto",
                            marginBottom: "10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "1px solid #1976d2",
                            borderRadius: "4px",
                            padding: "6px 12px",
                            backgroundColor: "transparent",
                            color: "#1976d2",
                            ":hover": {
                              borderColor: "#1565c0",
                              backgroundColor: "#1976d2",
                              color: "white",
                            },
                          }}
                        >
                          Read More
                        </Button>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography>No results found for the videos.</Typography>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: "#374151" }}>
                Blogs
              </Typography>
              <Grid container spacing={2}>
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "325px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={blog.image}
                          alt={blog.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" noWrap>
                            {blog.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {blog.description}
                          </Typography>
                        </CardContent>
                        <Button
                          size="small"
                          color="primary"
                          href={blog.link}
                          sx={{
                            marginTop: "auto", // Ensures the button stays at the bottom of the card
                            marginBottom: "10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            border: "1px solid #1976d2", // Example border color (primary color)
                            borderRadius: "4px", // Optional: Rounded corners for the border
                            padding: "6px 12px", // Optional: Adjust padding for a better look
                            backgroundColor: "transparent", // Initial background color (transparent)
                            color: "#1976d2", // Text color to match the border
                            ":hover": {
                              borderColor: "#1565c0", // Darker border color on hover
                              backgroundColor: "#1976d2", // Change background color on hover
                              color: "white", // Change text color on hover
                            },
                          }}
                        >
                          Read More
                        </Button>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography>No results found for the blogs.</Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>
    );
  };
  
export const Dentistry = () => {
  return (
    <div>
      <Navbar />
      <EducationSection />
      <Footer />
    </div>
  );
}
