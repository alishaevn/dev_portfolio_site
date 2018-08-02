import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import Header from './Header';
import Contact from './Contact';

import '../styles/css/photos.css';


export default class Photography extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
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
            Photography is something I’ve enjoyed since I was in high school.  I’ve tried my hand at various genres including portraits & weddings, but my favorite is a mix of travel & documentary. <br />
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
  { src: 'https://drive.google.com/uc?export=view&id=1x3VrOcrZUTMMf_oJBiz_84r_y2p6MdKH', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1ERflNG0_w47Fegl9prhLYlihfbwAPdkd', width: 4, height: 3 },
  { src: 'https://drive.google.com/uc?export=view&id=19-loyC2WNwf8amf6JJAoL04ZzjLA4rB0', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1squxP900G4fUc7JwokJJYPrCxmzISQXh', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1X7D4ZkVfs7kufT4j56FtNJJ7uFdjZEfg', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1jfwLpoLAYNDPvih-8XpoURaaY9nE77pR', width: 4, height: 3 },
  { src: 'https://drive.google.com/uc?export=view&id=1yII8VKBKMZhfk_ZBYxJNlLzrL-wHBOKJ', width: 3, height: 2 },
  { src: 'https://drive.google.com/uc?export=view&id=1hO5nLvaHQQW0Jj_W4vTr7U38fHz3NRPL', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1J989TIbj4M7ikvw_yKTzoWqznk0vYrWT', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1k7xj8ilH1YqmpUhuJApLHwG8YD4fUwQr', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1857drIa4LkuZcmDrZA552N4QeuRvizl2', width: 3, height: 4 },
  { src: 'https://drive.google.com/uc?export=view&id=1TBQ7o0iu0eTHvu7pe3qO_kPKkfhsFcZh', width: 3, height: 2 }
];

/*
Resources:
 - http://neptunian.github.io/react-photo-gallery/
 - https://github.com/jossmac/react-images
 - https://gist.github.com/evansims/f23e2f49e3d4be793038
*/