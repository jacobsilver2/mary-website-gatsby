import React, { Component } from 'react'
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import fetch from 'isomorphic-unfetch';
import Config from '../config';

export default class Slider extends Component {
  state = {
    slides: [],
  }
  
  async componentDidMount() {
    const slidesResults = await fetch(`${Config.apiUrl}/wp/v2/slide?_embed`);
    const slides = await slidesResults.json();
    this.setState({
      slides
    })
  }

  render() {
    const { slides } = this.state;
    return (
      <Carousel>
        {slides.map(slide => (
          <Link 
            href={slide.acf.link}
          >
            <a>
              <img 
                src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} 
                alt={slide.title.rendered} 
                key={slide.id} 
              /> 
            </a>
          </Link>
        ))} 
      </Carousel>
    )
  }
}
