import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from './ImageGallery';




const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // showIndex: false,
      // showBullets: true,
      // infinite: true,
      // showThumbnails: true,
      // showFullscreenButton: true,
      // showGalleryFullscreenButton: true,
      // showPlayButton: true,
      // showGalleryPlayButton: true,
      // showNav: true,
      // isRTL: false,
      // slideDuration: 450,
      // slideInterval: 2000,
      // slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      // showVideo: {},
      // useWindowKeyDown: true,
    };

    this.images = [
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: '',
      },
    ].concat(this._getStaticImages());
    
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    // console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    // console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    // if (event.target.value > 0) {
    //   this.setState({[state]: event.target.value});
    // }
  }

  _handleCheckboxChange(state, event) {
    // this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    // this.setState({thumbnailPosition: 'bottom'});
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}t.jpg`
      });
    }

    return images;
  }

  _resetVideo() {
    // this.setState({showVideo: {}});

    

    
  }

  _toggleShowVideo(url) {
    // this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    // this.setState({
    //   showVideo: this.state.showVideo
    // });
    }
  

  _renderVideo(item) {
    return (
      <div>
        {
          // this.state.showVideo[item.embedUrl] ?
          //   <div className='video-wrapper'>
          //       <a
          //         className='close-video'
          //         onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
          //       >
          //       </a>
          //       <iframe
          //         width='560'
          //         height='315'
          //         src={item.embedUrl}
          //         frameBorder='0'
          //         allowFullScreen
          //       >
          //       </iframe>
          //   </div>
          // :
          //   <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
          //     <div className='play-button'></div>
          //     <img className='image-gallery-image' src={item.original} />
          //     {
          //       item.description &&
          //         <span
          //           className='image-gallery-description'
          //           style={{right: '0', left: 'initial'}}
          //         >
          //           {item.description}
          //         </span>
          //     }
          //   </a>
        }
      </div>
    );
  }

  render() {
    return (

      <section className='app'>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={this.images}

          // onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          // onPlay={this._onPlay.bind(this)}
          infinite={false}
          showBullets={true}
          // showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          // showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={true}
          // showIndex={this.state.showIndex}
          showNav={true}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          isRTL={false}
          thumbnailPosition={this.state.thumbnailPosition}
          // slideDuration={parseInt(this.state.slideDuration)}
          // slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={false}
          additionalClass="app-image-gallery"
          // useWindowKeyDown={this.state.useWindowKeyDown}
        />

        {/* <div className='app-sandbox'>

          <div className='app-sandbox-content'>
            

            {/* <ul className='app-buttons'>
              

              

              <li>
                <div className='app-interval-input-group'>
                  <span className='app-interval-label'>Thumbnail Bar Position</span>
                  <select
                    className='app-interval-input'
                    // value={this.state.thumbnailPosition}
                    value='bottom'
                    onChange={this._handleThumbnailPositionChange.bind(this)}
                  >
                    <option value='bottom'>Bottom</option>
                    <option value='top'>Top</option>
                    <option value='left'>Left</option>
                    <option value='right'>Right</option>
                  </select>
                </div>
              </li>
            </ul>

            {/* <ul className='app-checkboxes'>
              <li>
                <input
                  id='infinite'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'infinite')}
                  checked={this.state.infinite}/>
                  <label htmlFor='infinite'>allow infinite sliding</label>
              </li>
              
              {/* <li>
                <input
                  id='use_window_keydown'
                  type='checkbox'
                  onChange={this._handleCheckboxChange.bind(this, 'useWindowKeyDown')}
                  checked={this.state.useWindowKeyDown}/>
                  <label htmlFor='use_window_keydown'>use window keydown</label>
              </li>
            </ul>
          </div>

        </div> */}
      </section>
    );
  }
}

export default App;