import { Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'

const ServWebsite = () => {

  const projects = [{
    title: "Vnergy",
    img: require("../assets/pages/service/website/website project 1.jpg"),
    description: "A Fully Responsive Website that we have design for Vnergy Company, was built in 2 months.",
  }, {
    title: "ITECO jsc",
    img: "",
    description: "A Fully Responsive Website that we have design for Vnergy Company, was built in 2 months.",
  }, {
    title: "ITECO jsc",
    img: "",
    description: "A Fully Responsive Website that we have design for Vnergy Company, was built in 2 months.",
  }, {
    title: "ITECO jsc",
    img: "",
    description: "A Fully Responsive Website that we have design for Vnergy Company, was built in 2 months.",
  }
  ]


  return (
    <div className='servwebpage'>
      <section className='servweb-section servweb-section-carousel'>
        <img alt='' src={require("../assets/pages/service/website/firstsectionwallp.jpg")} className='servweb-section-carousel-background'></img>
        <div className='servweb-section-carousel-container'>
          <div className='servweb-section-carousel-left'>
            <h3>Trusted By more than 10.000 users, businesses</h3>
            <p>Contact Us Now: (+84) 90 456 0264</p>
          </div>
          <div className='servweb-section-carousel-right'>
            <TextField
              label="Name"
              variant="outlined"
              className='servweb-section-carousel-right-name'
              margin='normal'
              sx={{ marginTop: "0px" }}
            />
            <TextField
              label="Email"
              variant="outlined"
              className='servweb-section-carousel-right-name'
              margin='normal'
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              className='servweb-section-carousel-right-descr'
              margin='normal'
            />
            <p>* Please fill all of the information</p>
            <button>Send</button>
          </div>
        </div>
      </section>
      <section className='servweb-section servweb-section-projects'>
        <h1 className=''>Some Of Our Projects</h1>
        <div className='servweb-section-projects-container'>
          {projects.map((project) => (
            <Card sx={{ maxWidth: 500, minWidth: 500, margin: "20px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.img}
                  alt="project-image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ height: "60px" }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}

        </div>
      </section>
      <section className='servweb-section servweb-section-reviews'>

      </section>

    </div>
  )
}

export default ServWebsite