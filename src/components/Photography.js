import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import Header from './Header';
import Contact from './Contact';

import '../styles/photos.css';


export default class Photography extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    let title = this.props.match.path === '/photos'
      ? 'PHOTOGRAPHY'
      : ''

    return(
      <section className='photography'>
        <Header 
          title={title} />

        <header className='photo-header'>
          <p className='why-photography'>
            Photography is something I’ve enjoyed since I was in high school.  I’ve tried my hand at various genre’s including portraits & weddings, but my favorite is a mix of travel & documentary. <br />
            My photos are taken with my iPhone or Canon 60D. </p>
            <br />
          <p className='why-photography'>
            Peruse at your pleasure.</p>
        </header>

        <section className='gallery'>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
          </section>

        <Contact />
      </section>
    )
  }
}

const photos = [
  { src: 'https://drive.google.com/uc?export=view&id=1_rjFZJaKtOygHPCTRDGVbEj10ZJf-pnc', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1nJ_tpgJXiZmwktePVBZrxsH-xZmdnmH7', width: 4, height: 3 },
  { src: 'https://drive.google.com/uc?export=view&id=1mBCXFMdDofzqG4KYYbSn8imN1euegqGg', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=18177VwChEFDh5si4BMMTvLlCIySsOh7w', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1jk_MzhVrn695ksAgV3MmL9pvnsS4suwe', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1vJr8bdlqFkwLNAs_BPErsxAb1zFe3RVk', width: 4, height: 3 },
  { src: 'https://drive.google.com/uc?export=view&id=1P7pNlsDGkVD4BkFUABPjTzDMHHgOZp3U', width: 3, height: 2 },
  { src: 'https://drive.google.com/uc?export=view&id=1VlhfC0o3bPhvT8I9zVE38lvGAV615QBr', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1_vcS2kF3wCJd9_4rsJ9BTUvBdcAk1vL0', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=17C9OM-eXG3JZ2f_1pSipWkBWhAARGSxP', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=187eIIGrT9fjES1ARWoM9aRaESzLgbRjQ', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1NdH3gn_E7Qha_Du5dzK5QtEsfRh0AwiS', width: 3, height: 2 }
];

/*
Resources:
 - http://neptunian.github.io/react-photo-gallery/
 - https://github.com/jossmac/react-images
 - https://gist.github.com/evansims/f23e2f49e3d4be793038
*/