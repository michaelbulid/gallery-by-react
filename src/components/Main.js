require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 利用函数将图片名信息转成图片URL路径信息
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageURL(imageDataArr){
	for (var i=0, j=imageDataArr.length; i<j; i++){
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images'+singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      	<section className="stage">
      		<section className="img-sec">
      		</section>
      		<nav className="controller-nav">
      		</nav>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
