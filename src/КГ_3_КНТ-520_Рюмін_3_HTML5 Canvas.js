(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.мячь = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("AI6AAQAADViJCeQgOAQgQAQQinCnjsAAQjrAAininQgQgQgOgQQiJieAAjVQAAjrCninQCninDrAAQDsAACnCnQCnCnAADrg");
	this.shape.setTransform(57,57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("ACeD2QgZgCgUgXQgMgNgPggIglhSQgjhQgYg7QgLAEgEAQQgDAJAAASQgBAagGAgQgEASgKAmQgIAegHAQQgKAZgOAQQgQAUgXAIQgZAIgVgJQgOgGgMgOQgHgIgMgTQghg0gOgbQgQgfgRguQglhcgOgyQgNgzAGgbQAEgaARgNQASgPAaAHQAaAHAKAWQAFAKADAPIADAbQAFAnAWA3IAlBbIAJAYQAGANAJAGQAPgSADgkIAEg7QADgNAIgTIANggIANgtQAIgcAIgQQALgWATgOQAWgOAVADQAZAFARAaQALAPAMAiQAwB8A8ByQAIgvAKgWQAFgLARgcQAPgYAGgQIAMg+QAHglASgSQAMgLAPgEQAQgEAPAEQAQAFAKANQALANABAQQAAALgEAOIgIAYQgDAKgHAhQgGAbgHAQQgEALgOAWQgMAWgFANQgEAKgFASIgHAcQgFAMgJASIgPAdIgOAdQgJARgIALQgXAegfAAIgBAAg");
	this.shape_1.setTransform(59.321,49.0914);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993399").s().p("AmSGTQgQgQgOgRQiJidAAjVQAAjrCninQCninDrAAQDsAACnCnQCnCnAADrQAADViJCdIgeAhQinCnjsAAQjrAAiningABIAOIAlBTQAPAgANANQATAXAaABQAeABAYgeQAIgLAJgRIAOgdIAPgeQAKgRAEgNIAIgbQAEgRAEgKQAFgOAMgVQAOgXAEgMQAHgPAGgbQAHghADgKIAJgZQADgNAAgMQgBgPgLgNQgKgNgQgFQgOgFgQAFQgQAEgLALQgTASgGAlIgNA+QgFAPgQAZQgQAcgGAMQgJAWgIAvQg9h0gvh7QgMgigMgQQgRgZgagFQgUgEgVAPQgUAOgLAWQgIAQgHAcIgOAtIgNAfQgIAUgDANIgEA8QgDAkgPASQgJgGgGgNIgJgYIglhcQgWg4gFgnIgDgaQgDgPgFgLQgKgVgagIQgagGgSAOQgQAOgFAZQgFAcANAyQAOAzAkBdQARAtAQAfQAOAbAhA0QAMASAHAJQANAOANAGQAVAJAZgIQAXgIARgUQANgQAKgZQAHgQAIgeQALgmADgRQAGghABgZQABgTACgKQADgPALgEQAZA8AjBOg");
	this.shape_2.setTransform(57,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.мячь, new cjs.Rectangle(-1,-1,116,116), null);


// stage content:
(lib.КГ_3_КНТ520_Рюмін_3_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// мячь
	this.instance = new lib.мячь();
	this.instance.setTransform(2.05,110.05,1,1,0,0,0,57,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.1285,x:27.65,y:103.95},0).wait(1).to({rotation:12.7036,x:66.4,y:105.65},0).wait(1).to({rotation:22.9862,x:114.7,y:128.15},0).wait(1).to({rotation:36.1369,x:155.45,y:181.25},0).wait(1).to({rotation:52.0823,x:182.5,y:259.05},0).wait(1).to({rotation:70.3478,x:199.1,y:351.5},0).wait(1).to({rotation:89.9603,x:213.35,y:453.1},0).wait(1).to({rotation:109.5756,x:236.8,y:551.9},0).wait(1).to({rotation:127.8488,x:259.85,y:643.65},0).wait(1).to({rotation:143.8047,x:299.7,y:711},0).wait(1).to({rotation:156.9669,x:365.15,y:698.35},0).wait(1).to({rotation:167.2608,x:406.1,y:664.05},0).wait(1).to({rotation:174.8463,x:429.9,y:632.8},0).wait(1).to({rotation:179.984,x:447.55,y:612.8},0).wait(1).to({rotation:184.0504,x:463.3,y:598.95},0).wait(1).to({rotation:188.2683,x:484,y:590.95},0).wait(1).to({rotation:192.669,x:505.75,y:586.45},0).wait(1).to({rotation:197.2867,x:530.1,y:583.95},0).wait(1).to({rotation:202.1423,x:553.35,y:594.4},0).wait(1).to({rotation:207.1873,x:569.3,y:615.1},0).wait(1).to({rotation:212.1946,x:582.35,y:637.6},0).wait(1).to({rotation:216.7836,x:590.8,y:659.9},0).wait(1).to({rotation:220.7487,x:598.75,y:678.95},0).wait(1).to({rotation:224.1672,x:607.6,y:694.35},0).wait(1).to({rotation:227.1957,x:617.95,y:704.95},0).wait(1).to({rotation:229.9575,x:630,y:697.7},0).wait(1).to({rotation:232.5341,x:641.35,y:690.55},0).wait(1).to({rotation:234.978,x:650.25,y:681.5},0).wait(1).to({rotation:237.3238,x:658.95,y:673.05},0).wait(1).to({rotation:239.5988,x:667.6,y:665},0).wait(1).to({rotation:241.9665,x:675.8,y:655.8},0).wait(1).to({rotation:244.5184,x:684.45,y:645.7},0).wait(1).to({rotation:247.2707,x:694.15,y:635.35},0).wait(1).to({rotation:250.2329,x:706.7,y:626.45},0).wait(1).to({rotation:253.4003,x:720.85,y:618.55},0).wait(1).to({rotation:256.7417,x:736.45,y:612.2},0).wait(1).to({rotation:260.1889,x:754.85,y:610.05},0).wait(1).to({rotation:263.6357,x:772.6,y:607.35},0).wait(1).to({rotation:266.9589,x:786.05,y:614.8},0).wait(1).to({rotation:270.0525,x:794.35,y:628.3},0).wait(1).to({rotation:272.853,x:802.25,y:640.6},0).wait(1).to({rotation:275.3425,x:809.85,y:651},0).wait(1).to({rotation:277.5339,x:816.8,y:659.95},0).wait(1).to({rotation:279.4561,x:822.15,y:668.2},0).wait(1).to({rotation:281.1423,x:827.25,y:675.25},0).wait(1).to({rotation:282.6245,x:831.75,y:681.6},0).wait(1).to({rotation:283.931,x:836,y:686.95},0).wait(1).to({rotation:285.0864,x:840.05,y:691.4},0).wait(1).to({rotation:286.1111,x:843.35,y:695.6},0).wait(1).to({rotation:287.0223,x:847.15,y:698.4},0).wait(1).to({rotation:287.8342,x:851.25,y:699},0).wait(1).to({rotation:288.648,x:855.35,y:699.9},0).wait(1).to({rotation:289.6555,x:860.65},0).wait(1).to({rotation:290.844,x:866.45,y:698.1},0).wait(1).to({rotation:292.1937,x:871.85,y:693.55},0).wait(1).to({rotation:293.6853,x:877.45,y:688.25},0).wait(1).to({rotation:295.3,x:884.1,y:683.05},0).wait(1).to({rotation:297.0189,x:891.3,y:677.75},0).wait(1).to({rotation:298.8233,x:898.55,y:671.9},0).wait(1).to({rotation:300.6939,x:905.35,y:664.95},0).wait(1).to({rotation:302.6111,x:912.55,y:658},0).wait(1).to({rotation:304.5545,x:918.85,y:650.05},0).wait(1).to({rotation:306.5025,x:925.3,y:642.75},0).wait(1).to({rotation:308.4321,x:933.05,y:636.35},0).wait(1).to({rotation:310.3183,x:941,y:630.5},0).wait(1).to({rotation:312.134,x:949.35,y:627.15},0).wait(1).to({rotation:313.8486,x:958.35,y:627},0).wait(1).to({rotation:315.4278,x:965.95,y:628.35},0).wait(1).to({rotation:316.8321,x:972.5,y:631.45},0).wait(1).to({rotation:318.2819,x:978.75,y:635.8},0).wait(1).to({rotation:320.0655,x:986.2,y:641.25},0).wait(1).to({rotation:322.2173,x:994.45,y:648.7},0).wait(1).to({rotation:324.7525,x:1003.6,y:658.15},0).wait(1).to({rotation:327.6442,x:1014.2,y:668.8},0).wait(1).to({rotation:330.7961,x:1025.5,y:680.75},0).wait(1).to({rotation:334.0369,x:1037.75,y:692.35},0).wait(1).to({rotation:337.1584,x:1050.65,y:702},0).wait(1).to({rotation:339.9848,x:1063.5,y:698.25},0).wait(1).to({rotation:342.4169,x:1071.15,y:688.2},0).wait(1).to({rotation:344.3805,x:1076.55,y:679.5},0).wait(1).to({rotation:345.8708,x:1081.15,y:673.35},0).wait(1).to({rotation:347.323,x:1086.5,y:668.05},0).wait(1).to({rotation:348.7713,x:1092.15,y:663.25},0).wait(1).to({rotation:350.2252,x:1098.4,y:658.95},0).wait(1).to({rotation:351.6916,x:1105.35,y:655.5},0).wait(1).to({rotation:353.1773,x:1112.8,y:653.75},0).wait(1).to({rotation:354.6926,x:1120.4,y:651.75},0).wait(1).to({rotation:356.2559,x:1128,y:648.8},0).wait(1).to({rotation:357.9131,x:1136.2,y:646.1},0).wait(1).to({rotation:360,x:1145.35,y:641.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(584.6,406,618.3000000000001,363);
// library properties:
lib.properties = {
	id: '2C3155B1CC4DEF4E862FEE622DC897EE',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C3155B1CC4DEF4E862FEE622DC897EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;