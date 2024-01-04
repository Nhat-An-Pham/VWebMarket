import { Card, CardActionArea, CardContent, CardMedia, TextField, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import Reviews from '../component/reviews/Reviews'

const ServWebsite = () => {

  const projects = [{
    title: "Bird Training Center",
    img: require("../assets/pages/service/website/BirdtrainingProject.png"),
    description: "Bird Training Center is a website that provides online learning, consulting, and bird training services. Besides, there is also a user management system, finance and functions on the website.",
  }, {
    title: "Vnergy",
    img: require("../assets/pages/service/website/website project 1.jpg"),
    description: "In this project of ours with Vnergy, we provided a landing page website for the business. Besides, there is also a system to manage all articles and layout of the page",

  }, {
    title: "ITECO jsc",
    img: require("../assets/pages/service/website/ITECO Project.png"),
    description: "Iteco's website is a pure Wordpress website, this proves that we also specialize in wordpress",
  }, {
    title: "ITECO jsc",
    img: "",
    description: "A Fully Responsive Website that we have design for Vnergy Company, was built in 2 months.",
  }
  ];

  const serviceList = [{
    name: "Website",
  }, {
    name: "Mobile",
  }, {
    name: "Design",
  }];


  const [errMessage, setErrMessage] = useState("")
  const [selectedService, setSelectedService] = useState("");

  const contactForm = {
    name: null,
    email: null,
    service: null,
    description: null,
  }

  const handleServiceSelect = (event) => {
    setSelectedService(event.target.value);
  }

  const handleSubmit = () => {
    if (contactForm.name === null || contactForm.email === null || contactForm.description === null || contactForm.service === null) {
      setErrMessage("* Please fill all of the information")
    } else {

    }
  }

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
              size='small'
            />
            <TextField
              label="Email"
              variant="outlined"
              className='servweb-section-carousel-right-name'
              margin='normal'
              sx={{ marginTop: "0px" }}
              size='small'
            />
            <div>
              <InputLabel id="services">Services</InputLabel>
              <Select
                labelId="services"
                id="services"
                value={selectedService}
                label="Services"
                onChange={handleServiceSelect}
                size='small'
              >
                {serviceList.map((service) => (
                  <MenuItem value={service.name}>{service.name}</MenuItem>
                ))}
              </Select>
            </div>
            <TextField
              label="Description"
              multiline
              rows={4}
              className='servweb-section-carousel-right-descr'
              margin='normal'
            />
            {errMessage ?
              <p style={{ color: "red" }}>{errMessage}</p>
              : null}
            <button onClick={() => handleSubmit()}>Send</button>
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
                  height="250"
                  sx={{ objectFit: "fill" }}
                  image={project.img}
                  alt="project-image"
                />
                <CardContent>
                  <h5
                  // gutterBottom variant="h5" component="div"
                  >
                    {project.title}
                  </h5>
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
        <Reviews />
      </section>

    </div>
  )
}

export default ServWebsite