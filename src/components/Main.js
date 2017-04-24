require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 利用函数将图片名信息转成图片URL路径信息
import imageDatas from  'json-loader!../data/imageDatas.json';

function getImageURL(imageDataArr){
	for (var i=0, j=imageDataArr.length; i<j; i++){
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/'+singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
};
let imageUrlDatas = getImageURL(imageDatas);


class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		)
	}
}

class AppComponent extends React.Component {
	Constant: {
		centerPos: {
			left: 0,
			right: 0;
		},
		hPosRange: {  //水平方向的取值范围
			leftSecX: [0,0],
			rigthSecx: [0,0],
			y: [0,0]
		},
		vPosRange: {  //垂直方向的取值范围
			x: [0,0],
			topY: [0,0]
		}
	}
	//组件加载以后，为每张图片计算其位置的范围
	componentDidMount () {

		//首先拿到舞台的大小
		var stageDOM = React.findDOMNode(this.refs.stage),
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollHeight,
			halfStageW = Math.ceil(stageW / 2),
			halfStageH = Math.ceil(stageH / 2);
		//拿到一个imageFigure的大小
		var imgFigureDOM = React.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight
	}

	render() {
	  	var controllerUnits = [];
	  	var imgFigures = [];

		console.log(imageUrlDatas);
		
	  	for(var i=0; i< imageDatas.length;i++){
	  		(function(i){
	  			imgFigures.push(<ImgFigure data={imageDatas[i]} key={i} ref={'imgFigure' + i}/>);
	  		})(i)
	  	}
	    return (
	      	<section className="stage" ref="stage">
	      		<section className="img-sec">
	      			{imgFigures}
	      		</section>
	      		<nav className="controller-nav">
	      			{controllerUnits}
	      		</nav>
	      	</section>
	    );
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
