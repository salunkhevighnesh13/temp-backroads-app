import React from 'react';
import Title from "./Title";
import Service from "./Service"
import { services } from "../data"

const Services = () => {
  return (
    <section className="section services" id="services">
        <Title title='our' subtitle="services" />
        <div className="section-center services-center">
            {services.map(service=><Service {...service} key={service.id} />)}
        </div>
  </section>
  )
}

export default Services
