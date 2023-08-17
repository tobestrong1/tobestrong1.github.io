/*
 * 软件名称：ckplayer
 * 版本:X3
 * 版权：www.ckplayer.com
 * 开源协议：MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ckplayer = factory());
}(this, function () { 'use strict';
	/*
	 * language
	 * 功能：静态变量,包含播放器用到的默认语言包
	 * 引入其它语言js后该变量将被替换成新引入的语言包
	 */
	var language={
		play:'%E6%92%AD%E6%94%BE',
		pause:'%E6%9A%82%E5%81%9C',
		refresh:'%E9%87%8D%E6%92%AD',
		full:'%E5%85%A8%E5%B1%8F',
		exitFull:'%E9%80%80%E5%87%BA%E5%85%A8%E5%B1%8F',
		webFull:'%E9%A1%B5%E9%9D%A2%E5%85%A8%E5%B1%8F',
		exitWebFull:'%E9%80%80%E5%87%BA%E9%A1%B5%E9%9D%A2%E5%85%A8%E5%B1%8F',
		theatre:'%E5%89%A7%E5%9C%BA%E6%A8%A1%E5%BC%8F',
		exitTheatre:'%E9%80%80%E5%87%BA%E5%89%A7%E5%9C%BA%E6%A8%A1%E5%BC%8F',
		volume:'%E9%9F%B3%E9%87%8F%EF%BC%9A',
		muted:'%E9%9D%99%E9%9F%B3',
		exitmuted:'%E6%81%A2%E5%A4%8D%E9%9F%B3%E9%87%8F',
		seek:'seek%EF%BC%9A',
		waiting:'%E7%BC%93%E5%86%B2',
		live:'%E7%9B%B4%E6%92%AD%E4%B8%AD',
		backLive:'%E8%BF%94%E5%9B%9E%E7%9B%B4%E6%92%AD',
		lookBack:'%E5%9B%9E%E7%9C%8B%EF%BC%9A',
		next:'%E4%B8%8B%E4%B8%80%E9%9B%86',
		screenshot:'%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE',
		smallwindows:'%E5%B0%8F%E7%AA%97%E5%8F%A3%E6%92%AD%E6%94%BE%E5%8A%9F%E8%83%BD',
		playbackrate:'%E5%80%8D%E9%80%9F',
		playbackrateSuffix:'%E5%80%8D',
		track:'%E5%AD%97%E5%B9%95',
		noTrack:'%E6%97%A0%E5%AD%97%E5%B9%95',
		definition:'%E6%B8%85%E6%99%B0%E5%BA%A6',
		switchTo:'%E5%88%87%E6%8D%A2%E6%88%90%EF%BC%9A',
		closeTime:'%7Bseconds%7D%E7%A7%92%E5%90%8E%E5%8F%AF%E5%85%B3%E9%97%AD%E5%B9%BF%E5%91%8A',
		closeAd:'%E5%85%B3%E9%97%AD%E5%B9%BF%E5%91%8A',
		second:'%E7%A7%92',
		details:'%E6%9F%A5%E7%9C%8B%E8%AF%A6%E6%83%85',
		copy:'%E5%A4%8D%E5%88%B6',
		copySucceeded:'%E5%A4%8D%E5%88%B6%E6%88%90%E5%8A%9F%EF%BC%8C%E5%8F%AF%E8%B4%B4%E7%B2%98%EF%BC%81',
		smallwindowsOpen:'%E5%B0%8F%E7%AA%97%E5%8F%A3%E5%8A%9F%E8%83%BD%E5%B7%B2%E5%BC%80%E5%90%AF',
		smallwindowsClose:'%E5%B0%8F%E7%AA%97%E5%8F%A3%E5%8A%9F%E8%83%BD%E5%B7%B2%E5%85%B3%E9%97%AD',
		screenshotStart:'%E6%88%AA%E5%9B%BE%E4%B8%AD%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%80%99...',
		screenshotClose:'%E6%88%AA%E5%9B%BE%E5%8A%9F%E8%83%BD%E5%B7%B2%E5%85%B3%E9%97%AD',
		loopOpen:'%E5%BE%AA%E7%8E%AF%E6%92%AD%E6%94%BE',
		loopClose:'%E5%B7%B2%E5%85%B3%E9%97%AD%E5%BE%AA%E7%8E%AF%E6%92%AD%E6%94%BE',
		close:'%E5%85%B3%E9%97%AD',
		down:'%E4%B8%8B%E8%BD%BD',
		p50:'50%25',
		p75:'75%25',
		p100:'100%25',
		timeScheduleAdjust:{
			prohibit:'%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E6%8B%96%E5%8A%A8',
			prohibitBackOff:'%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E9%87%8D%E5%A4%8D%E8%A7%82%E7%9C%8B',
			prohibitForward:'%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E5%BF%AB%E8%BF%9B',
			prohibitLookBack:'%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E6%92%AD%E6%94%BE%E9%83%A8%E5%88%86%E5%86%85%E5%AE%B9',
			prohibitForwardNotViewed:'%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E6%92%AD%E6%94%BE%E6%9C%AA%E8%A7%82%E7%9C%8B%E7%9A%84%E9%83%A8%E5%88%86'
		},
		error:{
			noMessage:'%E6%9C%AA%E7%9F%A5%E9%94%99%E8%AF%AF',
			supportVideoError:'%E8%AF%A5%E6%B5%8F%E8%A7%88%E5%99%A8%E7%89%88%E6%9C%AC%E5%A4%AA%E4%BD%8E%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%9B%B4%E6%8D%A2%E6%88%90%E5%85%B6%E5%AE%83%E6%B5%8F%E8%A7%88%E5%99%A8',
			videoTypeError:'%E8%AF%A5%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E6%92%AD%E6%94%BE%E8%AF%A5%E8%A7%86%E9%A2%91%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%9B%B4%E6%8D%A2%E6%88%90%E5%85%B6%E5%AE%83%E6%B5%8F%E8%A7%88%E5%99%A8',
			loadingFailed:'%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5',
			emptied:'%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF',
			screenshot:'%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE%E5%A4%B1%E8%B4%A5',
			ajax:'Ajax%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82%E9%94%99%E8%AF%AF',
			noVideoContainer:'%E6%9C%AA%E6%89%BE%E5%88%B0%E6%94%BE%E7%BD%AE%E8%A7%86%E9%A2%91%E7%9A%84%E5%AE%B9%E5%99%A8'
		}
	};
	/*
	 * videoObjectDefault
	 * 功能：静态变量,默认播放配置，当外部传递过来的配置有未包含在varsDefault里的，则使用varsDefault里的配置
	 */
	var videoObjectDefault= {
		container: '',//视频容器的ID
		volume: 0.8,//默认音量，范围0-1
		poster: '',//封面图片地址
		autoplay: false,//是否自动播放
		loop: false,//是否需要循环播放
		live: false,//是否是直播
		rotate:0,//视频旋转角度
		zoom:0,//默认缩放比例
		ad:null,//广告
		backLive:false,//显示返回直播按钮
		seek: 0,//默认需要跳转的秒数
		next: null,//下一集按钮动作
		loaded: '',//加载播放器后调用的函数
		plug: '',//使用插件
		duration:0,//视频总时间
		preview: null,//预览图片对象
		prompt: null,//提示点功能
		crossOrigin:'',//跨域请求字符
		video: null,//视频地址
		type:'',//视频类型
		playbackrate: 1,//默认倍速
		ended:null,//结束显示的内容
		webFull:false,//页面全屏按钮事件
		theatre:null,//剧场模式
		controls:false,//是否显示自带控制栏
		rightBar:null,//是否开启右边控制栏
		smallWindows:null,//是否启用小窗口模式
		smallWindowsDrag:true,//当处于小窗口模式时是否可拖动播放器
		screenshot:false,//截图功能是否开启
		timeScheduleAdjust:1,//是否可调节播放进度,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
		logo:'',//logo
		menu:null,//右键菜单
		information:{//关于
			'Load:':'{loadTime} second',
			'Duration:':'{duration} second',
			'Size:':'{videoWidth}x{videoHeight}',
			'Volume:':'{volume}%',
			'Fps:':'{fps}fps',
			'Sudio decoded:':'{audioDecodedByteCount} Byte',
			'Video decoded:':'{videoDecodedByteCount} Byte'
		},
		track:null,//字幕
		title:'',//视频标题
		language:'',//语言包文件
		barHideTime:1500,//控制栏隐藏时间
		playbackrateOpen:true,//是否开启控制栏倍速选项
		playbackrateList:[0.75,1,1.25,1.5,2,4],//倍速配置值
		cookie:null,//开启cookie功能
		domain:null,//指定cookie保存的域
		cookiePath:'/',//指定cookie保存路径
		documentFocusPause:false,//窗口失去焦点后暂停播放
		mouseWheelVolume:2,//是否启用鼠标滚轮调节音量功能，0=不启用，1=启用，2=全屏时才启用
		keyVolume:2,//是否启用键盘控制音量调节，0=不启用，1=启用，2=全屏时才启用
		errorShow:true//是否显示错误信息
	};
	function ckplayerEmbed(videoObj){
		/*
		 * rightMenu
		 * 功能：全局变量,右键内容
		 * 初始化设置menu可替换该变量内容
		 */
		var rightMenu=[
			{
				title:'ckplayer',
				link:'http://www.ckplayer.com'			
			},
			{
				title:'version:X3',
				underline:true
			},
			{
				title:'about',
				click:'aboutShow'
			}
		];
		var vars={},varsTemp={};//保存传递过来的videoObject
		var video=null;//视频播放器对象
		var duration=0;//总时间
		var mutedState='';//默认静音状态
		var recoveryVolume=false;//是否需要在播放时恢复音量
		var waited=true;//是否缓冲结束
		var paused=true;//默认暂停状态
		var loadTime=0;//已加载部分
		var seekTime=0;//需要跳转的时间，初次播放以及切换清晰度后会用该变量记录需要seek的时间
		var oldTime=0,playTime=0,firstSeekTime=-1,maxSeeTime=0;//oldTime=记录上次播放时间，playTime=当前播放时间，firstSeekTime=记录第一次拖动的时间,maxSeeTime=看过的最大时间
		var isChangeDef=true;//是否需要重置清晰度
		var playType='';//播放类别，默认=''，是通过api接口播放，='button'则判定是通过点击按钮播放
		var msgSetTime=null,tipSetTime=null,mouseSetTime=null;//用于显示提示后自动隐藏的计时器
		var adFrontSetTime=null,adPauseSetTime=null;//贴片广告和暂停广告的计时器
		var closeTipFun=null;//关闭提示的函数
		var closeTipMouseOut=null;//鼠标离开节点时执行的函数
		var waitingMessage=true;//显示缓冲提示
		var hidePreviewSetTime=null;//隐藏预览图的计时器
		var pSliderMouseDown=false;//判断是否在进度条上的滑块上按下
		var playbackTime=0;//记录回放时间
		var loadedmetadataNum=0;//记录元数据加载成功次数，记录视频播放数量
		var screenshotImg=null;//记录最新一张截图
		var ad=null;//广告对象
		var frontAdPlay=false,pauseAdPlay=false;//贴片广告是否播放，暂停广告是否播放
		var barShow=true,rightBarShow=true;
		var EventTarget=null,newEvent=null,eventTargetList=null;//注册监听
		var loadedTrack=false;//默认未加载字幕
		var C={};//保存播放器界面上的所有节点
		var CT=null,CK=null,CM=null,CV=null;//CT=播放器容器，页面中已存的，CT>CK>CM>CV>video
		var pugPlayer=null;//插件播放器
		var hls=null;//播放hls
		var loadMeta=true;//第一次加载到元数据
		var app='';//平台类型
		var nowRotate=0;//当前视频旋转角度
		var nowZoom=100;//当前缩放比例
		var smallWindowsState=false;//当前是否处理小窗口状态
		var isDrag=false;//是否在播放器上按下并且拖动
		var ckplayerCookie='ckplayer-player-cookie';
		var cookieName='';//cookie名称
		var cookieTime=0;//cookie保存时间，单位：秒
		var cookieArray=[];//保存当前所有记录
		var focusPause=true;//失去焦点前是否是暂停状态
		var existenceObj=false;//是否使用源码里已有的dom
		/*
		 * into
		 * 功能：初始化，调用播放器则首先调用该函数
		 * @obj=初始化时的配置对象：videoObject
		*/
		var into=function(obj){
			/*
			 * 如果未传递初始化配置对象，则为player变量增加一个add函数，功能相当于into
			 */
			if(isUndefined(obj)){
				player.add=player.into=into;
				return player;
			}
			/*
			 * 转码默认语言包
			 */
			language=decodeURIString(language);
			/*
			 * 检查是否在顶部引入了外部语言包文件，如果引入了，则使用外部语言包替换进language变量
			 */
			if(!isUndefined(window.ckplayerLanguage)){
				language=mergeObj(language,window.ckplayerLanguage);
			}
			/*
			 * 初始化注册事件函数，该函数的作用是将所有相关的事件都注册进一个变量newEvent
			 * newEvent是提供给播放器外部监听函数使用的，如监听时间player.time(function(t){console.log('已播放：'+t);});
			 */
			eventTarget();
			/*
			 * 监听页面标签状态（判断是否失去焦点）
			 */
			documentHidden(function(state){
				eventTarget('visibilityState',state);
			});
			/*
			 * 判断平台类型,主要是判断是否是iphone类型的平台
			 */
			app=getApp();
			/*
			 * 简单复制一下初始化时的默认配置
			 */
			varsTemp={};
			for(var key in videoObjectDefault){
				varsTemp[key]=videoObjectDefault[key];
			}
			/*
			 * 如果初始化配置是字符串并且是以website:开头或url:开头的，则认为需要请求一个json文件来获取配置
			 */
			if(valType(obj)=='string' && (obj.substr(0,8)=='website:' || obj.substr(0,4)=='url:')){
				var ajaxUrl='';
				if(obj.substr(0,8)=='website:'){
					ajaxUrl=obj.substring(8);
				}
				if(obj.substr(0,4)=='url:'){
					ajaxUrl=obj.substring(4);
				}
				ajax({url:ajaxUrl,success:function(data){
					if(data){
						return into(data);
					}
					else{
						showWindowsError(language['error']['ajax']+',url:'+ajaxUrl);
						return null;
					}
				}});
			}
			/*
			 * 如果初始化配置是一个object，则进行下面的操作
			 */
			else if(valType(obj)=='object'){
				varsTemp = standardization(varsTemp, obj);//将obj合并到varsTemp对象里
				if(!isUndefined(obj['container']) && obj['container']){
					CT=$(obj['container']);
					if(CT){//如果播放容器存在，则调用语言判断函数
						return loadLanguage(obj);
					}
					else{//如果播放容器不存在，则则等页面加载完成后运行
						return bodyReady(obj);
					}
				}
				else{//不存在播放容器配置则等页面加载完成后运行
					return bodyReady(obj);
				}			
			}
			else{
				showWindowsError(language['error']['noVideoContainer']);
				return null;
			}
		},
		/*
		 * bodyReady
		 * 功能：页面加载完成后构建播放器
		 * @obj=初始化时的配置对象
		*/
		bodyReady=function (obj){
			documentReady(function(){
				if(!isUndefined(obj['container'])){
					CT=$(obj['container']);
					if(CT){//如果播放容器存在，则调用语言判断函数
						return loadLanguage(obj);
					}
					else{
						showWindowsError(language['error']['noVideoContainer']);
						return null;
					}
				}
				else{//不存在播放容器则重新判断
					return ajaxWebsite(obj);
				}
			});
			return null;
		},
		/*
		 * ajaxWebsite
		 * 功能：页面加载完成后重新初始化
		 * @obj=初始化时的配置对象
		 */
		ajaxWebsite=function (obj){
			if(valType(obj['video'])=='string' && (obj['video'].substr(0,8)=='website:' || obj['video'].substr(0,4)=='url:')){
				varsTemp = standardization(varsTemp, obj);
				var ajaxUrl='';
				if(obj['video'].substr(0,8)=='website:'){
					ajaxUrl=obj['video'].substring(8);
				}
				if(obj['video'].substr(0,4)=='url:'){
					ajaxUrl=obj['video'].substring(4);
				}
				ajax({url:ajaxUrl,success:function(data){
					if(data){
						return into(data);
					}
					else{
						showWindowsError(language['error']['ajax']+',url:'+ajaxUrl);
						return null;
					}
				}});
			}
			else{
				showWindowsError(language['error']['noVideoContainer']);
				return null;
			}
		},
		/*
		 * loadLanguage
		 * 功能：加载Language
		 * @obj=初始化时的配置对象
		*/
		loadLanguage=function (obj){
			vars = standardization(varsTemp, obj);
			if(vars['language']){
				var path=getPath('language')+vars['language']+'.js';
				loadJs(path,function(){
					if(!isUndefined(window['ckplayerLanguage'])){
						language=mergeObj(language,window['ckplayerLanguage']);
					}
					return embed(obj);
				});
			}
			else{
				return embed(obj);
			}
		},
		/*
		 * embed
		 * 功能：构建播放器
		 * @obj=初始化时的配置对象
		*/
		embed=function (obj){
			/*
			 * 判断静音状态
			 */
			mutedState=vars['volume']>0?false:true;
			if(!isUndefined(CT) && CT!=null){
				if(valType(CT)=='htmlarray'){
					CT=CT.eq(0);
				}
			}
			else{
				return null;
			}
			/*
			 * 注册获取fps的函数
			 */
			calculationFps();
			/*
			 * 如果video指向一个已存在的video标签对象
			 */
			existenceObj=valType(vars['video'])=='string' && ((vars['video'].substr(0,1)=='.' && vars['video'].indexOf('/')==-1) || vars['video'].substr(0,1)=='#');
			/*
			 * 清空容器
			 */
			if(existenceObj){
				CK=CT.find('.ckplayer-ckplayer')?CT.find('.ckplayer-ckplayer').eq(0):null;
				if(CK){
					CM=CK.find('.ck-main')?CK.find('.ck-main').eq(0):null;
				}
				if(CM){
					CV=CM.find('.ck-video')?CM.find('.ck-video').eq(0):null;
				}
			}
			if(!CK || !CM || !CV){
				CT.htm('');
				/*
				 * 在播放容器里新建一个总的容器
				 */
				CK=createlDiv('ckplayer-ckplayer');
				CT.append(CK);
				/*
				 * 在总容器里再新建一个容器
				 */
				CM=createlDiv('ck-main');
				CK.append(CM);
				/*
				 * 新建一个放置video标签的容器
				 */
				CV=createlDiv('ck-video');
				CM.append(CV);
			}
			/*
			 * 如果已存在video.则先设置成空
			 */
			if(video){
				video.remove();
				video=null;
			}
			/*
			 * 如果video指向一个已存在的video标签对象，则直接调用该对象
			 */
			if(existenceObj){
				video=$(vars['video'])?$(vars['video']).eq(0):null;
			}
			/*
			 * 新建一个video标签
			 */
			if(!video){
				video = createlVideo();
				video.attr('width','100%').attr('height','100%');
				CV.append(video);
			}
			video.volume=vars['volume'];
			if(vars['autoplay']){
				player.volume(0);
				player.muted();
				recoveryVolume=true;
				video.attr('autoplay','autoplay');
				paused=false;
			}
			else{
				video.attr('preload','metadata');
			}
			CT.loop=vars['loop'];
			if(CT.loop){
				video.attr('loop','loop');
			}
			if(vars['controls']){
				video.controls=true;
			}
			else{
				video.controls=false;
			}
			try{
				if(!existenceObj){
					video.attr('controlslist','nodownload');
					video.attr('x-webkit-airplay','true');
					video.attr('x5-video-orientation','portraint');
					video.attr('playsinline','true');
					video.attr('webkit-playsinline','true');
					video.attr('x5-playsinline','true');
				}
				if(vars['crossOrigin']){
					video.useCORS=true;//解决跨域
		     		video.crossOrigin=vars['crossOrigin'];//解决跨域
				}
			}
			catch(event){}
			/*
			 * 默认设置支持小窗口模式
			 */
			CT.smallWindows=true;
			/*
			 * 默认设置不显示页面全屏按钮
			 */
			CT.webFull=false;
			/*
			 * 默认设置不显示剧场模式按钮
			 */
			CT.theatre=false;
			/*
			 * 加载播放器界面
			 */
			loadFace();
			/*
			 * 判断是否需要默认旋转视频
			 */
			if(vars['rotate']>0){
				player.rotate(vars['rotate']);
			}
			/*
			 * 判断是否需要默认缩放视频
			 */
			if(vars['zoom']>0){
				player.zoom(vars['zoom']);
			}
			/*
			 * 判断是否支持video标签
			 */
			if(isUndefined(video.canPlayType)){
				CT.error={code:5,message:language['error']['supportVideoError']};
				eventTarget('error',CT.error);//注册监听error
				showError();
				return player;
			}
			/*
			 * 注册视频播放器内部监听，监听到事件后注册给CT使用
			 */
			addAllListener();
			/*
			 * 如果需要在视频播放器加载成功后调用相关函数，此时则开始调用
			 */
			if(!isUndefined(vars['loaded'])){
				if(valType(vars['loaded'])=='function'){
					try{
						vars['loaded'](player);
					}
					catch(event){}
				}
				else if(valType(vars['loaded'])=='string'){
					try{
						eval(vars['loaded']+ '(player)');
					}
					catch(event){}
				}
			}
			/*
			 * 播放视频
			 */
			if(!existenceObj){
				changeVideo(vars['video']);
			}
			else{
				changeVideo(video.attr('src'));
			}
			/*
			 * 返回 播放器
			 */
			return player;
		},
		/*
		 * changeVideo
		 * 功能：初始化视频地址或修改视频地址
		*/
		changeVideo=function (vstr){
			var i=0;
			if(video.attr('src') || video.htm()){
				player.pause();
			}
			if(video.attr('src') && !existenceObj){
				video.attr('src','');
				video.removeAttr('src');
			}
			if(!isUndefined(video.textTracks) && video.textTracks.length>0){
				for(i=video.find('track').length-1;i>-1;i--){
					video.find('track').eq(i).remove();
				}
			}
			if(!existenceObj){
				video.htm('');
			}
			if(!isUndefined(vars['ad'])){
				ad=vars['ad'];
			}
			var source='';
			if(valType(vstr)=='string'){
				if(vstr.substr(0,8)=='website:' || vstr.substr(0,4)=='url:'){
					var ajaxUrl='';
					if(vstr.substr(0,8)=='website:'){
						ajaxUrl=vstr.substring(8);
					}
					if(vstr.substr(0,4)=='url:'){
						ajaxUrl=vstr.substring(4);
					}
					ajax({url:ajaxUrl,success:function(data){
						if(data!=null){
							vars = standardization(varsTemp, data);
							changeVideo(vars['video']);
						}
						else{
							CT.error={code:8,message:language['error']['ajax']};
							eventTarget('error',CT.error);//注册监听error
							showError();
						}
					}});
					return;
				}
				else{
					if(vars['plug'] && !canPlay(vstr)){
						plugPlayer(vstr);
					}
					else{
						if(!existenceObj){
							video.attr('src',vstr);
						}
					}
					loadTrack();
				}
			}
			else if(valType(vstr)=='array'){
				for(i=0;i<vstr.length;i++){ if(valtype(vstr[i])="='array'){" if(vars['plug'] && !canplay(vstr[i][0])){ plugplayer(vstr[i][0]); } else{ var type=" type="" + vstr[i][1]+'"'; if(vstr[i].length>1){
								source += '<source src="' + decodeURIComponent(vstr[i][0]) + '" ' +type +>';
							}
						}
					}
				}
				if(source){
					video.htm(source);
				}
				loadTrack();
			}
			else if(valType(vstr)=='object'){
				if(vars['plug']){
					plugPlayer(vstr);
				}
				else{
					CT.error={code:10,message:language['error']['emptied']};
					eventTarget('error',CT.error);//注册监听error
					showError();
				}
				loadTrack();
			}
			if(!isUndefined(video.find('source')) && video.find('source').length>0){
				video.find('source').eq(video.find('source').length-1).addListener('error',videoHandler.error);
			}
			checkBar();
			loadLogo();
			if(isChangeDef){
				checkDefinition();
			}
			/*
			 * 对cookie进行相关分析
			*/
			if(vars['cookie']){
				if(valType(vars['cookie'])=='array' && vars['cookie'].length>=2){
					if(vars['cookie'][0] && valType(vars['cookie'][0])=='string'){
						cookieName=vars['cookie'][0];
					}
					if(vars['cookie'][1] && valType(vars['cookie'][1])=='number'){
						cookieTime=vars['cookie'][1];
					}
				}
				if(valType(vars['cookie'])=='object' && !isUndefined(vars['cookie']['name'])){
					cookieName=vars['cookie']['name'];
					if(!isUndefined(vars['cookie']['hour']) && valType(vars['cookie']['hour'])=='number'){
						cookieTime=vars['cookie']['hour'];
					}
				}
				if(valType(vars['cookie'])=='string'){
					cookieName=vars['cookie'];
				}
				if(cookieName){
					cookieName=cookieName.replace(/[ ]*,[ ]*|[ ]+/g, '').replace(/[ ]*;[ ]*|[ ]+/g, '');
				}
			}
			if(!isUndefined(vars['seek']) && !seekTime){
				if(valType(vars['seek'])=='number' && vars['seek']>0){
					seekTime=vars['seek'];
				}
				if(valType(vars['seek'])=='string' && vars['seek']=='cookie' && cookieName){
					var cke=player.cookie(cookieName);
					if(cke){
						seekTime=cke['time'];
					}
					
				}
			}
		},
		/*
		 * plugPlayer
		 * 功能：使用插件进行播放
		*/
		plugPlayer=function (url){
			switch(vars['plug']){
				case 'hls.js':
					hlsPlayer(url);
					break;
				case 'flv.js':
					flvPlayer(url);
					break;
				case 'mpegts.js':
					mpegtsPlayer(url);
					break;
				case 'dash.js':
					dashPlayer(url);
					break;	
				default:
					if(valType(vars['plug'])=='function'){
						vars['plug'](video,url);
					}
					else{
						CT.error={code:10,message:language['error']['emptied']};
						eventTarget('error',CT.error);//注册监听error
						showError();
					}
					
					break;
			}
		},
		/*
		 * hlsPlayer
		 * 功能：使用hls.js插件进行播放
		*/
		hlsPlayer=function (url){
			var path=getPath('hls.js')+'hls.min.js';
			loadJs(path,function(){
				if (!isUndefined(Hls) && Hls.isSupported()) {
					hls = new Hls();
					hls.loadSource(url);
					hls.attachMedia(video);
					hls.on(Hls.Events.ERROR, function(event, data){
						var code=9;
						var message=language['error']['loadingFailed'];
						var fatal=data.fatal;
						if(!isUndefined(data.response)){
							if(!isUndefined(data.response.code)){
								code=data.response.code;
							}
							if(!isUndefined(data.response.text) && data.response.text){
								message=data.response.text;
							}
							else{
								if(!isUndefined(event)){
									message=event;
								}
							}
						}
						CT.error={code:code,message:message};
						eventTarget('error',CT.error);//注册监听error
						if(fatal){
							showError();
						}
					});
				}
				else if(canPlay(url)){
					video.attr('src',url);
				}
			});
		},
		/*
		 * flvPlayer
		 * 功能：使用flv.js插件进行播放
		*/
		flvPlayer=function (url){
			var path=getPath('flv.js')+'flv.min.js';
			loadJs(path,function(){
				if (typeof(flvjs)!='undefined' && !isUndefined(flvjs) && flvjs.isSupported()) {
					var config={
			            type: 'flv',
			            url: url
					};
					if(valType(url)=='object'){
						config=url;
					}
					if(vars['live']){
						config['isLive']=true;
					}
					if(pugPlayer){
						pugPlayer.pause();
	                    pugPlayer.unload();
	                    pugPlayer.detachMediaElement();
	                    pugPlayer.destroy();
						pugPlayer=null;
					}
			        pugPlayer = flvjs.createPlayer(config);
			        pugPlayer.attachMediaElement(video);
			        pugPlayer.load();
			        pugPlayer.on(flvjs.Events.METADATA_ARRIVED, function(res){
			        	videoHandler.loadedMetaData();
			        });
			        pugPlayer.on(flvjs.Events.ERROR, function(errorType, errorDetail, errorInfo){
	                  	CT.error={code:errorInfo['code'],message:errorInfo['msg']};
	                  	eventTarget('error',CT.error);//注册监听error
						showError();
			        });
			    }
			});
		},
		/*
		 * mpegtsPlayer
		 * 功能：使用mpegts.js插件进行播放
		*/
		mpegtsPlayer=function (url){
			var path=getPath('mpegts.js')+'mpegts.js';
			loadJs(path,function(){
				if (typeof(mpegts)!='undefined' && !isUndefined(mpegts) && mpegts.getFeatureList().mseLivePlayback) {
					var config={
			            type: 'mse',
			            url: url
					};
					if(valType(url)=='object'){
						config=url;
					}
					if(vars['live']){
						config['isLive']=true;
					}
					if(pugPlayer){
						pugPlayer.pause();
	                    pugPlayer.unload();
	                    pugPlayer.detachMediaElement();
	                    pugPlayer.destroy();
						pugPlayer=null;
					}
			        pugPlayer = mpegts.createPlayer(config);
			        pugPlayer.attachMediaElement(video);
			        pugPlayer.load();
			        
			        pugPlayer.on(mpegts.Events.METADATA_ARRIVED, function(res){
			        	videoHandler.loadedMetaData();
			        });
			        pugPlayer.on(mpegts.Events.ERROR, function(errorType, errorDetail, errorInfo){
	                  	CT.error={code:errorInfo['code'],message:errorInfo['msg']};
	                  	eventTarget('error',CT.error);//注册监听error
						showError();
			        });
			    }
			});
		},
		/*
		 * canPlay
		 * 功能：判断是否能支持相关视频格式
		*/
		canPlay=function(vStr,num){
			var vTypeArr=[
				{vidType:'video/ogg',codType:'theora, vorbis'},
				{vidType:'video/mp4',codType:'avc1.4D401E, mp4a.40.2'},
				{vidType:'video/mp4',codType:'avc1'},
				{vidType:'video/mp4',codType:'hevc'},
				{vidType:'video/webm',codType:'vp8.0, vorbis'},
				{vidType:'video/webm',codType:'vp9'},
				{vidType:'',codType:'application/x-mpegURL'},
				{vidType:'',codType:'application/vnd.apple.mpegurl'}
			];
			var vType={
				ogg:vTypeArr[0],
				mp4:[vTypeArr[1],vTypeArr[2],vTypeArr[3]],
				webm:[vTypeArr[4],vTypeArr[5]],
				m3u8:[vTypeArr[6],vTypeArr[7]]
			};
			var arr=[];
			var k='';
			var supportType=function(obj){
				var vType=obj['vidType'];
				var str='';
				if(vType){
					str=vType+'; '+ 'codecs="' + obj['codType'] + '"';
				}
				else{
					str=obj['codType'];
				}
				var sup = video.canPlayType(str);
				if(sup == '') {
					sup = 'no';
				}
				return sup;
			};
			var getExtension=function(filepath) {
				return filepath.replace(/.+\./, '');
			};
			if(isUndefined(num)){
				if(valType(vStr)=='string'){
					if(vars['type']){
						for(k in vTypeArr){
							if(vTypeArr[k]['vidType']==vars['type']){
								arr.push(vTypeArr[k]);
							}
						}
					}
					else{
						if(getExtension(vStr) && getExtension(vStr) in vType){
							var temp=vType[getExtension(vStr)];
							if(valType(temp)=='array'){
								for(var i=0;i<temp.length;i++){ arr.push(temp[i]); } else{ arr.push(temp); arr.push(vtypearr[num]); var is="false;" if(arr.length>0){
				for(var i=0;i<arr.length;i++){ if(supporttype(arr[i])!="no" ){ is="true;" } if(!is && !vars['plug']){ ct.error="{code:6,message:language['error']['videoTypeError']};" eventtarget('error',ct.error); 注册监听error showerror(); return is; }, * loadface 功能：加载界面 loading容器 c['loading']="createlDiv('ck-loading');" cm.append(c['loading']); 默认控制栏容器 c['bar']="createlDiv('ck-bar');" cm.append(c['bar']); 右侧控制栏容器 c['rightbar']="createlDiv('ck-right-bar" ck-right-bar-hide'); cm.append(c['rightbar']); 顶部容器 c['topbar']="createlDiv('ck-top-bar" ck-top-bar-hide'); cm.append(c['topbar']); 进度栏 c['bar']['pbox']="createlDiv('ck-bar-progress');" c['bar']['pbox']['bg']="createlDiv('ck-bar-progress-bg');" c['bar']['pbox']['load']="createlDiv('ck-bar-progress-load');" c['bar']['pbox']['bg'].append(c['bar']['pbox']['load']); c['bar']['pbox']['play']="createlDiv('ck-bar-progress-play');" c['bar']['pbox']['bg'].append(c['bar']['pbox']['play']); c['bar']['pbox']['mouseline']="createlDiv('ck-bar-progress-mouseline');" c['bar']['pbox']['bg'].append(c['bar']['pbox']['mouseline']); c['bar']['pbox']['slider']="createlDiv('ck-bar-progress-slider');" c['bar']['pbox'].append(c['bar']['pbox']['bg']).append(c['bar']['pbox']['slider']); c['bar'].append(c['bar']['pbox']); c['bar'].mouseout(barmouseout).mouseover(barmouseover); if(valtype(vars['live'])="='number'){" c['bar']['pbox']['play'].css({'width':'100%'}); c['bar']['pbox']['slider'].css({'left':(100-c['bar']['pbox']['slider'].getwidth()*100 c['bar']['pbox']['bg'].getwidth())+'%'}); 播放暂停按钮组 c['bar']['playandpause']="createlDiv('ck-bar-playandpause');" c['bar'].append(c['bar']['playandpause']); c['bar']['playandpause']['play']="createlButton('ck-bar-btn" ck-btn-play'); c['bar']['playandpause']['play'].click(player.play); c['bar']['playandpause']['play'].mouseover(function(){tip(this,language['play']);}); c['bar']['playandpause'].append(c['bar']['playandpause']['play']); c['bar']['playandpause']['pause']="createlButton('ck-bar-btn" ck-btn-pause'); c['bar']['playandpause']['pause'].click(player.pause); c['bar']['playandpause']['pause'].mouseover(function(){tip(this,language['pause']);}); c['bar']['playandpause'].append(c['bar']['playandpause']['pause']); c['bar']['playandpause']['pause'].hide(); c['bar']['playandpause']['refresh']="createlButton('ck-bar-btn" ck-btn-refresh'); c['bar']['playandpause']['refresh'].click(player.play); c['bar']['playandpause']['refresh'].mouseover(function(){tip(this,language['refresh']);}); c['bar']['playandpause'].append(c['bar']['playandpause']['refresh']); 下一集按钮 c['bar']['nextepisode']="createlDiv('ck-bar-btn" ck-bar-next'); c['bar'].append(c['bar']['nextepisode']); c['bar']['nextepisode'].click(nextclick).mouseover(shownextepisode).mouseout(function(){ if(!isundefined(c['next'])){ player.closelayer(c['next']); }); if(isundefined(vars['next'])){ c['bar']['nextepisode'].hide(); 时间显示框 var timedefault="formatSeconds(player.time())+'/'+formatSeconds(duration);" if(vars['live']){ c['time']="createlDiv('ck-bar-time',timeDefault);" c['bar'].append(c['time']); 返回直播按钮 c['bar']['backlive']="createlButton('ck-btn-backlive',language['backLive']);" c['bar'].append(c['bar']['backlive']); c['bar']['backlive'].mouseover(function(){tip(this,language['backlive']);}).click(function(){ eventtarget('backlive'); c['bar']['backlive'].hide(); 全屏按钮组 c['bar']['fullandexit']="createlDiv('ck-bar-fullandexit');" c['bar'].append(c['bar']['fullandexit']); c['bar']['fullandexit']['full']="createlButton('ck-bar-btn" ck-btn-full'); c['bar']['fullandexit']['full'].click(player.fullorexit); c['bar']['fullandexit']['full'].mouseover(function(){tip(this,language['full']);}); c['bar']['fullandexit'].append(c['bar']['fullandexit']['full']); c['bar']['fullandexit']['exitfull']="createlButton('ck-bar-btn" ck-btn-exitfull'); c['bar']['fullandexit']['exitfull'].click(player.fullorexit); c['bar']['fullandexit']['exitfull'].mouseover(function(){tip(this,language['exitfull']);}); c['bar']['fullandexit'].append(c['bar']['fullandexit']['exitfull']); 网页全屏按钮 c['bar']['webfullandexit']="createlDiv('ck-bar-webfullandexit');" c['bar'].append(c['bar']['webfullandexit']); c['bar']['webfullandexit']['webfull']="createlButton('ck-bar-btn" ck-btn-webfull'); c['bar']['webfullandexit']['webfull'].click(player.webfull); c['bar']['webfullandexit']['webfull'].mouseover(function(){tip(this,language['webfull']);}); c['bar']['webfullandexit'].append(c['bar']['webfullandexit']['webfull']); c['bar']['webfullandexit']['exitwebfull']="createlButton('ck-bar-btn" ck-btn-exitwebfull'); c['bar']['webfullandexit']['exitwebfull'].click(player.exitwebfull); c['bar']['webfullandexit']['exitwebfull'].mouseover(function(){tip(this,language['exitwebfull']);}); c['bar']['webfullandexit'].append(c['bar']['webfullandexit']['exitwebfull']); if(!vars['webfull']){ c['bar']['webfullandexit'].hide(); 剧场模式按钮组 c['bar']['theatreandexit']="createlDiv('ck-bar-theatreandexit');" c['bar'].append(c['bar']['theatreandexit']); c['bar']['theatreandexit']['theatre']="createlButton('ck-bar-btn" ck-btn-theatre'); c['bar']['theatreandexit']['theatre'].click(player.theatre); c['bar']['theatreandexit']['theatre'].mouseover(function(){tip(this,language['theatre']);}); c['bar']['theatreandexit'].append(c['bar']['theatreandexit']['theatre']); c['bar']['theatreandexit']['exittheatre']="createlButton('ck-bar-btn" ck-btn-exittheatre'); c['bar']['theatreandexit']['exittheatre'].click(player.exittheatre); c['bar']['theatreandexit']['exittheatre'].mouseover(function(){tip(this,language['exittheatre']);}); c['bar']['theatreandexit'].append(c['bar']['theatreandexit']['exittheatre']); if(!vars['theatre']){ c['bar']['theatreandexit'].hide(); 音量容器 c['bar']['vbox']="createlDiv('ck-bar-volumebox');" c['bar'].append(c['bar']['vbox']); c['bar']['vbox']['muted']="createlButton('ck-bar-btn" ck-btn-muted'); c['bar']['vbox']['muted'].click(player.muted); c['bar']['vbox'].append(c['bar']['vbox']['muted']); c['bar']['vbox']['exitmuted']="createlButton('ck-bar-btn" ck-btn-exitmuted'); c['bar']['vbox']['exitmuted'].click(player.exitmuted); c['bar']['vbox'].append(c['bar']['vbox']['exitmuted']); c['bar']['vbox']['volume']="createlDiv('ck-bar-volume');" c['bar']['vbox'].append(c['bar']['vbox']['volume']); c['bar']['vbox']['volume']['box']="createlDiv('ck-bar-volumex');" c['bar']['vbox']['volume'].append(c['bar']['vbox']['volume']['box']); c['bar']['vbox']['volume']['txt']="createlDiv('ck-bar-volume-txt','0');" c['bar']['vbox']['volume']['box'].append(c['bar']['vbox']['volume']['txt']); c['bar']['vbox']['volume']['bg']="createlDiv('ck-bar-volume-bg');" c['bar']['vbox']['volume']['box'].append(c['bar']['vbox']['volume']['bg']); c['bar']['vbox']['volume']['pp']="createlDiv('ck-bar-volume-pp');" c['bar']['vbox']['volume']['bg'].append(c['bar']['vbox']['volume']['pp']); c['bar']['vbox']['volume']['slider']="createlDiv('ck-bar-volume-slider');" c['bar']['vbox']['volume']['box'].append(c['bar']['vbox']['volume']['slider']); c['bar']['vbox']['mousedown']="false;" c['bar']['vbox']['volume'].show(); changevolumeslider(vars['volume']); volumedragy(); 注册音量调节滑块动作 c['bar']['vbox']['volume'].attr('style',''); c['bar']['vbox'].mouseover(function(){changevolumeslider(video.muted?0:video.volume);}); 播速容器 c['bar']['playbackrate']="createlDiv('ck-bar-playbackrate-box');" c['bar'].append(c['bar']['playbackrate']); c['bar']['playbackrate']['button']="createlDiv('ck-bar-playbackrate',language['playbackrate']);" c['bar']['playbackrate'].append(c['bar']['playbackrate']['button']); c['bar']['playbackrate']['bgbox']="createlDiv('ck-bar-playbackrate-bg-box" ck-list-bg-box'); c['bar']['playbackrate'].append(c['bar']['playbackrate']['bgbox']); checkplaybackrate(); 字幕容器 c['bar']['track']="createlDiv('ck-bar-track-box');" c['bar'].append(c['bar']['track']); c['bar']['track']['button']="createlDiv('ck-bar-track',language['track']);" c['bar']['track'].append(c['bar']['track']['button']); c['bar']['track']['bgbox']="createlDiv('ck-bar-track-bg-box" c['bar']['track'].append(c['bar']['track']['bgbox']); c['bar']['track'].hide(); 清晰度容器 c['bar']['definition']="createlDiv('ck-bar-definition-box');" c['bar'].append(c['bar']['definition']); c['bar']['definition']['button']="createlDiv('ck-bar-definition',language['definition']);" c['bar']['definition'].append(c['bar']['definition']['button']); c['bar']['definition']['bgbox']="createlDiv('ck-bar-definition-bg-box" c['bar']['definition'].append(c['bar']['definition']['bgbox']); c['bar']['definition'].hide(); 截图按钮 c['rightbar']['screenshot']="createlButton('ck-bar-btn" ck-btn-screenshot'); c['rightbar'].append(c['rightbar']['screenshot']); c['rightbar']['screenshot'].mouseover(function(){tip(this,language['screenshot'],null,'left');}); c['rightbar']['screenshot'].click(player.screenshot); 小窗口按钮组 c['rightbar']['smallwindows']="createlDiv('ck-right-bar-smallwindows');" c['rightbar'].append(c['rightbar']['smallwindows']); c['rightbar']['smallwindows']['open']="createlButton('ck-bar-btn" ck-btn-smallwindows-open'); c['rightbar']['smallwindows']['open'].click(function(){tip(this,language['smallwindowsclose'],null,'left');player.smallwindows(false);}); c['rightbar']['smallwindows']['open'].mouseover(function(){tip(this,language['smallwindowsopen'],null,'left');}); c['rightbar']['smallwindows'].append(c['rightbar']['smallwindows']['open']); c['rightbar']['smallwindows']['close']="createlButton('ck-bar-btn" ck-btn-smallwindows-close'); c['rightbar']['smallwindows']['close'].click(function(){tip(this,language['smallwindowsopen'],null,'left');player.smallwindows(true)}); c['rightbar']['smallwindows']['close'].mouseover(function(){tip(this,language['smallwindowsclose'],null,'left');}); c['rightbar']['smallwindows'].append(c['rightbar']['smallwindows']['close']); 循环按钮组 c['rightbar']['loop']="createlDiv('ck-right-bar-loop');" c['rightbar'].append(c['rightbar']['loop']); c['rightbar']['loop']['open']="createlButton('ck-bar-btn" ck-btn-loop-open'); c['rightbar']['loop']['open'].click(function(){tip(this,language['loopclose'],null,'left');player.loop(false);}); c['rightbar']['loop']['open'].mouseover(function(){tip(this,language['loopopen'],null,'left');}); c['rightbar']['loop'].append(c['rightbar']['loop']['open']); c['rightbar']['loop']['close']="createlButton('ck-bar-btn" ck-btn-loop-close'); c['rightbar']['loop']['close'].click(function(){tip(this,language['loopopen'],null,'left');player.loop(true);}); c['rightbar']['loop']['close'].mouseover(function(){tip(this,language['loopclose'],null,'left');}); c['rightbar']['loop'].append(c['rightbar']['loop']['close']); c['rightbar'].mouseout(rightbarmouseout).mouseover(rightbarmouseover); 截图显示容器 c['screenshot']="createlDiv('ck-screenshot');" cm.append(c['screenshot']); c['screenshot']['img']="createlDiv('ck-screenshot-img');" c['screenshot'].append(c['screenshot']['img']); c['screenshot']['bar']="createlDiv('ck-screenshot-bar');" c['screenshot'].append(c['screenshot']['bar']); c['screenshot']['bar']['down']="createlA(language['down'],'','ck-screenshot-btn" ck-screenshot-down'); c['screenshot']['bar'].append(c['screenshot']['bar']['down']); c['screenshot']['bar']['close']="createlButton('ck-screenshot-btn" ck-screenshot-close',language['close']); c['screenshot']['bar']['close'].click(player.closescreenshot); c['screenshot']['bar'].append(c['screenshot']['bar']['close']); 顶部内容 c['topbar']['zoomele']="createlDiv('ck-top-bar-zoom');" c['topbar']['zoomele']['zoom50']="createlDiv('ck-top-bar-zoom-container');" c['topbar']['zoomele'].append(c['topbar']['zoomele']['zoom50']); c['topbar']['zoomele']['zoom50']['left']="createlDiv('ck-top-bar-zoom-left');" c['topbar']['zoomele']['zoom50'].append(c['topbar']['zoomele']['zoom50']['left']); c['topbar']['zoomele']['zoom50']['left']['button']="createlDiv('ck-top-bar-zoom-button-50');" c['topbar']['zoomele']['zoom50']['left'].append(c['topbar']['zoomele']['zoom50']['left']['button']); c['topbar']['zoomele']['zoom50']['right']="createlDiv('ck-top-bar-zoom-right',language['p50']);" c['topbar']['zoomele']['zoom50'].append(c['topbar']['zoomele']['zoom50']['right']); c['topbar']['zoomele']['zoom50'].click(function(){player.zoom(50);}); c['topbar']['zoomele']['zoom75']="createlDiv('ck-top-bar-zoom-container');" c['topbar']['zoomele'].append(c['topbar']['zoomele']['zoom75']); c['topbar']['zoomele']['zoom75']['left']="createlDiv('ck-top-bar-zoom-left');" c['topbar']['zoomele']['zoom75'].append(c['topbar']['zoomele']['zoom75']['left']); c['topbar']['zoomele']['zoom75']['left']['button']="createlDiv('ck-top-bar-zoom-button-75');" c['topbar']['zoomele']['zoom75']['left'].append(c['topbar']['zoomele']['zoom75']['left']['button']); c['topbar']['zoomele']['zoom75']['right']="createlDiv('ck-top-bar-zoom-right',language['p75']);" c['topbar']['zoomele']['zoom75'].append(c['topbar']['zoomele']['zoom75']['right']); c['topbar']['zoomele']['zoom75'].click(function(){player.zoom(75);}); c['topbar']['zoomele']['zoom100']="createlDiv('ck-top-bar-zoom-container');" c['topbar']['zoomele'].append(c['topbar']['zoomele']['zoom100']); c['topbar']['zoomele']['zoom100']['left']="createlDiv('ck-top-bar-zoom-left');" c['topbar']['zoomele']['zoom100'].append(c['topbar']['zoomele']['zoom100']['left']); c['topbar']['zoomele']['zoom100']['left']['button']="createlDiv('ck-top-bar-zoom-button-100');" c['topbar']['zoomele']['zoom100']['left'].append(c['topbar']['zoomele']['zoom100']['left']['button']); c['topbar']['zoomele']['zoom100']['right']="createlDiv('ck-top-bar-zoom-right',language['p100']);" c['topbar']['zoomele']['zoom100'].append(c['topbar']['zoomele']['zoom100']['right']); c['topbar']['zoomele']['zoom100'].click(function(){player.zoom(100);}); c['topbar'].append(c['topbar']['zoomele']); c['topbar']['titleele']="createlDiv('ck-top-bar-title',vars['title']);" c['topbar'].append(c['topbar']['titleele']); c['topbar']['timeele']="createlDiv('ck-top-bar-time');" c['topbar'].append(c['topbar']['timeele']); 中间播放按钮 c['centerplay']="createlDiv('ck-center-play');" c['centerplay'].click(player.play); cm.append(c['centerplay']); buff c['buffer']="createlDiv('ck-buffer');" cm.append(c['buffer']); 消息提示框 c['message']="createlDiv('ck-message');" cm.append(c['message']); 消息tip框 c['tip']="createlDiv('ck-tip');" cm.append(c['tip']); c['tip']['content']="createlDiv('ck-content" ck-content-float-auto'); c['tip'].append(c['tip']['content']); c['tip']['triangle']="createlDiv('ck-triangle" ck-triangle-auto'); c['tip'].append(c['tip']['triangle']); tip(video,'ckplayer'); 初始化显示，为了获取高度 c['tip'].minheight="C['tip'].getHeight();" tip(); 贴片广告层 c['ad']="createlDiv('ck-yytf');" cm.append(c['ad']); c['ad']['link']="createlDiv('ck-yytf-front-link');" c['ad'].append(c['ad']['link']); c['ad']['link'].click(frontvideoclickhandler); c['ad']['picture']="createlDiv('ck-yytf-front-picture');" c['ad'].append(c['ad']['picture']); c['ad']['top']="createlDiv('ck-yytf-top');" c['ad'].append(c['ad']['top']); c['ad']['top']['countdown']="createlDiv('ck-yytf-countdown');" c['ad']['top'].append(c['ad']['top']['countdown']); c['ad']['top']['closetime']="createlDiv('ck-yytf-closetime');" c['ad']['top'].append(c['ad']['top']['closetime']); c['ad']['top']['closead']="createlDiv('ck-yytf-closead',language['closeAd']);" c['ad']['top'].append(c['ad']['top']['closead']); c['ad']['top']['closead'].click(closefrontad); c['ad']['bottom']="createlDiv('ck-yytf-bottom');" c['ad'].append(c['ad']['bottom']); c['ad']['bottom']['fullandexit']="createlDiv('ck-yytf-fullandexit');" c['ad']['bottom'].append(c['ad']['bottom']['fullandexit']); c['ad']['bottom']['fullandexit']['full']="createlButton('ck-yytf-btn" ck-yytf-fullandexit-full'); c['ad']['bottom']['fullandexit']['full'].click(player.full); c['ad']['bottom']['fullandexit'].append(c['ad']['bottom']['fullandexit']['full']); c['ad']['bottom']['fullandexit']['exitfull']="createlButton('ck-yytf-btn" ck-yytf-fullandexit-exitfull'); c['ad']['bottom']['fullandexit'].append(c['ad']['bottom']['fullandexit']['exitfull']); c['ad']['bottom']['fullandexit']['exitfull'].click(player.exitfull); c['ad']['bottom']['mutedandexit']="createlDiv('ck-yytf-mutedandexit');" c['ad']['bottom'].append(c['ad']['bottom']['mutedandexit']); c['ad']['bottom']['mutedandexit']['muted']="createlButton('ck-yytf-btn" ck-yytf-mutedandexit-muted'); c['ad']['bottom']['mutedandexit'].append(c['ad']['bottom']['mutedandexit']['muted']); c['ad']['bottom']['mutedandexit']['muted'].click(player.muted); c['ad']['bottom']['mutedandexit']['exitmuted']="createlButton('ck-yytf-btn" ck-yytf-mutedandexit-exitmuted'); c['ad']['bottom']['mutedandexit'].append(c['ad']['bottom']['mutedandexit']['exitmuted']); c['ad']['bottom']['mutedandexit']['exitmuted'].click(player.exitmuted); c['ad']['bottom']['details']="createlDiv('ck-yytf-details',language['details']);" c['ad']['bottom'].append(c['ad']['bottom']['details']); c['ad'].hide(); 暂停广告层 c['adpause']="createlDiv('ck-pause-yytf');" cm.append(c['adpause']); 关于视频 c['about']="createlDiv('ck-about');" cm.append(c['about']); c['about']['bar']="createlDiv('ck-about-bar');" c['about'].append(c['about']['bar']); c['about']['bar']['copy']="createlButton('ck-bar-btn" ck-btn-about-copy'); c['about']['bar'].append(c['about']['bar']['copy']); c['about']['bar']['copy'].click(aboutcopy); c['about']['bar']['copy'].mouseover(function(){tip(this,language['copy'],null,'left');}); c['about']['bar']['close']="createlButton('ck-bar-btn" ck-btn-about-close'); c['about']['bar']['close'].click(abouthide); c['about']['bar']['close'].mouseover(function(){tip(this,language['close'],null,'left');}); c['about']['bar'].append(c['about']['bar']['close']); c['temptime']="createlDiv('ck-tempTime');" cm.append(c['temptime']); c['bar']['playandpause']['refresh'].hide(); if(vars['controls']){ player.bar(false); player.rightbar(false); c['loading'].hide(); c['centerplay'].hide(); else{ loadlogo(); 加载logo loadabout(); 构建关于视频相关内容 loadmenu(); 构建右键 if(app="='iphone'){" changetoptime(); 修改顶部时间 ck.mouseout(function(){ if(!paused){ hidebar(); }).mouseover(function(){ if(!c['bar'].hasclass('ck-bar-out')){ c['bar'].removeclass('ck-bar-out'); cm.removeclass('ck-nocursor'); if(c['rightbar'].css('display')="='block'){" c['rightbar'].removeclass('ck-right-bar-hide'); if(c['topbar'].css('display')="='block'){" c['topbar'].removeclass('ck-top-bar-hide'); }).mousemove(function(){ if(c['bar'].hasclass('ck-bar-out')){ eventtarget('mouseactive',true); addalllistener 功能：注册播放器的全部监听 video.addlistener('stalled',videohandler.stalled); 在浏览器不论何种原因未能取回媒介数据时运行的脚本 video.addlistener('suspend',videohandler.suspend); 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本 video.addlistener('loadeddata',videohandler.loadeddata); 监听视频数据已加载 video.addlistener('loadstart',videohandler.loadstart); 在文件开始加载且未实际加载任何数据前运行的脚本 video.addlistener('loadedmetadata',videohandler.loadedmetadata); 监听视频元数据 video.addlistener('canplay',videohandler.canplay); 当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时） video.addlistener('timeupdate',videohandler.timeupdate); 监听视频播放时间 video.addlistener('seeking',videohandler.seeking); 监听视频跳转中 video.addlistener('seeked',videohandler.seeked); 监听视频跳转 video.addlistener('waiting',videohandler.waiting); 监听视频缓冲 video.addlistener('play',videohandler.play); 监听视频播放事件 video.addlistener('pause',videohandler.pause); 监听视频暂停事件 video.addlistener('volumechange',videohandler.volumechange); 监听音量改变 video.addlistener('ended',videohandler.ended); 监听播放结束 video.addlistener('error',videohandler.error); 监听发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时） if(!isundefined(video.emptied)){ video.addlistener('emptied',videohandler.emptied); cv.singleclick(player.playorpause); 监听视频单击 cv.singleclick(function(){ if(!isdrag){ player.playorpause(); isdrag="false;" cm.doubleclick(player.fullorexit); 监听视频双击 $(document).addlistener('keydown',videohandler.keydown); 监听键盘按键 addlistener(window, 'resize', videohandler.resize); 监听窗口尺寸变化 if(!isundefined(vars['smallwindows'])){ if(valtype(vars['smallwindows'])="='boolean'" vars['smallwindows']){ 'scroll', windowscroll); 监听窗口滚动 ct.mousewheel(videohandler.mousewheel); eventtarget 功能：注册事件，将事件注册给ct对象供外部监听 try{ if(eventtarget!="null){" if(isundefined(obj)){ obj="null;" newevent.dispatchevent(name,obj); { this.listeners="{};" }; eventtarget.prototype.listeners="null;" eventtarget.prototype.addeventlistener="function(type," callback) if(!(type in this.listeners)) this.listeners[type]="[];" this.listeners[type].push(callback); eventtargetlist="this.listeners;" eventtarget.prototype.removeeventlistener="function(type," return; stack="this.listeners[type];" for(var i="0," l="stack.length;" < l; i++) if(stack[i]="==" stack.splice(i, 1); this.removeeventlistener(type, callback); eventtarget.prototype.dispatchevent="function(type,obj)" stack[i].call(this, obj); newevent="new" eventtarget(); catch(event){console.error(event)} changecookie 功能：使用cookie记录时间 arr="[];" cstr="cookie(ckplayerCookie);" ctime="Math.floor(Date.now()*0.001);" time="Math.floor(time*100);" if(!cookietime){ cookietime="365*24;" if(!cstr){ arr.push([cookiename,time,ctime+cookietime*3600]); have="false;" temparr="[[cookieName,time,cTime+cookieTime*3600]];" for(i="0;i<arr.length;i++){" if(arr[i][2]>cTime && arr[i][0]!=cookieName && y<19){ temparr.push(arr[i]); y++; } arr="tempArr;" if(arr.length>0){
				cookie(ckplayerCookie,'delete',vars['domain'],vars['cookiePath']);
				cookie(ckplayerCookie,arrayToString(arr),vars['domain'],vars['cookiePath']);
			}
			cookieArray=arr;
		},
		/*
		 * loadTrack
		 * 功能：加载track
		*/
		loadTrack=function(){
			if(isUndefined(video.textTracks)){
				return;
			}
			var i=0;
			if(!isUndefined(vars['track']) && valType(vars['track'])=='array' && !video.find('track')){
				var track='';
				var arr=vars['track'];
				C['bar']['track'].show();
				for(i=0;i<arr.length;i++){ var def ; if(!def && !isundefined(arr[i]['default']) arr[i]['default']){ } track+="<track src="" +arr[i]['src']+'" srclang="'+arr[i]['srclang']+'" kind="'+arr[i]['kind']+'" label="'+arr[i]['label']+'" '+def+'>';
				}
				if(video){
					var html=video.htm()+track;
					video.htm(html);
				}
				if(video.find('track') && !loadedTrack){
					loadedTrack=true;
					checkTrack();
				}
			}
		},
		/*
		 * loadedMetaData
		 * 功能：获取元数据后执行的函数
		*/
		loadedMetaData=function(){
			eventTarget('loadedMetaData',{
				width:CK.getWidth(),
				height:CK.getHeight(),
				videoWidth:CT.videoWidth,
				videoHeight:CT.videoHeight,
				duration:duration,
				volume:CT.volume
			});
			eventTarget('duration',duration);
			if('error' in C){
				C['error'].hide();
			}
			replaceInformation('videoWidth',CT.videoWidth);
			replaceInformation('videoHeight',CT.videoHeight);
			replaceInformation('volume',parseInt(CT.volume*100));
			replaceInformation('duration',parseInt(duration));
			documentHidden(function(state){
				if(vars['documentFocusPause']){
					if(state=='show'){
						if(!focusPause && paused){
							player.play();
						}
					}
					else{
						focusPause=paused;
						player.pause();
					}
				}
			});
		};
		/*
		 * videoHandler
		 * 功能：视频播放对象video注册内部监听调用函数
		*/
		var videoHandler={
			loadStart:function(){
				if(!vars['controls'] && app!='iphone'){
					C['loading'].show();
				}
				C['centerPlay'].hide();
				eventTarget('loadstart');
				
			},
			canPlay:function(){
				C['loading'].hide();
				eventTarget('canplay');
			},
			loadedData:function(){
				eventTarget('loadeddata');
			},
			loadedMetaData:function(){
				duration=this.duration;
				if(!isUndefined(this.duration) && vars['duration']){
					duration=vars['duration'];
				}			
				if(!vars['live']){
					C['time'].htm(formatSeconds(this.currentTime)+'/'+formatSeconds(duration));
					C['tempTime'].htm(formatSeconds(this.currentTime)+'/'+formatSeconds(duration));
				}
				C['loading'].hide();
				if(vars['poster']){
					video.attr('poster',vars['poster']);
				}
				if(!vars['autoplay'] && !vars['controls']){
					C['centerPlay'].show();
					C['buffer'].hide();
				}
				
				CT.duration=duration;
				CT.videoWidth=this.videoWidth;
				CT.videoHeight=this.videoHeight;
				CT.volume=this.volume;
				if(CT.videoWidth || CT.videoHeight || duration){
					loadedMetaData();
				}
				var len = 0;
				if(!isUndefined(this.buffered)){
					len=this.buffered.length;
				}
				if(len>0){
					changeLoad();
				}
				if(!vars['live']){
					changePreview(vars['preview']);//修改预览图片
				}
				else{
					changePreview();//修改预览图片
				}
				if(!isUndefined(vars['prompt']) && valType(vars['prompt'])=='array' && !vars['live']){
					changePrompt();
				}
				else{
					deletePrompt();
				}
				if(isChangeDef){
					checkDefinition();
					isChangeDef=false;
				}
				pSliderMouseDown=false;
				loadedmetadataNum++;
				if(!isUndefined(ad) && !isUndefined(ad['frontPlay']) && ad['frontPlay'] && loadedmetadataNum>1){//如果是贴片广告播放中，则进行播放和计算
					player.play();
					calculationAdFrontTime(duration);//计算贴片广告的时间
				}
				if(!isUndefined(ad) && !isUndefined(ad['frontPlay']) && !ad['frontPlay']){//如果广告播放结束则播放正片
					player.volume(vars['volume']);
					player.play();
				}
				if(!vars['autoplay'] && loadMeta){
					loadMeta=false;
					player.pause();
					setTimeout(player.pause,300);
				}
			},
			timeUpDate:function(){//监听播放时间
				if(!waited){
					waited=true;
					C['buffer'].hide();
					eventTarget('buffer','end');
				}
				var len = this.buffered.length;
				if(len>0){
					changeLoad();
				}
				if(!duration && this.duration){
					duration=this.duration;
					CT.duration=duration;
					CT.videoWidth=this.videoWidth;
					CT.videoHeight=this.videoHeight;
					if(CT.videoWidth || CT.videoHeight || duration){
						loadedMetaData();
					}
				}
				oldTime=playTime;
				playTime=this.currentTime;
				if(maxSeeTime<oldTime){ maxseetime="oldTime;" } changeprogress(playtime); eventtarget('time',playtime); if(!vars['live']){ c['time'].htm(formatseconds(playtime)+' '+formatseconds(duration)); c['temptime'].htm(formatseconds(playtime)+' if(!isundefined(ad) && !isundefined(ad['frontplay']) ad['frontplay'] loadedmetadatanum>1){//如果是贴片广告播放中，则进行播放
					calculationAdFrontTime(duration-playTime);//计算贴片广告的时间
				}
				if(!isUndefined(C['error']) && C['error'].css('display')=='block'){
					C['error'].hide();
				}
				if(cookieName){
					changeCookie(playTime);
				}
				replaceInformation('audioDecodedByteCount',this.webkitAudioDecodedByteCount || this.audioDecodedByteCount || 0);
				replaceInformation('videoDecodedByteCount',this.webkitVideoDecodedByteCount || this.videoDecodedByteCount || 0);
			},
			ended:function(){//监听播放结束
				if(!isUndefined(ad) && !isUndefined(ad['frontPlay']) && ad['frontPlay']){//如果是贴片广告播放中，则用广告结束函数对此进行判断
					adFrontEnded();
				}
				else{
					C['bar']['playAndPause']['pause'].hide();
					C['bar']['playAndPause']['play'].hide();
					C['bar']['playAndPause']['refresh'].show();
					eventTarget('ended');
					showEnded();
					message();
				}
			},
			error:function(event){
				if(!isUndefined(event.type)){
					var errorInfo=this.error;
					var errorBak=function(){
						var code=12;
						var msg=language['error']['loadingFailed'];
						if(!isUndefined(errorInfo)){
							if(!isUndefined(errorInfo.code)){
								code=errorInfo.code;
							}
							if(!isUndefined(errorInfo.message)){
								msg=errorInfo.message;
							}
							CT.error={code:code,message:msg};
							showError();
						}
						else{
							CT.error={code:code,message:msg};
							if(event.target.attr('src')){
								showError();
							}
						}
						eventTarget('error',CT.error);//注册监听error
					};
					if(event.type=='error'){
						try{
							if(video.currentSrc){
								ajax({url:video.currentSrc,error:function(info){
									if(info && valType(info)=='object' && 'code' in info && info['code']){
										CT.error=info;
										eventTarget('error',CT.error);//注册监听error
										showError();
									}
									else{
										errorBak();
									}
								},success:function(data){
									if(!data){
										errorBak();
									}
								}});
							}
							else{
								errorBak();
							}
						}
						catch(event){
							errorBak();
						}
					}
				}
			},
			stalled:function(){
				eventTarget('stalled');//注册监听error
				CT.error={code:13,message:'load:stalled'};
				eventTarget('error',CT.error);//注册监听error
			},
			suspend:function(){
				eventTarget('suspend');//注册监听error
			},
			emptied:function(){
				eventTarget('emptied');//注册监听error
				CT.error={code:7,message:language['error']['emptied']};
				eventTarget('error',CT.error);//注册监听error
			},
			seeked:function(){
				if(paused){
					player.play();
				}
				pSliderMouseDown=false;
				eventTarget('seek',{time:this.currentTime,state:'seeked'});
				eventTarget('seeked');
			},
			seeking:function(){
				if(paused){
					player.play();
				}
				var seekingTime=this.currentTime;
				if(firstSeekTime==-1){
					firstSeekTime=seekingTime;//记录第一次拖动的时间
				}
				switch(vars['timeScheduleAdjust']){
					case 0://禁止拖动
						if(oldTime!=seekingTime){
							waitingMessage=false;
							player.seek(oldTime);
							message(language['timeScheduleAdjust']['prohibit']);
							return;
						}
						break;
					case 2://只能前进（向右拖动
						if(seekingTime<oldTime){ waitingmessage="false;" player.seek(oldtime); message(language['timescheduleadjust']['prohibitbackoff']); return; } break; case 3: 是只能后退 if(seekingtime>oldTime){
							waitingMessage=false;
							player.seek(oldTime);
							message(language['timeScheduleAdjust']['prohibitForward']);
							return;
						}
						break;
					case 4://只能前进但能回到第一次拖动时的位置
						if(seekingTime<firstSeekTime){ waitingmessage="false;" player.seek(firstseektime); message(language['timescheduleadjust']['prohibitlookback']); return; } break; case 5: 看过的地方可以随意拖动 if(seekingtime>maxSeeTime){
							waitingMessage=false;
							player.seek(maxSeeTime);
							message(language['timeScheduleAdjust']['prohibitForwardNotViewed']);
							return;
						}
						break;
				}
				eventTarget('seek',{time:seekingTime,state:'seeking'});
				eventTarget('seeking');
				if(!vars['live']){
					C['time'].htm(formatSeconds(seekingTime)+'/'+formatSeconds(duration));
					C['tempTime'].htm(formatSeconds(seekingTime)+'/'+formatSeconds(duration));
				}
				
			},
			waiting:function(){
				waited=false;
				eventTarget('buffer','start');//注册监听视频缓冲
				C['centerPlay'].hide();
				if(!vars['controls']){
					C['buffer'].show();
				}
				if(!waitingMessage){
					waitingMessage=true;
				}
				else{
					message(language['waiting']);
				}
				
			},
			play:function(){
				paused=false;
				C['bar']['playAndPause']['play'].hide();
				C['bar']['playAndPause']['pause'].show();
				C['bar']['playAndPause']['refresh'].hide();
				C['centerPlay'].hide();
				if(playType=='button'){
					C['bar']['pbox'].removeClass('ck-bar-progress-out');
				}
				else{
					C['bar']['pbox'].addClass('ck-bar-progress-out');
				}
				if(recoveryVolume){
					recoveryVolume=false;
					player.exitMuted();
				}
				hideBar();
				closePauseAd();//关闭暂停广告
				playType='';
				if(!isUndefined(C['ended'])){
					player.closeLayer(C['ended']);
				}
				if('error' in C){
					C['error'].hide();
				}
				eventTarget('play');
				if(!isUndefined(ad)){//如果存在广告
					if(!isUndefined(ad['front'])){//如果存在贴片广告
						if(isUndefined(ad['frontPlay'])){//如果贴片广告还未播放
							ad['frontPlayI']=0;
							ad['frontPlay']=true;//开始播放贴片广告
							player.pause();//暂停视频
							adFrontPlay();
							return;
						}
					}
				}
				if(seekTime && (isUndefined(vars['live']) || (!isUndefined(vars['live']) && valType(vars['live'])=='boolean' && !vars['live'])) && seekTime<parseInt(duration*100)*0.01){ 如果默认需要跳转，则进行seek player.seek(seektime); seektime="0;" } }, pause:function(){ paused="true;" if(isundefined(ad) || isundefined(ad['frontplay']) (!isundefined(ad['frontplay']) && !ad['frontplay'])){ 如果是贴片广告播放中，则进行播放和计算 if(!isundefined(ad) !isundefined(ad['pause'])){ if(isundefined(ad['pauseplayi'])){ 如果贴片广告还未播放 ad['pauseplayi']="0;" adpauseplay(); 播放暂停广告 else{ if(!vars['controls']){ c['centerplay'].show(); c['buffer'].hide(); c['bar']['playandpause']['pause'].hide(); c['bar']['playandpause']['play'].show(); c['bar']['playandpause']['refresh'].hide(); c['bar']['pbox'].removeclass('ck-bar-progress-out'); checkprogressslider(); eventtarget('pause'); c['bar'].removeclass('ck-bar-out'); cm.removeclass('ck-nocursor'); volumechange:function(){ if(this.volume="=0" !mutedstate){ this.muted="true;">0 && mutedState){
					this.muted=false;
				}
				if(mutedState!=this.muted){
					mutedState=this.muted;
					changeMuted(this.muted);
					CT.muted=this.muted;
					eventTarget('muted',CT.muted);//注册静音事件
				}
				CT.volume=this.volume;
				eventTarget('volume',this.volume);//注册音量事件
				if(!isUndefined(C['bar']['vbox'])){
					var vol=parseInt(this.volume*100);
					C['bar']['vbox']['volume']['txt'].htm(vol);
					if(!C['bar']['vbox']['mouseDown']){
						changeVolumeSlider(this.muted?0:this.volume);
					}
					if(!this.muted){//如果非静音状态
						message(language['volume']+vol+'%');
					}
				}
				replaceInformation('volume',parseInt(this.volume*100));
			},
			resize:function(){
				var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
				if(fullState) {
					C['bar']['fullAndExit']['exitFull'].show();
					C['bar']['fullAndExit']['full'].hide();
					C['ad']['bottom']['fullAndExit']['exitFull'].show();
					C['ad']['bottom']['fullAndExit']['full'].hide();
					if(!CM.hasClass('ck-main-full')){
						CM.addClass('ck-main-full');
					}
					message(language['full']);
					C['bar']['webFullAndExit'].hide();
					C['bar']['theatreAndExit'].hide();
					if(!isUndefined(C['menu'])){
						CM.append(C['menu']);
					}
				}
				else {
					fullState=false;
					C['bar']['fullAndExit']['full'].show();
				 	C['bar']['fullAndExit']['exitFull'].hide();
				 	C['ad']['bottom']['fullAndExit']['full'].show();
				 	C['ad']['bottom']['fullAndExit']['exitFull'].hide();
				 	if(CM.hasClass('ck-main-full')){
						CM.removeClass('ck-main-full');
					}
				 	if(!isUndefined(vars['webFull']) && vars['webFull']){
				 		C['bar']['webFullAndExit'].show();
				 	}
				 	if(!isUndefined(vars['theatre']) && !CT.webFull){
						C['bar']['theatreAndExit'].show();
					}
				 	if(!isUndefined(C['menu'])){
						$('body').append(C['menu']);
					}
				 	if(CV.css('width')!=CM.css('width')){
				 		player.zoom(100);
				 	}
				}
				if(CT.full!=fullState){
					CT.full=fullState;
					eventTarget('full',fullState);//注册播放事件
				}
				checkVideoRotate();
				changeProgress(player.time());
			},
			keydown:function(event){
				event=window.event || event;
				var keycode = event.keyCode || event.which;
				var v=player.volume();
				var pre=function(){
					if(event.preventDefault){
				        event.preventDefault();
				    }
				    else{
				        event.returnValue = false;
				    }
				};
				switch(keycode) {
					case 32:
					    pre();
						player.playOrPause();
						break;
					case 37:
						player.fastBack();
						break;
					case 39:
						player.fastNext();
						break;
					case 38:
						if(valType(vars['keyVolume'])=='number' && (vars['keyVolume']==1 || (vars['keyVolume']==2 && CT.full))){
							pre();
							player.volume(v+.1<1?v+=.1:1); } break; case 40: if(valtype(vars['keyvolume'])="='number'" && (vars['keyvolume']="=1" || ct.full))){ pre(); player.volume(v-.1>0?v-=.1:0);
						}
						break;
					default:
						break;
				}
			},
			mouseWheel:function(event){
				if(valType(vars['mouseWheelVolume'])=='number' && (vars['mouseWheelVolume']==1 || (vars['mouseWheelVolume']==2 && CT.full))){
					event=window.event || event;
					var v=player.volume();
					if(event.preventDefault){
				        event.preventDefault();
				    }
				    else{
				        event.returnValue = false;
				    }
					if(event.wheelDelta) {
						if(event.wheelDelta > 0) {
							player.volume(v+.1<1?v+=.1:1); } if(event.wheeldelta < 0) { player.volume(v-.1>0?v-=.1:0);
						}
					} else if(event.detail) {
						if(event.detail > 0) {
							player.volume(v-.1>0?v-=.1:0);
						}
						if(event.detail < 0) {
							player.volume(v+.1<1?v+=.1:1); } }; * adfrontplay 功能：播放贴片广告 var if(ad['frontplayi']="=0){//如果是播放第一个广告，则显示相关组件" allbarhide(false); c['ad'].show(); ad['front']['video']="false;//初始化，不包含视频广告" 判断是否需要启用固定时间后关闭广告按钮 if(!isundefined(ad['front']['closetime'])){ if(ad['front']['closetime']>0){
						C['ad']['top']['closeTime'].show();
						adFrontCloseTime();
					}
					else{
						C['ad']['top']['closeAd'].show();
					}
				}
			}
			if(!isUndefined(ad['front']['node']) && ad['front']['node']!=null){
				CM.append(ad['front']['node']);
				player.closeLayer(ad['front']['node']);
				ad['front']['node']=null;
			}
			C['ad']['picture'].htm('');
			C['ad']['picture'].hide();
			C['ad']['link'].hide();
			if(!isUndefined(ad['front']['list'][ad['frontPlayI']])){
				var adv=ad['front']['list'][ad['frontPlayI']];
				frontAdPlay=true;//贴片广告播放状态
				eventTarget('frontAd',adv);
				if(adv['type']=='picture'){
					adPicturePlay(adv);
				}
				else if(adv['type']=='node'){
					adNode(adv);
				}
				else{
					C['ad']['link'].attr('data-link',adv['link']);
					adVideoPlay(adv['file']);
				}
				if(!isUndefined(adv['link'])){
					C['ad']['bottom']['details'].show();
					C['ad']['bottom']['details'].htm('<a href="'+adv['link']+'" target="blank">'+language['details']+'</a>');
				}
				else{
					C['ad']['bottom']['details'].hide();
				}
			}
		},
		/*
		 * adFrontCloseTime
		 * 功能：播放贴片广告时按指定时间后显示关闭广告按钮
		*/
		adFrontCloseTime=function(){
			if(!isUndefined(ad['front']['closeSetTime'])){
				clearTimeout(ad['front']['closeSetTime']);
				ad['front']['closeSetTime']=null;
			}
			C['ad']['top']['closeTime'].htmReplace('{seconds}',ad['front']['closeTime'],language['closeTime']);
			ad['front']['closeTime']--;
			if(ad['front']['closeTime']>0){
				ad['front']['closeSetTime']=setTimeout(adFrontCloseTime,1000);
			}
			else{
				C['ad']['top']['closeAd'].show();
				C['ad']['top']['closeTime'].hide();
			}
		},
		/*
		 * calculationAdFrontTime
		 * 功能：计算贴片广告倒计时时间以及广告是视频时用于倒计时
		*/
		calculationAdFrontTime=function(t){
			if(!isUndefined(t)){
				ad['front']['list'][ad['frontPlayI']]['time']=t;
			}
			ad['front']['countDown']=0;
			for(var i=ad['frontPlayI'];i<ad['front']['list'].length;i++){ ad['front']['countdown']+="parseInt(ad['front']['list'][i]['time']);" } c['ad']['top']['countdown'].htm(ad['front']['countdown']+language['second']); }, * clearadfrontsettime 功能：关闭贴片广告倒计时的计时器 if(adfrontsettime){ cleartimeout(adfrontsettime); adfrontsettime="null;" adfrontcountdown 功能：贴片广告倒计时 clearadfrontsettime(); var adv="ad['front']['list'][ad['frontPlayI']];" if(adv['time']>0){
				adv['time']--;
				ad['front']['countDown']--;
				C['ad']['top']['countDown'].htm(ad['front']['countDown']+language['second']);
				adFrontSetTime=setTimeout(adFrontCountDown,1000);
			}
			else{
				adFrontEnded();
			}
		},
		/*
		 * adFrontEnded
		 * 功能：贴片广告单个播放完成后进行判断是否需要播放下一个广告还是播放正片
		*/
		adFrontEnded=function(){
			if(ad['frontPlayI']<ad['front']['list'].length-1){ ad['frontplayi']++; adfrontplay(); } else{ 贴片广告播放完成 if(!isundefined(ad['front']['node']) && ad['front']['node']!="null){" cm.append(ad['front']['node']); player.closelayer(ad['front']['node']); ad['front']['node']="null;" c['ad']['picture'].htm(''); c['ad']['picture'].hide(); ad['frontplay']="false;" c['ad'].hide(); allbarshow(); seektime="vars['seek'];" if(ad['front']['video']){ 如果包含视频广告 changevideo(vars['video']); player.play(); eventtarget('frontadended',true); frontadplay="false;//贴片广告播放状态" }, * advideoplay 功能：贴片广告播放视频 if(isundefined(vstr)) return; if(video.attr('src') || video.htm()){ player.pause(); if(video.attr('src')){ video.attr('src',''); video.removeattr('src'); video.htm(''); if(vars['plug'] !canplay(vstr)){ switch(vars['plug']){ case 'hls.js': hlsplayer(vstr); break; 'flv.js': flvplayer(vstr); 'mpegts.js': mpegtsplayer(vstr); default: ct.error="{code:10,message:language['error']['emptied']};" eventtarget('error',ct.error); 注册监听error showerror(); video.attr('src',vstr); ad['front']['video']="true;//设置包含视频广告" c['ad']['link'].show(); c['ad']['bottom']['mutedandexit'].show(); adpictureplay 功能：贴片广告播放图片 if(isundefined(adv['file'])) var img="null;" imgloadnum="0;" imgloadhandler="function(){" c['ad']['picture'].show(); c['ad']['picture'].append(img); img.addlistener('load',function(){ w="this.getWidth(),h=this.getHeight();" if(w>0 || h>0){
						if(adv['link']){
							var a=createlA('',adv['link']);
							a.append(this);
							C['ad']['picture'].append(a);
						}
						else{
							C['ad']['picture'].append(this)
						}
						img.unbind();
						img.click(function(){
							eventTarget('frontAdClick',adv);
						});
					}
					else{
						if(imgloadNum<10){ imgloadnum++; imgloadhandler(); } }); }; calculationadfronttime(); 计算时间 adfrontcountdown(); 开启倒计时 c['ad']['bottom']['mutedandexit'].hide(); }, * adnode 功能：贴片广告播放外部节点 if(isundefined(adv['content'])) return; ad['front']['node']="player.layer(adv);" ad['front']['node'].css({'z-index':1}); c['ad'].append(ad['front']['node']); ad['front']['node'].unbind(); ad['front']['node'].click(function(){ eventtarget('frontadclick',adv); frontvideoclickhandler 功能：视频广告上方层单击事件 var url="C['ad']['link'].attr('data-link');" window.open(url,'_blank'); closefrontad 功能：关闭贴片广告 if(!isundefined(ad) && !isundefined(ad['front']) !isundefined(ad['front']['closebuttonclick'])){ if(valtype(ad['front']['closebuttonclick'])="='function'){" try{ ad['front']['closebuttonclick'](); catch(event){console.error(event);} else eval(ad['front']['closebuttonclick']+ '()'); else{ player.closefrontad(); adpauseplay 功能：播放暂停广告 closepausead(); !isundefined(ad['pause']) !isundefined(ad['pause']['list']) ad['pause']['list'].length-1>=ad['pausePlayI']){
				var adv=ad['pause']['list'][ad['pausePlayI']];
				if(!isUndefined(ad['pause']['close']) && ad['pause']['close']){
					ad['pauseClose']=createlButton('ck-pause-close');
					ad['pauseClose'].click(function(){
						C['centerPlay'].show();
						C['buffer'].hide();
						closePauseAd();
					});
				}
				if(!isUndefined(adv['file'])){//图片
					var img = null;
					var imgloadNum=0;
					var imgLoadHandler=function(){
						img = createlImg(adv['file']);
						C['adPause'].show();
						C['adPause'].htm('');
						C['adPause'].append(img);
						img.addListener('load',function(){
							var w=this.getWidth(),h=this.getHeight();
							if(w>0 || h>0){
								C['adPause'].htm('');
								if(adv['link']){
									var a=createlA('',adv['link']);
									a.append(this);
									C['adPause'].append(a);
								}
								else{
									C['adPause'].append(this)
								}
							
								C['adPause'].css({
									'width':w+'px',
									'height':h+'px'
								});
								if(ad['pauseClose']){
									C['adPause'].append(ad['pauseClose']);
								}
								img.click(function(){
									eventTarget('pauseAdClick',adv);
								});
							}
							else{
								if(imgloadNum<10){ imgloadnum++; imgloadhandler(); } }); }; else if(!isundefined(adv['content'])){ ad['pause']['node']="player.layer(adv);" if(ad['pauseclose']){ ad['pause']['node'].append(ad['pauseclose']); ad['pause']['node'].click(function(){ eventtarget('pauseadclick',adv); eventtarget('pausead',adv); if(!isundefined(adv['time']) && adv['time']>0){
					adPauseSetTime=setTimeout(function(){
						ad['pausePlayI']++;
						if(ad['pausePlayI']>ad['pause']['list'].length-1){
							ad['pausePlayI']=0;
						}
						adPausePlay();
					},adv['time']*1000)
				}
			}
		},
		/*
		 * closePauseAd
		 * 功能：关闭暂停广告
		*/
		closePauseAd=function(){
			if(adPauseSetTime){
				clearTimeout(adPauseSetTime);
				adPauseSetTime=null;
			}
			C['adPause'].hide();
			if(!isUndefined(ad) && !isUndefined(ad['pauseClose']) && ad['pauseClose']!=null){
				ad['pauseClose'].remove();
				ad['pauseClose']=null;
			}
			if(!isUndefined(ad) && !isUndefined(ad['pause']) && !isUndefined(ad['pause']['node']) &&  ad['pause']['node']){
				ad['pause']['node'].unbind();
				player.closeLayer(ad['pause']['node']);
				eventTarget('pauseAdClose');
			}
		};
		/*
		 * player
		 * 功能:开放接口,向外部提供播放器的交互功能列表，包含获取，执行，监听这三种功能
		*/
		var player={
			/*
			 * width
			 * 功能：获取或设置播放器宽度
			 * 这是一个动态的值，会随着全屏切换或播放器本身尺寸变化而变化
			 * @value，支持数字，字符，当存在@value时则设置播放器宽度，@value为空时则获取播放器宽度
			*/
			width:function(value){
				if(!isUndefined(value)){
					if(valType(value)=='number'){
						value+='px';
					}
					CT.css({'width':value});
					checkVideoRotate();
				}
				return CK.getWidth();
			},
			/*
			 * height
			 * 功能：获取或设置播放器显示高度
			 * 这是一个动态的值，会随着全屏切换或播放器本身尺寸变化而变化
			 * @value，支持数字，字符，当存在@value时则设置播放器高度，@value为空时则获取播放器高度
			*/
			height:function(value){
				if(!isUndefined(value)){
					if(valType(value)=='number'){
						value+='px';
					}
					CT.css({'height':value});
					checkVideoRotate();
				}
				return CK.getHeight();
			},
			/*
			 * videoWidth
			 * 功能：获取视频本身的宽度，这是一个固定值
			*/
			videoWidth:function(){
				if(video){
					return video.videoWidth;
				}
				return null;
			},
			/*
			 * videoHeight
			 * 功能：获取视频本身的高度，这是一个固定值
			*/
			videoHeight:function(){
				if(video){
					return video.videoHeight;
				}
				return null;
			},
			/*
			 * height
			 * 功能：获取或设置播放器显示高度
			 * 这是一个动态的值，会随着全屏切换或播放器本身尺寸变化而变化
			 * @value，支持数字，字符，当存在@value时则设置播放器高度，@value为空时则获取播放器高度
			*/
			zoom:function(fn){
				if(!isUndefined(fn)){
					if(valType(fn)=='function'){
						newEvent.addEventListener('zoom',fn);
					}
					if(valType(fn)=='number'){
						var arr=[C['topBar']['zoomEle']['zoom50'],C['topBar']['zoomEle']['zoom75'],C['topBar']['zoomEle']['zoom100']];
						for(var i=0;i<arr.length;i++){ arr[i].removeclass('ck-top-bar-zoom-container-focus') } switch(fn){ case 50: arr[0].addclass('ck-top-bar-zoom-container-focus'); break; 75: arr[1].addclass('ck-top-bar-zoom-container-focus'); 100: arr[2].addclass('ck-top-bar-zoom-container-focus'); if(fn="=50" || fn="=75" nowzoom="fn;" checkvideorotate(); 调整视频尺寸 eventtarget('zoom',fn); return player; }, * rotate 提供给播放器外部使用 进行旋转 @obj为新的播放配置对象 rotate:function(fn){ if(!isundefined(fn)){ if(valtype(fn)="='function'){" newevent.addeventlistener('rotate',fn); var arr="[0,90,180,270];" rot="0;" if(arr.length>fn && fn>0){
							rot=arr[fn];
						}
						else{
							if(arr.indexOf(fn)>-1){
								rot=fn;
							}
						}
						if(rot!=nowRotate){
							eventTarget('rotate',rot);
							nowRotate=rot;
							checkVideoRotate();//调整视频尺寸
						}
					}
				}
			},
			/*
			 * vars
			 * 提供给播放器外部使用
			 * 修改vars，动态切换视频地址
			 * @obj为新的播放配置对象
			*/
			vars:function(obj,val){
				if(isUndefined(obj)){
					return;
				}
				if(valType(obj)=='string' && !isUndefined(val)){
					var temp={};
					temp[obj]=val;
					obj=temp;
				}
				var isChange=false;
				for(var k in obj){
					if(k in vars && obj[k]!=vars[k]){
						isChange=true;
						break;
					}
				}
				if(isChange){
					vars = standardization(vars, obj);
				}
				if(!isUndefined(obj['video'])){
					isChangeDef=true;
					changeVideo(vars['video']);
				}
				if(!isUndefined(obj['title'])){
					C['topBar']['titleEle'].htm(obj['title']);
				}
			},
			/*
			 * 提供给播放器外部使用
			 * 功能：监听视频准备加载
			*/
			loadstart:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('loadstart',fn);
				}
			},
			/*
			 * 提供给播放器外部使用
			 * 功能：监听视频加载
			*/
			loadeddata:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('loadeddata',fn);
				}
			},
			/*
			 * 提供给播放器外部使用
			 * 功能：监听视频元数据加载成功
			*/
			loadedMetaData:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('loadedMetaData',fn);
				}
			},
			/*
			 * 提供给播放器外部使用
			 * 功能：监听视频可以播放
			*/
			canplay:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('canplay',fn);
				}
			},		
			/*
			 * 提供给播放器外部使用
			 * 功能：执行播放操作/监听播放
			 * @fn为函数时则监听视频播放，@fn为空时，则控制视频播放
			*/
			play:function(fn){
				if(valType(fn)=='object'){
					if(fn['target']==C['bar']['playAndPause']['play'] || fn['target']==C['bar']['playAndPause']['refresh']){
						playType='button';
					}
				}
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('play',fn);
				}
				else{
					if(loadedmetadataNum>0 && video){
						try{video.play();}catch(event){console.error(event)}
					}
				}
				return player;
			},
			/*
			 * puase
			 * 功能：执行暂停操作/监听暂停
			 * @fn为函数时则监听视频暂停，@fn为空时，则控制视频暂停
			*/
			pause:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('pause',fn);
				}
				else{
					if(loadedmetadataNum>0 && video){
						try{video.pause();}catch(event){console.error(event)}
					}
				}
				return player;
			},
			/*
			 * playOrPause
			 * 功能：在播放和暂停动作之间进行切换
			*/
			playOrPause:function(){
				if(paused){
					player.play();
				}
				else{
					player.pause();
				}
				return player;
			},
			/*
			 * volume
			 * 功能：调节和监听以及获取音量
			 * @fn为函数时，则进行音量变化的监听，@fn为数字时，则进行音量调节，@fn为空时，则获取当前音量
			*/
			volume:function(fn){
				if(!isUndefined(fn)){
					if(valType(fn)=='function'){
						newEvent.addEventListener('volume', fn);
					}
					else if(valType(fn)=='number' && video){
						if(fn<0)fn=0; if(fn>1)fn=1;
						if(video.muted){
							video.volume=fn*.5;
						}
						video.volume=fn;
					}
				}
				else if(video){
					return video.volume;
				}
				return player;
			},
			/*
			 * muted
			 * 功能：执行静音操作/监听静音
			 * @fn为函数时则监听视频静音，@fn为空时，则控制视频静音
			*/
			muted:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('muted', fn);
				}
				else if(video){
					video.muted=true;
				}
				return player;
			},
			/*
			 * exitMuted
			 * 功能：执行取消静音操作
			*/
			exitMuted:function(){
				if(video){
					video.muted=false;
					if(video.volume==0){
						player.volume(vars['volume']>0?vars['volume']:.8);
					}
				}
				return player;
			},
			/*
			 * time
			 * 功能：获取当前播放时间/监听播放时间
			 * @fn为函数时监听当前播放时间，为空时获取当前播放时间
			*/
			time:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('time',fn);
				}
				else if(video){
					return video.currentTime || 0;
				}
			},
			/*
			 * seek
			 * 功能：监听跳转/执行跳转操作
			 * @fn为函数时则监听视频跳转动作，@fn为数字时执行跳转操作
			*/
			seek:function(fn){
				if(!isUndefined(fn)){
					if(valType(fn)=='function'){
						newEvent.addEventListener('seek',fn);
					}
					if(valType(fn)=='number' && video){
						switch(vars['timeScheduleAdjust']){
							case 0://禁止拖动
								message(language['timeScheduleAdjust']['prohibit']);
								return;
								break;
							case 1://可以拖动
								break;
							case 2://只能前进（向右拖动
								if(fn<oldTime){ message(language['timescheduleadjust']['prohibitbackoff']); return; } break; case 3: 是只能后退 if(fn>oldTime){
									message(language['timeScheduleAdjust']['prohibitForward']);
									return;
								}
								break;
							case 4://只能前进但能回到第一次拖动时的位置
								if(fn<firstSeekTime){ waitingmessage="false;" video.currenttime="firstSeekTime;" message(language['timescheduleadjust']['prohibitlookback']); return; } break; case 5: 看过的地方可以随意拖动 if(fn>maxSeeTime){
									waitingMessage=false;
									video.currentTime=maxSeeTime;
									message(language['timeScheduleAdjust']['prohibitForwardNotViewed']);
									return;
								}
								break;
						}
						pSliderMouseDown=false;
						video.currentTime=fn;
					}
				}
				return player;
			},
			/*
			 * buffer
			 * 功能：监听视频缓冲
			 * @fn为监听执行的函数
			*/
			buffer:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('buffer',fn);
				}
				return player;
			},
			/*
			 * ended
			 * 功能：监听视频播放结束
			 * @fn为监听执行的函数
			*/
			ended:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('ended',fn);
				}
				return player;
			},
			/*
			 * 提供给播放器外部使用
			 * 功能：监听点击下一集按钮的动作
			*/
			next:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('next',fn);
				}
				return player;
			},	
			/*
			 * error
			 * 功能，监听播放器在加载视频过程和播放视频过程中出现的错误
			 * @fn为监听执行的函数
			*/
			error:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('error',fn);
				}
				return player;
			},
			/*
			 * emptied
			 * 功能，监听播放器播放的视频文件发生故障并且文件突然不可用时
			 * @fn为监听执行的函数
			*/
			emptied:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('emptied',fn);
				}
				return player;
			},
			/*
			 * duration
			 * 功能：获取视频总时间/监听视频总时间
			 * @fn为函数时执行监听视频总时间，为空时获取视频总时间
			*/
			duration:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('duration',fn);
				}
				else{
					return duration || 0;
				}
			},
			/*
			 * playbackRate
			 * 功能：监听或返回视频播放速度
			 * @fn为函数时执行监听视频播放速度，为数字时切换播放速度，为空时获取视频播放速度
			*/
			playbackRate:function(fn){
				if(!isUndefined(fn)){
					if(valType(fn)=='function'){
						newEvent.addEventListener('playbackRate',fn);
					}
					else if(valType(fn)=='number' && video){
						video.playbackRate=fn;
						CT.playbackRate=fn;
						eventTarget('playbackRate',fn);
						changePlaybackrateVal(fn);
					}
					
				}
				else{
					return video.playbackRate;
				}
			},
			/*
			 * track
			 * 功能：监听或返回视频的字幕
			 * @fn为函数时执行监听视频字幕，为数字时切换字幕，为空时获取字幕
			*/
			track:function(fn){
				if(!isUndefined(fn)){
					if(valType(fn)=='function'){
						newEvent.addEventListener('track',fn);
					}
					else if(valType(fn)=='number' && video){
						var track=null;
						if(!isUndefined(video.textTracks)){
							track=video.textTracks;
						}
						if(track && valType(track)=='texttracklist'){
							var arr=vars['track'];
							for(var i=track.length-1;i>-1;i--){
								video.find('track').eq(i).remove();
							}
							for(var i=0;i<arr.length;i++){ var def ; arr[i]['default']="false;" if(i="=fn){" } track+="<track src="" +arr[i]['src']+'" srclang="'+arr[i]['srclang']+'" kind="'+arr[i]['kind']+'" label="'+arr[i]['label']+'" '+def+'>';
							}
							if(video){
								var html=video.htm()+track;
								video.htm(html);
							}
							changeTrackVal(fn);
						}
					}
					
				}
				else{
					return CT.track;
				}
			},
			/*
			 * fastBack
			 * 功能：快退
			 * @num为数字时快退指定秒数，为空时快退20秒
			*/
			fastBack:function(num){
				if(duration==0) return;
				if(isUndefined(num) || valType(num)!='number'){
					num=20;
				}
				var time=player.time();
				if(time-num>0){
					time-=num;
				}
				else{
					time=0;
				}
				player.seek(time);
				return player;
			},
			/*
			 * fastNext
			 * 功能：快进
			 * @num为数字时快进指定秒数，为空时快进20秒
			*/
			fastNext:function(num){
				if(duration==0) return;
				if(isUndefined(num) || valType(num)!='number'){
					num=20;
				}
				var time=player.time();
				if(time+num<duration){ time+="num;" } else{ time="duration;" player.seek(time); return player; }, * definition 功能：监听清晰度切换 操作清晰度切换 @fn为一个函数时监听清晰度切换，为数字时执行清晰度切换，数字为清晰度的编号，从0开始 definition:function(fn){ if(!isundefined(fn)){ if(valtype(fn)="='function'){" newevent.addeventlistener('definition',fn); changedefinition(fn); fps 功能：监听fps @fn为一个函数时监听fps，为空时获取fps fps:function(fn){ if(!isundefined(fn) && valtype(fn)="='function'){" newevent.addeventlistener('fps',fn); ct.fps; playback 功能：监听回放操作 返回需要回放的时间点 playback:function(fn){ newevent.addeventlistener('playback',fn); playbacktime; backlive 功能：显示 隐藏回到直播的按钮 backlive:function(fn){ newevent.addeventlistener('backlive',fn); if(bool){ c['bar']['backlive'].show(); c['bar']['backlive'].hide(); full 功能：监听全屏功能 执行全屏操作 @fn为函数时监听用户执行全屏操作，为空时执行全屏操作 full:function(fn){ newevent.addeventlistener('full',fn); if(smallwindowsstate){ return; if(ct.theatre){ player.exittheatre(); if(ct.webfull){ player.exitwebfull(); var requestmethod="CK.requestFullScreen" || w3c ck.webkitrequestfullscreen chrome等 ck.mozrequestfullscreen firefox ck.orequestfullscreen ck.msrequestfullscreen; ie11 if (!isundefined(requestmethod)) { requestmethod.call(ck); else (!isundefined(window.activexobject)) for internet explorer wscript="new" activexobject('wscript.shell'); (wscript !="=" null) wscript.sendkeys('{f11}'); if(!isundefined(video.webkitenterfullscreen) !isundefined(video.webkitenterfullscreen)){ fullscreen="video.webkitEnterFullscreen" video.webkitenterfullscreen; fullscreen.call(video); player.zoom(100); exitfull 功能： 退出全屏 exitfull:function(){ exitfullfun="document.exitFullscreen" document.mozcancelfullscreen document.webkitexitfullscreen document.ocancelfullscreen document.msexitfullscreen; (!isundefined(exitfullfun)) exitfullfun.call(document); fullorexit 功能：在全屏和退出全屏之间进行切换 fullorexit:function(){ fullstate="document.fullScreen" document.mozfullscreen document.webkitisfullscreen document.msfullscreenelement; if(fullstate){ player.exitfull(); player.full(); webfull 功能：监听网页全屏 执行网页全屏 @fn为函数时监听网页全屏，为空时执行网页全屏 webfull:function(fn){ newevent.addeventlistener('webfull',fn); exitsmallwindows(); if(!isundefined(vars['theatre'])){ c['bar']['theatreandexit'].hide(); ck.css({ 'position':'fixed', 'top':0, 'left':0, 'height':'100%', 'z-index':getmaxzindex()+1 }); c['bar']['webfullandexit']['webfull'].hide(); c['bar']['webfullandexit']['exitwebfull'].show(); ct.webfull="true;" eventtarget('webfull',true); checkvideorotate(); exitwebfull 功能：退出网页全屏 exitwebfull:function(){ 'position':'relative' c['bar']['webfullandexit']['webfull'].show(); c['bar']['webfullandexit']['exitwebfull'].hide(); c['bar']['theatreandexit'].show(); c['bar']['theatreandexit']['theatre'].show(); c['bar']['theatreandexit']['exittheatre'].hide(); ck.attr('style',''); eventtarget('webfull',false); theatre 功能：监听剧场模式 执行剧场模式 @fn为函数时执行监听剧场模式，为空时执行剧场模式操作 theatre:function(fn){ newevent.addeventlistener('theatre',fn); if(valtype(vars['theatre'])="='array'" vars['theatre'].length="=2){" fun="vars['theatre'][0];" if(valtype(fun)="='function'){" fun(); eval(fun+ '()'); 'position':'absolute', 'top':ct.offset()['top'], 'height':ct.getheight()+'px', c['bar']['theatreandexit']['theatre'].hide(); c['bar']['theatreandexit']['exittheatre'].show(); ct.theatre="true;" eventtarget('theatre',true); exittheatre 功能：退出剧场模式 exittheatre:function(){ eventtarget('theatre',false); smallwindows 功能：监听小窗口模式开启关闭 执行开启关闭小窗口模式 smallwindows:function(fn){ newevent.addeventlistener('smallwindows',fn); if(fn){ c['rightbar']['smallwindows']['open'].show(); c['rightbar']['smallwindows']['close'].hide(); ct.smallwindows="true;" c['rightbar']['smallwindows']['open'].hide(); c['rightbar']['smallwindows']['close'].show(); eventtarget('smallwindows',ct.smallwindows); ct.smallwindows; loop 功能：监听循环 执行开启关闭循环功能 @fn为函数时是监听循环，@fn为boolean类型时，为true开启循环，为false关闭循环，@fn为空时获取当前循环状态 loop:function(fn){ newevent.addeventlistener('loop',fn); video){ c['rightbar']['loop']['open'].show(); c['rightbar']['loop']['close'].hide(); ct.loop="true;" video.attr('loop','loop'); eventtarget('loop',true); c['rightbar']['loop']['open'].hide(); c['rightbar']['loop']['close'].show(); video.attr('loop',false); video.removeattr('loop'); eventtarget('loop',false); ct.loop; screenshot 功能：截图 @fn为函数时监听截图功能，@fn为空时进行截图 screenshot:function(fn){ newevent.addeventlistener('screenshot',fn); if(!isundefined(vars['screenshot']) vars['screenshot'] try message(language['screenshotstart'],true); newcanvas="$(document.createElement('canvas'));" newcanvas.width="video.videoWidth;" newcanvas.height="video.videoHeight;" newcanvas.getcontext('2d').drawimage(video, 0, video.videowidth, video.videoheight); base64="newCanvas.toDataURL('image/png');" eventtarget('screenshot',base64); if(screenshotimg){ screenshotimg.remove(); screenshotimg="null;" screenshotimg.addlistener('load',function(){ c['screenshot']['img'].append(screenshotimg); c['screenshot'].show().css({'width':this.getwidth()+'px'}); newblob="dataURLtoBlob(base64);" url="URL.createObjectURL(newBlob);" downname="video" ; if(vars['title']){ c['screenshot']['bar']['down'].attr('href',url).attr('download',downname); base64; }catch(error) message(language['error']['screenshot'],true); message(language['screenshotclose'],true); closescreenshot 功能：关闭截图显示容器 closescreenshot:function(bool){ if(!isundefined(bool) valtype(bool)="='boolean'" !bool){ c['screenshot'].show(); c['screenshot'].hide(); layer 功能：在播放器中添加一个层 layer:function(obj,bar){ if(isundefined(obj)){ null; cbar="false;" if(!isundefined(bar)){ ele="null;" if(valtype(obj)="='object'){" if('class' in obj 'content' obj){ ele.htm(obj['content']); if('content' if(obj.substr(0,1)="='.'" obj.substr(0,1)="='#'){" ele.htm(obj); if(ele){ zindex="ele.css('z-index');" if(zindex="='auto'){" if(zindex<101)>200) zIndex=200;
					if(isUndefined(ele.cssDisplay)){
						ele.cssPosition=ele.css('position');
						ele.cssDisplay=ele.css('display');
					}
					ele.css({
						'position': 'absolute',
						'z-index':zIndex
					});
					if(!cBar){
						CM.append(ele);
					}
					else{
						C['bar'].append(ele);
					}
					ele.CK=CK;
					ele.show();
				}
				return ele;
			},
			/*
			 * closeLayer
			 * 功能：关闭一个层
			*/
			closeLayer:function(ele){
				if(valType(ele)=='string'){
					var temp=$(ele);
					if(!isUndefined(temp)){
						if(temp.length>0){
							ele=temp.eq(0);
						}
					}
				}
				if(!isUndefined(ele) && valType(ele)=='htmlobject'){
					if(!isUndefined(ele.captureParentNode)){
						var eleP=ele.captureParentNode;
						if (ele.nextElement) {
							try {
								eleP.insertBefore(ele, ele.nextElement);
							}
							catch (event) {
								eleP.append(ele);
							}
						}
						else if (ele.prevElement) {
							try {
								eleP.insertAfter(ele, ele.prevElement);
							}
							catch (event) {
								eleP.append(ele);
							}
						}
						else {
							eleP.append(ele);
						}
						ele.css({'display':ele.cssDisplay});
					}
					else{
						ele.remove();
					}
					if(!isUndefined(ele.cssDisplay)){
						ele.css({
							'display':ele.cssDisplay,
							'position':ele.cssPosition
						});
					}
				}
				return player;
			},
			/*
			 * message
			 * 在播放器内部显示一条提示信息
			*/
			message:function(str){
				message(str);
				return player;
			},
			/*
			 * closeFrontAd
			 * 功能：关闭贴片广告 
			*/
			closeFrontAd:function(){
				if(frontAdPlay && !isUndefined(ad) && !isUndefined(ad['front']) && !isUndefined(ad['front']['list'])){
					ad['frontPlayI']=ad['front']['list'].length-1;
					adFrontEnded();
					clearAdFrontSetTime();
				}
				return player;
			},
			/*
			 * addListener
			 * 功能：监听功能 
			*/
			addListener:function(name,fn){
				newEvent.addEventListener(name,fn);
			},
			/*
			 * removeListener
			 * 功能：监听功能 
			*/
			removeListener:function(name,fn){
				newEvent.removeEventListener(name,fn);
			},
			/*
			 * bar
			 * 功能：显示/关闭底部控制栏 
			*/
			bar:function(bool){
				barShow=bool;
				if(bool){
					C['bar'].show();
				}
				else{
					C['bar'].hide();
				}
			},
			/*
			 * rightBar
			 * 功能：显示/关闭右边控制栏 
			*/
			rightBar:function(bool){
				rightBarShow=bool;
				if(bool){
					C['rightBar'].show();
				}
				else{
					C['rightBar'].hide();
				}
			},
			/*
			 * mouseActive
			 * 功能，监听鼠标是否经过播放器
			*/
			mouseActive:function(fn){
				if(!isUndefined(fn) && valType(fn)=='function'){
					newEvent.addEventListener('mouseActive',fn);
				}
				return this;
			},
			/*
			 * cookie
			 * 功能，读取cookie
			*/
			cookie:function(name){
				if(name=='delete'){
					cookie(ckplayerCookie,'delete',vars['domain']);
					return null;
				}
				if(!isUndefined(name) && name){
					name=name.replace(/[ ]*,[ ]*|[ ]+/g, '').replace(/[ ]*;[ ]*|[ ]+/g, '');
				}
				var cStr=cookie(ckplayerCookie);
				if(cStr){
					var arr=stringToArray(cStr);
					var tempArr=[];
					var cTime=parseInt(Date.now()*0.001);
					for(i=0;i<arr.length;i++){ if(parseint(arr[i][2])>cTime){
							tempArr.push(arr[i]);
						}
					}
					arr=tempArr;
					if(arr.length>0){
						cookie(ckplayerCookie,'delete',vars['domain'],vars['cookiePath']);
						cookie(ckplayerCookie,arrayToString(arr),vars['domain'],vars['cookiePath']);
						for(var i=0;i<arr.length;i++){ arr[i]="{" name:arr[i][0], time:arr[i][1], expirationtime:date('y-m-d h:i:s',arr[i][2]), expirationtimestamp:arr[i][2] }; if(!isundefined(name) && name="=arr[i]['name']){" return arr[i]; } arr; else{ cookie(ckplayercookie,'delete',vars['domain'],vars['cookiepath']); null; }, * visibilitystate 功能：监听当前文档是否处于焦点状态 visibilitystate:function(fn){ if(!isundefined(fn) valtype(fn)="='function'){" if(!isundefined(document.visibilitystate)){ fn(document.visibilitystate="==" 'visible'?'show':'hidden'); newevent.addeventlistener('visibilitystate',fn); this; remove 功能：卸载播放器 remove:function(){ var eventtemp="{};" if(eventtargetlist!="null){" for(var k in eventtargetlist){ eventtemp[k]="eventTargetList[k];" eventtemp){ temp="eventTemp[k];" if(temp){ i="0;i<temp.length;i++){" eve="temp[i];" newevent.removeeventlistener(k,eve); if(frontadplay){ this.closefrontad(); if(pugplayer){ pugplayer.pause(); pugplayer.unload(); pugplayer.detachmediaelement(); pugplayer.destroy(); pugplayer="null;" if(hls){ hls.stopload(); hls.detachmedia(); loadedmetadatanum="0;" loadedtrack="false;" ischangedef="true;" if(video){ video.unbind(); video.remove(); video="null;" if(!isundefined(c['menu'])){ c['menu'].remove(); if(ct){ ct.unbind(); ct.htm(''); checkbar 功能：完全获取vars值后判断控制栏上的按钮是否需要显示 完全获取vars是指视频加载成功后 初始化判断 if(vars['autoplay']){ c['bar']['playandpause']['play'].hide(); c['bar']['playandpause']['pause'].show(); c['bar']['playandpause']['play'].show(); c['bar']['playandpause']['pause'].hide(); if(mutedstate){ c['bar']['vbox']['muted'].hide(); c['bar']['vbox']['exitmuted'].hide(); if(!isundefined(vars['next'])){ c['bar']['nextepisode'].show(); c['bar']['nextepisode'].hide(); if(!isundefined(vars['webfull']) vars['webfull'] !ct.full){ c['bar']['webfullandexit'].show(); c['bar']['webfullandexit'].hide(); if(!isundefined(vars['theatre']) !ct.full !ct.webfull){ c['bar']['theatreandexit'].show(); c['bar']['theatreandexit'].hide(); if(!isundefined(vars['rightbar']) vars['rightbar']){ c['rightbar'].show(); c['rightbar'].hide(); if(!vars['live'] || valtype(vars['live'])="='number'){" pslidermousedown="false;" progressdragx(); 注册进度滑块动作 if(vars['live'] c['time'].htm(language['live']); c['temptime'].htm(language['live']); if(valtype(vars['smallwindows'])="='boolean'" !vars['smallwindows']){ ct.smallwindows="false;" c['rightbar']['smallwindows']['open'].hide(); c['rightbar']['smallwindows']['close'].show(); if(ct.loop){ c['rightbar']['loop']['open'].show(); c['rightbar']['loop']['close'].hide(); c['rightbar']['loop']['open'].hide(); c['rightbar']['loop']['close'].show(); if(!isundefined(vars['backlive']) vars['backlive']){ c['bar']['backlive'].show(); if(vars['volume']="=0){" player.muted(); loadlogo 功能：加载logo if(!isundefined(vars['logo']) isundefined(c['logo'])){ c['logo']="createlDiv('ck-logo');" createlimg(vars['logo']).addlistener('load',function(){ cm.append(c['logo']); c['logo'].append(this); }).addlistener('error',function(){c['logo'].remove()}); loadabout 功能：加载loadabout if(!isundefined(vars['information']) !isundefined(c['about']) valtype(vars['information'])="='object'){" obj="vars['information'];" ; ul="$(document.createElement('ul'));" for(k obj){ title="createlDiv('div').attr('class','ck-about-title');" content="createlDiv('div').attr('class','ck-about-content');" li="$(document.createElement('li'));" title.htm(k); content.htm(obj[k]); li.append(title); li.append(content); ul.append(li); temp+="k+':'+obj[k]+'\n';" c['about'].append(ul); c['about']['textareatext']="temp;" c['about']['textareaele']="$(document.createElement('textarea'));" cm.append(c['about']['textareaele']); c['about']['textareaele'].hide() loadmenu 功能：加载右键 if(!isundefined(vars['menu']) vars['menu']){ rightmenu="vars['menu'];" c['menu']="createlDiv('ckplayer-ckplayer-menu');" m="rightMenu[i];" if(!isundefined(m['underline'])){ li.addclass('ck-underline'); if(!isundefined(m['link']) !isundefined(m['title'])){ li.append(createla(m['title'],m['link'])); c['menu'].append(li); else if(!isundefined(m['javascript']) li.append(createljslink(m['title'],m['javascript'])); if(!isundefined(m['click']) a="createlJsLink(m['title']);" a.attr('data-click',m['click'].tostring()); a.click(function(){ eval($(this).attr('data-click')+'()'); c['menu'].hide(); }); li.append(a); if(!isundefined(m['title'])){ li.htm(m['title']); $('body').append(c['menu']); cm.oncontextmenu="function(eve)" { e="eve" window.event; client="getClient(e);" if (e.button="=" 2) e.returnvalue="false;" x="client['x']" - 2; y="client['y']" c['menu'].show(); c['menu'].css({ left: + 'px', top: 'px' false; true; menusettimeout="null;" cleartime="function(){" if(menusettimeout){ cleartimeout(menusettimeout); menumouseout="function(){" cleartime(); },200); c['menu'].mouseout(menumouseout); c['menu'].mouseover(cleartime); aboutshow 功能：显示关于视频 c['about'].show(); abouthide c['about'].hide(); aboutcopy 功能：拷贝关于视频内容 c['about']['textareaele'].show(); c['about']['textareaele'].select(); document.execcommand('copy'); 执行浏览器复制命令 c['about']['textareaele'].hide(); message(language['copysucceeded'],true); getbarheight 功能：获取控制栏的高 h="C['bar'].getHeight();" if(parsefloat(c['bar']['pbox'].css('top'))<0){ h-="parseInt(C['bar']['pbox'].css('top'));" h; hidebar 功能：隐藏控制栏，只在播放状态下有效 if(mousesettime){ cleartimeout(mousesettime); mousesettime="null;" if(!paused){ c['bar'].addclass('ck-bar-out'); eventtarget('mouseactive',false); if(ct.full){ cm.addclass('ck-nocursor'); if(c['rightbar'].css('display')="='block'){" c['rightbar'].addclass('ck-right-bar-hide'); if(c['topbar'].css('display')="='block'){" c['topbar'].addclass('ck-top-bar-hide'); },vars['barhidetime']); barmouseout 功能：鼠标离开控制栏修改播放进度框样式 c['bar']['pbox'].addclass('ck-bar-progress-out'); hidebar(); barmouseover 功能：鼠标经过控制栏修改播放进度框样式 c['bar']['pbox'].removeclass('ck-bar-progress-out'); rightbarmouseout 功能：鼠标离开右侧控制栏修改播放进度框样式 rightbarmouseover 功能：鼠标经过右侧控制栏修改播放进度框样式 checkplaybackrate 功能：初始化或重置倍速组件内容 playbackrate="vars['playbackrateList'];" pbr="vars['playbackrate'];" c['bar']['playbackrate']['bg']="createlDiv('ck-list-bg');" c['bar']['playbackrate']['bgbox'].append(c['bar']['playbackrate']['bg']); c['bar']['playbackrate']['bg']['p']="[];">-1;i--){
				var pTemp=createlButton('ck-list-p',playbackrate[i]+language['playbackrateSuffix']);
				pTemp.attr('data-i',i).attr('data-val',playbackrate[i]);
				C['bar']['playbackrate']['bg']['p'].push(pTemp);
				C['bar']['playbackrate']['bg'].append(pTemp);
				pTemp.click(playbackrateClick);
			}
			C['bar']['playbackrate'].hide();
			if(!isUndefined(vars['playbackrateOpen']) && vars['playbackrateOpen']){
				C['bar']['playbackrate'].show();
				C['bar']['playbackrate']['bgbox'].show();
				var w=C['bar']['playbackrate']['bg'].getWidth(),h=C['bar']['playbackrate']['bg'].getHeight();
				var bw=C['bar']['playbackrate']['button'].getWidth();
				C['bar']['playbackrate']['bg'].css({'width':w+10+'px'});
				w=C['bar']['playbackrate']['bg'].getWidth();
				if(getBarHeight()>C['bar'].getHeight()){
					h+=(getBarHeight()-C['bar'].getHeight());
				}
				C['bar']['playbackrate']['bgbox'].attr('style','');
				C['bar']['playbackrate']['bgbox'].css({
					'width':w+'px',
					'height':(h+2)+'px',
					'left':-(w-bw)*0.5+'px'
				});
				C['bar']['playbackrate']['button'].mouseover(function(){
					w=C['bar']['playbackrate']['bg'].getWidth();
					bw=C['bar']['playbackrate']['button'].getWidth();
					C['bar']['playbackrate']['bgbox'].css({			
						'left':-(w-bw)*0.5+'px'
					});
				});
				changePlaybackrateVal(pbr);
			}
		},
		/*
		 * playbackrateClick
		 * 功能：选择播速
		*/
		playbackrateClick=function(e){
			C['bar']['playbackrate']['bgbox'].hide();
			setTimeout(function(){C['bar']['playbackrate']['bgbox'].removeCss('display');},300);
			message(language['switchTo']+$(this).htm());
			player.playbackRate(parseFloat($(this).attr('data-val')));
		},
		/*
		 * changePlaybackrateVal
		 * 功能：根据速度检查播速
		*/
		changePlaybackrateVal=function(num){
			C['bar']['playbackrate']['bg'].find('button').each(function(index,ele){
				var val=parseFloat(ele.attr('data-val'));
				ele.removeClass('ck-list-p-focus');
				if(num==val){
					ele.addClass('ck-list-p-focus');
					if(num!=1){
						C['bar']['playbackrate']['button'].htm(ele.htm());
					}
					else{
						C['bar']['playbackrate']['button'].htm(language['playbackrate']);
					}
				}
				else{
					ele.removeClass('ck-list-p-focus');
				}
			});
		},
		/*
		 * checkTrack
		 * 功能：初始化或重置字幕组件内容
		*/
		checkTrack=function(){
			var track=vars['track'];
			var pbr=-1;
			C['bar']['track']['bgbox'].htm('');
			C['bar']['track']['bg']=createlDiv('ck-list-bg');
			C['bar']['track']['bgbox'].append(C['bar']['track']['bg']);
			C['bar']['track']['bg']['p']=[];
			var pTemp=null;
			for(var i=track.length-1;i>-1;i--){
				pTemp=createlButton('ck-list-p',track[i]['label']);
				pTemp.attr('data-i',i).attr('data-title',track[i]['label']);
				C['bar']['track']['bg']['p'].push(pTemp);
				C['bar']['track']['bg'].append(pTemp);
				if(!isUndefined(track[i]['default']) && track[i]['default']){
					pbr=i;
				}
				pTemp.click(trackClick);
			}
			//
			pTemp=createlButton('ck-list-p',language['noTrack']);
			pTemp.attr('data-i',-1).attr('data-title',language['noTrack']);
			C['bar']['track']['bg']['p'].push(pTemp);
			C['bar']['track']['bg'].append(pTemp);
			pTemp.click(trackClick);
			//
			C['bar']['track'].hide();
			C['bar']['track'].show();
			C['bar']['track']['bgbox'].show();
			var w=C['bar']['track']['bg'].getWidth(),h=C['bar']['track']['bg'].getHeight();
			var bw=C['bar']['track']['button'].getWidth();
			C['bar']['track']['bg'].css({'width':w+10+'px'});
			w=C['bar']['track']['bg'].getWidth();
			if(getBarHeight()>C['bar'].getHeight()){
				h+=(getBarHeight()-C['bar'].getHeight());
			}
			C['bar']['track']['bgbox'].attr('style','');
			C['bar']['track']['bgbox'].css({
				'width':w+'px',
				'height':(h+2)+'px',
				'left':-(w-bw)*0.5+'px'
			});
			C['bar']['track']['button'].mouseover(function(){
				w=C['bar']['track']['bg'].getWidth();
				bw=C['bar']['track']['button'].getWidth();
				C['bar']['track']['bgbox'].css({			
					'left':-(w-bw)*0.5+'px'
				});
			});
			changeTrackVal(pbr);
		},
		/*
		 * trackClick
		 * 功能：选择字幕
		*/
		trackClick=function(e){
			C['bar']['track']['bgbox'].hide();
			setTimeout(function(){C['bar']['track']['bgbox'].removeCss('display');},300);
			message(language['switchTo']+$(this).attr('data-title'));
			player.track(parseFloat($(this).attr('data-i')));
		},
		/*
		 * changeTrackVal
		 * 功能：根据字幕检查
		*/
		changeTrackVal=function(num){
			C['bar']['track']['bg'].find('button').each(function(index,ele){
				var i=parseInt(ele.attr('data-i'));
				if(num==i){
					C['bar']['track']['button'].htm(ele.attr('data-title'));
					if(i>-1){
						CT.track=vars['track'][i];
						eventTarget('track',vars['track'][i]);
					}
					else{
						CT.track=null;
						eventTarget('track',null);
					}
					ele.addClass('ck-list-p-focus');
				}
				else{
					ele.removeClass('ck-list-p-focus');
				}
			});
		},
		/*
		 * checkDefinition
		 * 功能：初始化或重置清晰度组件内容
		*/
		checkDefinition=function(){
			var pi=-1;
			var videoUrl=video['currentSrc'];
			if(!isUndefined(C['bar']['definition']['bg'])){
				C['bar']['definition']['bgbox'].htm('');
				C['bar']['definition']['bgbox'].attr('style','');
				C['bar']['definition']['button'].htm(language['definition']);
			}
			if(valType(vars['video'])=='array'){
				var arr=vars['video'];
				C['bar']['definition']['bg']=createlDiv('ck-list-bg');
				C['bar']['definition']['bgbox'].append(C['bar']['definition']['bg']);
				C['bar']['definition']['bg']['p']=[];
				for(var i=arr.length-1;i>-1;i--){
					var pTemp=createlButton('ck-list-p',arr[i][2]);
					pTemp.attr('data-i',i).attr('data-video',arr[i][0]).attr('data-type',arr[i][1]).attr('data-title',arr[i][2]);
					C['bar']['definition']['bg']['p'].push(pTemp);
					C['bar']['definition']['bg'].append(pTemp);
					if(videoUrl && videoUrl.indexOf(arr[i][0])>-1){
						pi=i;
					}
					pTemp.click(definitionClick);
				}
				C['bar']['definition'].show();
				C['bar']['definition']['bgbox'].show();
				var w=C['bar']['definition']['bg'].getWidth(),h=C['bar']['definition']['bg'].getHeight();
				var bw=C['bar']['definition']['button'].getWidth();
				C['bar']['definition']['bg'].css({'width':w+10+'px'});
				w=C['bar']['definition']['bg'].getWidth();
				if(getBarHeight()>C['bar'].getHeight()){
					h+=(getBarHeight()-C['bar'].getHeight());
				}
				C['bar']['definition']['bgbox'].attr('style','');
				C['bar']['definition']['bgbox'].css({
					'width':w+'px',
					'height':(h+2)+'px',
					'left':-(w-bw)*0.5+'px'
				});
				C['bar']['definition']['button'].mouseover(function(){
					w=C['bar']['definition']['bg'].getWidth();
					bw=C['bar']['definition']['button'].getWidth();
					C['bar']['definition']['bgbox'].css({			
						'left':-(w-bw)*0.5+'px'
					});
				});
			}
			if(pi>-1){
				C['bar']['definition']['bg'].find('button').each(function(index,ele){
					var i=parseInt(ele.attr('data-i'));
					if(pi==i){
						ele.addClass('ck-list-p-focus');
					}
					else{
						ele.removeClass('ck-list-p-focus');
					}
				});
			}
		},
		/*
		 * definitionClick
		 * 功能：选择清晰度
		*/
		definitionClick=function(e){
			C['bar']['definition']['bgbox'].hide();
			setTimeout(function(){
				C['bar']['definition']['bgbox'].removeCss('display');
			},300);
			changeDefinition(parseInt($(this).attr('data-i')));
		},
		/*
		 * changeDefinition
		 * 功能：检查清晰度
		*/
		changeDefinition=function(num){
			C['bar']['definition']['bg'].find('button').each(function(index,ele){
				var i=parseInt(ele.attr('data-i'));
				if(num==i){
					if(!isUndefined(video.textTracks) && video.textTracks.length>0){
						for(var y=video.find('track').length-1;y>-1;y--){
							video.find('track').eq(y).remove();
						}
					}
					seekTime=player.time();
					video.attr('autoplay','autoplay');
					changeVideo(ele.attr('data-video'));
					message(language['switchTo']+ele.htm());
					C['bar']['definition']['button'].htm(ele.htm());
					ele.addClass('ck-list-p-focus');
					eventTarget('definition',{id:i,video:ele.attr('data-video'),title:ele.attr('data-title')});
				}
				else{
					ele.removeClass('ck-list-p-focus');
				}
			});
		},
		/*
		 * deletePrompt
		 * 功能：删除关键点
		*/
		deletePrompt=function(){
			var i=0;
			if(!isUndefined(C['prompt']) && valType(C['prompt'])=='array'){
				for(i=C['prompt'].length;i>-1;i--){
					if(!isUndefined(C['prompt'][i])){
						C['prompt'][i].remove();
					}
				}
				C['prompt']=null;
			}
			C['prompt']=[];
		},
		/*
		 * changePrompt
		 * 功能：构建关键点
		*/
		changePrompt=function(){
			deletePrompt();
			for(var i=0;i<vars['prompt'].length;i++){ var obj="vars['prompt'][i];" if(!isundefined(obj) && 'words' in 'time' !isundefined(obj['time']) !isundefined(obj['words']) valtype(obj['time'])="='number'){" ele="createlDiv('ck-bar-progress-prompt');" ele.attr('data-words',obj['words']).attr('data-time',obj['time']); c['bar']['pbox']['bg'].append(ele); bf="(ele.getWidth()*0.5/C['bar']['pbox']['bg'].getWidth())*50;" left="obj['time']/duration*100-bf;" if(left<0) if(left>100) left=100;
					ele.css({'left':left+'%'});
					ele.mouseover(function(){
						if(this.attr('data-words')){
							showPromptWords(this);
						}
					});
					ele.mouseout(function(){
						if(this.attr('data-words')){
							showPromptWords();
						}
					});
					C['prompt'].push(ele);
				}
			}
		},
		/*
		 * showPromptWords
		 * 功能：显示关键点提示
		*/
		showPromptWords=function(ele){
			if(isUndefined(C['promptWords'])){
				C['promptWords']=createlDiv('ck-prompt-words');
				CM.append(C['promptWords']);
				C['promptWords']['content']=createlDiv('ck-prompt-content');
				C['promptWords'].append(C['promptWords']['content']);
			}
			if(isUndefined(ele)){
				C['promptWords']['content'].htm('');
				C['promptWords'].hide();
				return;
			}
			C['promptWords']['content'].htm(ele.attr('data-words'));
			C['promptWords'].show();
			var pW=C['promptWords'].getWidth(),pH=C['promptWords'].getHeight();
			var bg=C['bar']['pbox']['bg'];
			var time=parseFloat(ele.attr('data-time'));
			var top=CK.getHeight()-getBarHeight();
			var left=ele.offset()['left']-CK.offset()['left']+ele.getWidth()*.5-pW*.5;
			if(!isUndefined(C['preview'])){
				top=CK.getHeight()-parseFloat((getBarHeight()+C['preview']['smallHight']+parseInt(C['preview'].css('margin-bottom'))));
			}
			else{
				top=CK.getHeight()-parseFloat((getBarHeight()+C['tip']['minHeight']+parseInt(C['tip'].css('margin-bottom'))));
				top-=(getBarHeight()-C['bar'].getHeight());
			}
			top-=parseFloat(C['promptWords'].css('margin-bottom'));
			top-=pH;
			left-=parseFloat(C['promptWords'].css('margin-right'));
			if(left<0)left=0; if(left>CK.getWidth()-pW)left=CK.getWidth()-pW;
			C['promptWords'].css({
				'top':top+'px',
				'left':left+'px'
			});
		},
		/*
		 * changePreview
		 * 功能：加载或重置预览图片
		*/
		changePreview=function(preview){
			if(!isUndefined(C['preview'])){
				C['preview'].remove();
				C['preview']=null;
			}
			if(!isUndefined(preview)){
				C['preview']=createlDiv('ck-preview');
				CM.append(C['preview']);
				if(isUndefined(vars['preview']['type'])){
					vars['preview']['type']=0;
				}
				if(vars['preview']['type']==1){
					C['preview']['bg']=createlDiv('ck-preview-bg');
					C['preview'].append(C['preview']['bg']);
				}
				var files=[];
				var loadImg=function(bigW,bigH,smallW,smallH){
					if(vars['preview']['type']==1){
						C['preview']['bg']['img']=[];
						for(var i=0;i<files.length;i++){ for(var y="0;y<bigH/smallH;y++){" var img="createlDiv('ck-preview-img');" img.attr('data-img',files[i]).attr('data-i',y); img.css({ 'width':bigw+'px', 'height':smallh+'px', 'background-position':'left '+(-(y*smallh))+'px' }); c['preview']['bg'].append(img); c['preview']['bg']['img'].push(img); } c['preview']['bg'].css({ 'width':bigw*(bigh smallh)*(files.length+1)+'px', 'height':smallh+'px' c['preview']['bigwidth']="bigW;" c['preview']['bighight']="bigH;" c['preview']['smallwidth']="smallW;" c['preview']['smallhight']="smallH;" if(vars['preview']['type']="=1){" c['preview']['frame']="createlDiv('ck-preview-frame');" c['preview'].append(c['preview']['frame']); c['preview']['frame'].css({ 'width':smallw+'px', 'height':(smallh-parsefloat(c['preview']['frame'].css('border-width'))*2)+'px', }; if(valtype(vars['preview'])="='object'){" if(valtype(vars['preview']['file'])="='array'){" files="vars['preview']['file'];" thumbnail="[10,10];" if(valtype(vars['preview']['thumbnail'])="='array'" && vars['preview']['thumbnail'].length>1){
							if(valType(vars['preview']['thumbnail'][0])=='number'){
								thumbnail[0]=vars['preview']['thumbnail'][0];
							}
							if(valType(vars['preview']['thumbnail'][1])=='number'){
								thumbnail[1]=vars['preview']['thumbnail'][1];
							}
							vars['preview']['thumbnail']=thumbnail;
						}
						if(files[0]){
							var img = createlImg(files[0],'ck-preview-load-img').addListener('load',function(){
								loadImg(this.getWidth(),this.getHeight(),this.getWidth()/thumbnail[0],this.getHeight()/thumbnail[1]);
								this.remove();
							});
							CM.append(img);
						}
					}
					else{
						C['preview'].removeChild();
						C['preview']=null;
					}
				}
				else{
					C['preview'].removeChild();
					C['preview']=null;
				}
			}
		},
		/*
		 * showPreview
		 * 功能：显示预览图
		*/
		showPreview=function(time){
			if(hidePreviewSetTime){
				clearTimeout(hidePreviewSetTime);
				hidePreviewSetTime=null;
			}
			if(time<0){ if(!isundefined(c['preview'])){ hidepreviewsettime="setTimeout(function(){" c['preview'].hide(); },200); return; } if(!isundefined(c['preview']) && !isundefined(vars['preview']['thumbnail']) duration>0){
				if(isUndefined(vars['preview']['type'])){
					vars['preview']['type']=0;
				}
				var scale=2,thumbnail=vars['preview']['thumbnail'];
				if(!isUndefined(vars['preview']['scale'])){
					scale=vars['preview']['scale'];
				}
				var divI=0,imgI=0;
				var left=0,frameLeft=0;
				var pW=0;
				var smallW=C['preview']['smallWidth'],smallH=C['preview']['smallHight'];
				var bgXw=time*C['bar']['pbox']['bg'].getWidth()/duration+(C['bar']['pbox']['bg'].offset()['left']-CK.offset()['left']);
				if(C['preview'].css('display')=='none'){
					C['preview'].show();
				}
				C['preview'].css({
					'height':smallH+'px',
				});
				if(vars['preview']['type']==1){
					divI=parseInt(time/(scale*thumbnail[0]));
					imgI=parseInt(time/scale);
					var minI=divI-5,maxI=divI+5;
					if(minI<0) mini="0;" if(maxi>C['preview']['bg']['img'].length-1){
						maxI=C['preview']['bg']['img'].length-1;
					}
					for(var i=minI;i<maxI;i++){ if(c['preview']['bg']['img'][i].attr('data-img')){ var bgposition="C['preview']['bg']['img'][i].css('background-position');" c['preview']['bg']['img'][i].css({'background':'url('+c['preview']['bg']['img'][i].attr('data-img')+') no-repeat'}); c['preview']['bg']['img'][i].attr('data-img',''); c['preview']['bg']['img'][i].css('background-position',bgposition); } pw="C['preview']['frame'].getWidth();" frameleft="bgXw-pW*.5;" left="-(imgI*smallW+smallW*.5)+bgXw;" if(frameleft<0){ bgxw="(pW-smallW)*0.5;" if(frameleft>C['preview'].getWidth()-C['preview']['frame'].getWidth()){
						var xz=frameLeft-(C['preview'].getWidth()-C['preview']['frame'].getWidth());
						frameLeft=C['preview'].getWidth()-C['preview']['frame'].getWidth();
						left-=xz;
					}
					C['preview']['bg'].css({'left':left+'px'});
					C['preview']['frame'].css({'left':frameLeft+'px'});
				}
				else{
					var temp=(time/scale)/(thumbnail[0]*thumbnail[1]);
					imgI=parseInt(temp);//计算显示的图片编号
					var smallI=parseInt((temp-imgI)*100);
					var rows=parseInt(smallI/thumbnail[0]);
					var column=smallI%thumbnail[0];
					var files=vars['preview']['file'];
					left=bgXw-smallW*.5;
					if(left<0){ left="0;" } if(left>CK.getWidth()-smallW){
						left=CK.getWidth()-smallW;
					}
					C['preview'].css({
						'width':C['preview']['smallWidth']+'px',
						'background':'url('+files[imgI]+') no-repeat',
						'background-position':'-'+column*smallW+'px -'+rows*smallH+'px',
						'left':left+'px'
					});
				}
			}
		},
		/*
		 * showError
		 * 功能：显示错误信息
		*/
		showError=function(){
			C['loading'].hide();
			if(vars['controls'] || !vars['errorShow']){
				return;
			}
			if(isUndefined(C['error'])){
				C['error']=createlDiv('ck-error');
				CM.append(C['error']);
			}
			var msg=CT.error['message'];
			if(!msg) msg=language['error']['noMessage'];
			var html=msg+'(code:'+CT.error['code']+')';
			C['error'].htm(html);
			C['error'].show();
		},
		/*
		 * showWindowsError
		 * 功能：显示错误信息
		*/
		showWindowsError=function(error){
			var ele=createlDiv('ckplayer-error',error);
			$('body').append(ele);
		},
		/*
		 * showNextEpisode
		 * 功能：鼠标经过下一集按钮的动作
		*/
		showNextEpisode=function(){
			if(isUndefined(vars['next'])) return;
			if(valType(vars['next'])=='object'){
				if('content' in vars['next']){
					C['next']=player.layer(vars['next']);
					return;
				}
				if('title' in vars['next']){
					tip(C['bar']['nextEpisode'],vars['next']['title']);
					return;
				}
			}
			tip(C['bar']['nextEpisode'],language['next']);
		},
		/*
		 * nextClick
		 * 功能：点击下一集按钮的动作
		*/
		nextClick=function(){
			if(valType(vars['next'])=='object'){
				if('click' in vars['next']){
					if(valType(vars['next']['click'])=='function'){
						vars['next']['click']();
					}
					else if(valType(vars['next']['click'])=='string'){
						eval(vars['next']['click']+'()');
					}
				}
				if('link' in vars['next']){
					window.location.href=vars['next']['link'];
				}
				eventTarget('next');
			}
		},
		/*
		 * showEnded
		 * 功能：播放结束后的显示内容
		*/
		showEnded=function() {
			if(!CT.loop && !isUndefined(vars['ended'])){
				closePauseAd();
				C['ended']=player.layer(vars['ended']);
				if(C['ended']){
					C['centerPlay'].hide();
				}
				return;
			}
		},
		/*
		 * windowScroll
		 * 功能：监听页面滚动
		*/
		windowScroll=function() {
			if(!CT.smallWindows) return;
			if(CT.webFull || CT.theatre || CT.full){
				exitSmallWindows();
				return;
			}
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop>CT.offset()['top']+CT.getHeight()){
				if(!CK.hasClass('ckplayer-ckplayer-smallwindow')){
					CK.addClass('ckplayer-ckplayer-smallwindow');
					eventTarget('smallWindows',true);
					smallWindowsState=true;
					if(vars['smallWindowsDrag']){
						drag(true);
					}
					allBarHide();
					checkVideoRotate();
				}
			}
			else{
				exitSmallWindows();
			}
		},
		/*
		 * exitSmallWindows
		 * 退出小窗口模式
		 */
		exitSmallWindows=function(){
			if(CK.hasClass('ckplayer-ckplayer-smallwindow')){
				CK.removeClass('ckplayer-ckplayer-smallwindow');
				if(vars['smallWindowsDrag']){
					drag();
				}
				eventTarget('smallWindows',false);
				smallWindowsState=false;
				allBarShow();
				checkVideoRotate();
			}
		},
		/*
		 * drag
		 * 功能，使节点可拖动
		 * state：是否开启可拖动，默认=false，关闭状态
		*/
		drag=function(state) {
			var doc=$(document);
			var posX = 0,posY = 0,
				posXRecord = 0,posYRecord = 0;
			var open=false;
			if(!isUndefined(state)){
				open=state;
			}
			var mouseDown = function(e) {
				e.preventDefault && e.preventDefault();
				e = e || window.event;
				var client = getClient(e);
				posXRecord = client['x'];
				posYRecord = client['y'];
				doc.mousemove(docMouseMove);
				doc.mouseup(docMouseUp);
				CK.css({
					'cursor':'move'
				});
			};
			var docMouseMove = function(e) {
				e = e || window.event;
				var client = getClient(e);
				var eleOffset = CK.offset();
				posY = client['y']-posYRecord;
				posX = client['x']-posXRecord;
				posXRecord = client['x'];
				posYRecord = client['y'];
				var left=eleOffset['left']+posX;
				var top=eleOffset['top']+posY;
				CK.css({
					'left':left+'px',
					'top':top+'px'
				});
				if(CK.css('position')!='fixed'){
					CK.css({
						'position':'fixed'
					});
				}
				isDrag=true;
			};
			var docMouseUp = function() {
				doc.removeListener('mousemove', docMouseMove);
				doc.removeListener('mouseup', docMouseUp);
				CK.css({
					'cursor':'default'
				});
			};
			if(open){
				CK.mousedown(mouseDown);
			}
			else{
				CK.unbind('mousedown');
			}
		},
		/*
		 * checkVideoRotate
		 * 检查播放器尺寸
		 */
		checkVideoRotate=function(){
			var ckW=CK.getWidth()*nowZoom*0.01,ckH=CK.getHeight()*nowZoom*0.01;
			var vW=CV.getWidth(),vH=CV.getHeight();
			CV.css({
				'transform':'rotate('+nowRotate+'deg)',
				'-ms-transform':'rotate('+nowRotate+'deg)',
				'-moz-transform':'rotate('+nowRotate+'deg)',
				'-webkit-transform':'rotate('+nowRotate+'deg)',
				'-o-transform':'rotate('+nowRotate+'deg)',
				'width':nowZoom+'%',
				'height':nowZoom+'%'
			});
			if(nowRotate!=0 && nowRotate!=180){
				if(vH>ckW && vW>ckH){
					if(vH / ckW > vW / ckH) {
						CV.css({
							'height':nowZoom+'%',
							'width':ckH+'px'
						});
					}
					else {
						CV.css({
							'width':nowZoom+'%',
							'height':ckW+'px'
						});
					}
					return;
				}
				if(vH<ckW && vw<ckh){ if(ckw>ckH){
						CV.css({
							'height':nowZoom+'%',
							'width':ckH+'px'
						});
					}
					else{
						if(vH / vW >= ckW / ckH) {
							CV.css({
								'width':nowZoom+'%',
								'height':ckW+'px'
							});
						} 
						else {
							CV.css({
								'height':nowZoom+'%',
								'width':ckH+'px'
							});
						}
					}
					return;
				}
				if(vH>=ckW && vW<=ckH){ cv.css({ 'width':nowzoom+'%', 'height':ckw+'px' }); return; } if(vw>=ckH && vH<ckW){ cv.css({ 'height':nowzoom+'%', 'width':ckh+'px' }); } }, * allbarshow 功能：控制栏显示 if(barshow){ c['bar'].show(); c['topbar'].show(); if(rightbarshow){ c['rightbar'].show(); c['temptime'].hide(); if(!isundefined(c['logo'])){ c['logo'].show(); allbarhide 功能：控制栏隐藏 if(isundefined(temptime)){ temptime="true;" c['bar'].hide(); c['topbar'].hide(); c['rightbar'].hide(); if(temptime){ c['temptime'].show(); c['logo'].hide(); message 功能：显示提示 c['message'].htm(''); var msghide="function(){" c['message'].removeclass('ck-message-right').removeclass('ck-animate-bouncein').removeclass('ck-animate'); c['message'].hide(); }; if(str){ c['message'].htm(str); c['message'].show(); if(!c['message'].hasclass('ck-animate')){ c['message'].addclass('ck-animate ck-animate-bouncein'); if(!isundefined(right) && right){ if(!c['message'].hasclass('ck-message-right')){ c['message'].addclass('ck-message-right'); if(msgsettime){ cleartimeout(msgsettime); msgsettime="null;" msghide(); },1500); else{ tip 功能：显示tip @ele：需要显示提示的对象，@str：提示文字，@cl：水平修正距离，@align：对齐方式，只有两种，一种默认对齐（箭头在提示文字下方），一种是左对齐（箭头在提示文字右边） c['tip']['content'].htm(''); c['tip']['content'].htm(str); c['tip'].show(); if(!c['tip'].hasclass('ck-animate')){ c['tip'].addclass('ck-animate if(isundefined(align)){ align="auto" if(align="='left'){" c['tip']['content'].removeclass('ck-content-float-auto').addclass('ck-content-float-left'); c['tip']['triangle'].removeclass('ck-triangle-auto').addclass('ck-triangle-left'); c['tip']['content'].removeclass('ck-content-float-left').addclass('ck-content-float-auto'); c['tip']['triangle'].removeclass('ck-triangle-left').addclass('ck-triangle-auto'); tipresize(ele,cl,align); if(isundefined(closetipfun)){ closetipfun="function(){" if(tipsettime){ cleartimeout(tipsettime); tipsettime="null;" closetipmouseout="function(ele){" closetipfun(); tip(); },100); if(ele){ ele.removelistener('mouseout',closetipmouseout); ele.mouseout(function(){closetipmouseout(ele)}); c['tip'].hide(); c['tip'].removeclass('ck-animate'); c['tip'].removeclass('ck-animate-bouncein'); tipresize 功能：设置tip坐标 offset="ele.offset();" ckoffset="CK.offset();" w="C['tip'].getWidth(),h=C['tip'].getHeight();" ew="ele.getWidth();" left="0,top=offset['top']-ckOffset['top']-h;" if(getbarheight()>C['bar'].getHeight()){
				top-=(getBarHeight()-C['bar'].getHeight());
			}
			if(w>ew){
				left=offset['left']-ckOffset['left']-(w-ew)*.5;
			}
			else{
				left=offset['left']-ckOffset['left']+(ew-w)*.5;
			}
			if(align=='left'){
				left=offset['left']-ckOffset['left']-w;
				top=offset['top']-ckOffset['top'];
			}
			if(!isUndefined(cl)){
				left=cl['x']-ckOffset['left']-w*.5;
			}
			if(left<0){ left="0;" } if(top<0){ top="0;" if(left>CM.getWidth()-w){
				left=CM.getWidth()-w;
			}
			if(top>CM.getHeight()-h){
				top=CM.getHeight()-h;
			}
			C['tip'].css({
				'left':left+'px',
				'top':top-parseInt(C['tip'].css('margin-bottom'))+'px'
			});
		},
		/*
		 * progressDragX
		 * 功能：制作进度调节框事件
		*/
		progressDragX=function(){
			var bg=C['bar']['pbox']['bg'],
			play=C['bar']['pbox']['play'],
			slider=C['bar']['pbox']['slider'],
			mouseLine=C['bar']['pbox']['mouseLine'];
			slider.unbind();
			bg.unbind();
			var pos = 0,
				posRecord = 0;
			var doc=$(document);
			var sliderDownTime=0;
			var sliderMouseDown = function(e) {
				e.preventDefault && e.preventDefault();
				if(!vars['timeScheduleAdjust']){//禁止拖动
					return;
				}
				e = e || window.event;
				var eleOffset = slider.offset(),bgOffset=bg.offset(),client = getClient(e);
				pSliderMouseDown=true;
				posRecord = client['x'];
				//供比较
				var left = eleOffset['left']-bgOffset['left'];
				sliderDownTime=left*duration/(bg.getWidth()-slider.getWidth());
				slider.removeListener('mousedown', sliderMouseDown);
				slider.removeListener('touchstart', sliderMouseDown);
				doc.mousemove(docMouseMove);
				doc.mouseup(docMouseUp);
				slider.touchmove(docMouseMove);
				slider.touchend(docMouseUp);
				noScrolling(true);
			};
			var docMouseMove = function(e) {
				e = e || window.event;
				var eleOffset = slider.offset(),bgOffset=bg.offset(),client = getClient(e);
				pSliderMouseDown=true;
				pos = posRecord - client['x'];
				posRecord = client['x'];
				var left = eleOffset['left'] - pos-bgOffset['left'];
				if(left<0){ left="0;" } if(left>bg.getWidth()-slider.getWidth()){
					left=bg.getWidth()-slider.getWidth();
				}
				C['bar']['pbox'].addClass('ck-bar-progress-slider-move');
				//预览时间
				var time='';
				if(!vars['live']){
					time=left*duration/(bg.getWidth()-slider.getWidth());
					switch(vars['timeScheduleAdjust']){
						case 2://只能前进（向右拖动
							if(time<sliderDownTime){ left="-1000;" message(language['timescheduleadjust']['prohibitbackoff']); } break; case 3: 是只能后退 if(time>sliderDownTime){
								left=-1000;
								message(language['timeScheduleAdjust']['prohibitForward']);
								return;
							}
							break;
						case 4://只能前进但能回到第一次拖动时的位置
							if(time<firstSeekTime){ left="-1000;" player.seek(firstseektime); message(language['timescheduleadjust']['prohibitlookback']); return; } break; case 5: 看过的地方可以随意拖动 if(time>maxSeeTime){
								left=-1000;
								player.seek(maxSeeTime);
								message(language['timeScheduleAdjust']['prohibitForwardNotViewed']);
								return;
							}
							break;
					}
					time=formatSeconds(time);
				}
				else{
					time=formatLiveTime(left*getLiveTime()/(bg.getWidth()-slider.getWidth()));
				}
				tip(slider,time);
				if(left>=0){
					slider.css({
						'left': left + 'px'
					});
					play.css({
						'width': left+ slider.getWidth()*.5+ 'px'
					});
				}
				else{
					pSliderMouseDown=false;
				}
				
			};
			var docMouseUp = function() {
				noScrolling();
				doc.removeListener('mousemove', docMouseMove);
				doc.removeListener('mouseup', docMouseUp);
				slider.removeListener('touchmove', docMouseMove);
				slider.removeListener('touchend', docMouseUp);
				slider.mousedown(sliderMouseDown);
				slider.touchstart(sliderMouseDown);
				if(!vars['live']){
					var time=play.getWidth()*duration/(bg.getWidth()-slider.getWidth()*.5);
					if(time>duration){
						time=duration;
					}
					seekTime=0;
					player.seek(time);
				}
				else{
					var playbackTime=parseInt(vars['live']+play.getWidth()*getLiveTime()/(bg.getWidth()-slider.getWidth()*.5));
					eventTarget('playback',{time:playbackTime,date:date('Y-m-d H:i:s',playbackTime)});
					eventTarget('seek',{time:playbackTime,state:'seeking',date:date('Y-m-d H:i:s',playbackTime)});
				}
				C['bar']['pbox'].removeClass('ck-bar-progress-slider-move');
				if(isMouseLeave){
					tip();
				}
			};
			var isMouseLeave=true;//默认鼠标离开了进度按钮上
			var sliderMouseOver=function(){
				var time='';
				if(!vars['live']){
					time=formatSeconds(parseInt(slider.css('left'))*duration/(bg.getWidth()-slider.getWidth()));
				}
				else{
					time=language['live'];
				}
				isMouseLeave=false;
				tip(slider,time);
			};
			
			var sliderMouseLeave=function(){
				isMouseLeave=true;
			};
			slider.mousedown(sliderMouseDown);
			slider.mouseover(sliderMouseOver);
			slider.mouseleave(sliderMouseLeave);
			slider.touchstart(sliderMouseDown);
			var bgMouseDown=function(e){
				e = e || window.event;
				var client = getClient(e);
				var bgOffset=bg.offset();
				var w=client['x']-bgOffset['left'];
				if(CT.full){
					w+=CK.offset()['left'];
				}
				if(!vars['live']){
					var time=duration*w/bg.getWidth();
					switch(vars['timeScheduleAdjust']){
						case 0://禁止拖动
							message(language['timeScheduleAdjust']['prohibit']);
							return;
							break;
						case 2://只能前进（向右拖动
							if(time<oldTime){ message(language['timescheduleadjust']['prohibitbackoff']); return; } break; case 3: 是只能后退 if(time>oldTime){
								message(language['timeScheduleAdjust']['prohibitForward']);
								return;
							}
							break;
						case 4://只能前进但能回到第一次拖动时的位置
							if(time<firstSeekTime){ message(language['timescheduleadjust']['prohibitlookback']); return; } break; case 5: 看过的地方可以随意拖动 if(time>maxSeeTime){
								message(language['timeScheduleAdjust']['prohibitForwardNotViewed']);
								return;
							}
							break;
					}
					seekTime=0;
					player.seek(time);
				}
				else{
					var playbackTime=parseInt(vars['live']+getLiveTime()*w/bg.getWidth());
					eventTarget('playback',{time:playbackTime,date:date('Y-m-d H:i:s',playbackTime)});
					eventTarget('seek',{time:playbackTime,state:'seeking',date:date('Y-m-d H:i:s',playbackTime)});
				}
				if(w>bg.getWidth()-slider.getWidth()*.5){
					w=bg.getWidth()-slider.getWidth()*.5
				}
				if(w<slider.getWidth()*.5){ w="slider.getWidth()*.5;" } pslidermousedown="true;" play.css({ 'width': w+ 'px' }); slider.css({ 'left': w-slider.getwidth()*.5 + }; var movetimer="null;" bgmousemove="function(e){" e="e" || window.event; client="getClient(e);" bgoffset="bg.offset();" cleartime(); if(ct.full){ time="0;" if(!vars['live']){ showpreview(time); else{ tip(bg,time,client); mouseline.css({'left':w-(c['bar']['pbox']['mouseline'].getwidth()*.5)+'px'}); cleartime="function(){" if(movetimer){ cleartimeout(movetimer); closetipfun(); bgmouseout="function(e){" showpreview(-1); },30); bg.mousedown(bgmousedown); bg.mousemove(bgmousemove); bg.mouseout(bgmouseout); mouseline.mouseover(cleartime); }, * volumedragy 功能：制作音量调节框事件 { box="C['bar']['vbox']['volume']['box']," bg="C['bar']['vbox']['volume']['bg']," pp="C['bar']['vbox']['volume']['pp']," slider="C['bar']['vbox']['volume']['slider']," doc="$(document);" pos="0," posrecord="0;" slidermousedown="function(e)" e.preventdefault && e.preventdefault(); noscrolling(true); slider.removelistener('mousedown', slidermousedown); slider.removelistener('touchstart', c['bar']['vbox']['mousedown']="true;" doc.mousemove(docmousemove); doc.mouseup(docmouseup); slider.touchmove(docmousemove); slider.touchend(docmouseup); docmousemove="function(e)" eleoffset="slider.offset();" boxoffset="box.offset();" slidertop="eleOffset['top']-boxOffset['top']+pos;" mintop="bgOffset['top']-boxOffset['top'],maxTop=bgOffset['top']+bg.getHeight()-boxOffset['top']-slider.getHeight();" if(slidertop<mintop){ if(slidertop>maxTop){
					sliderTop=maxTop;
				}
				slider.css({
					'top':sliderTop+'px'
				});
				var ppMarginTop=sliderTop-minTop+slider.getHeight()*0.5;
				pp.css({
					'margin-top':ppMarginTop+'px'
				});
				var vol=(bg.getHeight()-ppMarginTop-slider.getHeight()*0.5)/(bg.getHeight()-slider.getHeight());
				player.volume(vol);
			};
			var docMouseUp = function() {
				noScrolling();
				doc.removeListener('mousemove', docMouseMove);
				doc.removeListener('mouseup', docMouseUp);
				slider.removeListener('touchmove', docMouseMove);
				slider.removeListener('touchend', docMouseUp);
				slider.mousedown(sliderMouseDown);
				slider.touchstart(sliderMouseDown);
				C['bar']['vbox']['mouseDown']=false;
			};
			slider.mousedown(sliderMouseDown);
			slider.touchstart(sliderMouseDown);
			var bgMouseDown=function(e){
				e = e || window.event;
				var client = getClient(e);
				var bgOffset=bg.offset();
				var h=client['y']-bgOffset['top'];
				var max=bg.getHeight();
				var vol=1-h/max;
				player.volume(vol);
			};
			bg.mousedown(bgMouseDown);
		},
		/*
		 * changeProgress
		 * 功能：根据时间调节播放进度
		*/
		changeProgress=function(time){
			if((valType(vars['live'])=='boolean' && vars['live'])){
				return;
			}
			if(!pSliderMouseDown){
				var bg=C['bar']['pbox']['bg'],slider=C['bar']['pbox']['slider'];
				var playW=(time/duration)*100;
				
				if(valType(vars['live'])=='number'){
					playW='100';
				}
				C['bar']['pbox']['play'].css({'width':playW+'%'});
				var sliderW=(slider.getWidth()/bg.getWidth())*100;
				var sliderLeft=playW-sliderW*.5;
				if(sliderLeft<0){ sliderleft="0;" } if(sliderleft>100-sliderW){
					sliderLeft=100-sliderW;
				}
				C['bar']['pbox']['slider'].css({'left':sliderLeft+'%'});
				checkProgressSlider();
			}		
		},
		/*
		 * checkProgressSlider
		 * 功能：检查设置播放进度条位置
		 */
		checkProgressSlider=function(){
			var bg=C['bar']['pbox']['bg'],slider=C['bar']['pbox']['slider'];
			var st=0;
			if(C['bar']['pbox'].css('transition-duration')){
				st=parseFloat(C['bar']['pbox'].css('transition-duration'))*1000+20;
			}
			var checkThis=function(){
				var sliderLeft=parseInt(C['bar']['pbox']['slider'].css('left'));
				if(sliderLeft<0){ sliderleft="0;" c['bar']['pbox']['slider'].css({'left':sliderleft+'px'}); } if(sliderleft>bg.getWidth()-slider.getWidth()){
					sliderLeft=bg.getWidth()-slider.getWidth();
					C['bar']['pbox']['slider'].css({'left':sliderLeft+'px'});
				}
			};
			setTimeout(checkThis,st);		
		},
		/*
		 * changeTopTime
		 * 功能：修改顶部右侧时间
		*/
		changeTopTime=function(){
			C['topBar']['timeEle'].htm(date('H:i:s'));
			setTimeout(changeTopTime,1000);
		},
		/*
		 * changeVolumeSlider
		 * 功能：根据音量改变滑块位置
		*/
		changeVolumeSlider=function(vol){
			if(!isUndefined(C['bar']['vbox'])){
				var box=C['bar']['vbox']['volume']['box'],
				bg=C['bar']['vbox']['volume']['bg'],
				pp=C['bar']['vbox']['volume']['pp'],
				slider=C['bar']['vbox']['volume']['slider'];
				C['bar']['vbox']['volume']['txt'].htm(parseInt(vol*100));
				var bgH=bg.getHeight();
				if(bgH){
					var ppMarginTop=bgH-vol*bgH;
					pp.css({
						'margin-top':ppMarginTop+'px'
					});
					var sliderTop=bg.offset()['top']-box.offset()['top']+ppMarginTop-slider.getHeight()*0.5;
					slider.css({
						'top':sliderTop+'px'
					});
				}
			}
		},
		/*
		 * changeLoad
		 * 功能：获取视频已加载部分并修改加载进度栏
		*/
		changeLoad=function(){
			if(video){
				var len = video.buffered.length;
				if(len>0){
					var bufferEnd = video.buffered.end(len-1);
					if(loadTime<bufferEnd){ 1000 loadtime="bufferEnd;" } replaceinformation('loadtime',parseint(loadtime*100)*0.01); c['bar']['pbox']['load'].css('width',(loadtime duration)*100+'%'); }, * changemuted 功能：修改静音和取消静音时按钮切换事件 if(b){ c['bar']['vbox']['muted'].hide(); c['bar']['vbox']['exitmuted'].show(); c['ad']['bottom']['mutedandexit']['muted'].hide(); c['ad']['bottom']['mutedandexit']['exitmuted'].show(); message(language['muted']); else{ c['bar']['vbox']['muted'].show(); c['bar']['vbox']['exitmuted'].hide(); c['ad']['bottom']['mutedandexit']['muted'].show(); c['ad']['bottom']['mutedandexit']['exitmuted'].hide() replaceinformation 功能：替换关于里的内容 , n){ if(isundefined(c['about']['sourcedata']) && !isundefined(c['about'].find('ul'))){ c['about']['sourcedata']="C['about'].find('ul').eq(0).htm();" c['about']['objdata']="{};" var reg="/{(.*?)}/g;" res="C['about']['sourceData'].match(reg);" while( c['about']['objdata'][res[1]]="0" ; if(!isundefined(c['about'].find('ul'))){ htm="C['about']['sourceData'];" temp="C['about']['textareaText'];" if(c['about']['objdata']){ for(var k in c['about']['objdata']){ if(o!="k){" regexp('{'+k+'}' 'g'); val="C['about']['objData'][k];" if(isundefined(val)){ val); regexp('{'+o+'}' n || ''); c['about']['textareaele'].htm(temp); c['about']['objdata'][o]="n;" return c['about'].find('ul').eq(0).htm(htm); calculationfps 功能：获取fps { requestanimationframe="window.requestAnimationFrame" window.webkitrequestanimationframe window.mozrequestanimationframe window.orequestanimationframe window.msrequestanimationframe function(callback) window.settimeout(callback, 60); }; e, pe, pid, fps, last, offset; fps="0;" last="Date.now();" step="function()" offset="Date.now()" - last; +="1;" if(offset>= 1000) {
					last += offset;
					appendFps(fps);
					fps = 0;
				}
				requestAnimationFrame(step);
			};
			var	appendFps = function(fps) {
				if(fps!=CT.fps){
					CT.fps=fps;
					replaceInformation('fps',fps);
					eventTarget('fps',fps);
				}
				
			};
			if(isUndefined(CT.fps)){
				CT.fps=0;
			}
			step();
		},
		/*
		 * getElement
		 * 功能：获取一个外部节点
		*/
		getElement=function(content){
			var ele=$(content);
			if(isUndefined(ele)) return;
			if(valType(ele)=='htmlarray'){
				ele=ele[0];
			}
			if(isUndefined(ele.captureParentNode)){
				ele.captureParentNode = ele.parentNode;	
				ele.prevElement=ele.prev();
				ele.nextElement=ele.next();
			}		
			return ele;
		},
		/*
		 * $
		 * 功能：根据ID或className或节点节点名称获取对象
		*/
		$=function(obj, eL) {
			var parent = null;
			if (document) {
				parent = document;
			}
			if (!isUndefined(eL)) {
				parent = eL;
			}
			var res = [];
			if (obj) {
				if (valType(obj) == 'htmlobject' || valType(obj)=='object') {
					res = obj;
					if (!isUndefined(res.ckplayer)) {
						return res;
					}
				} 
				else if (valType(obj) == 'string' && obj!='') {
					switch (obj.substr(0, 1)) {
						case '.':
							obj = obj.substr(1, obj.length);
							if (parent.getElementsByClassName) {
								res = parent.getElementsByClassName(obj);
								if (!res.length) {
									return null;
								}
							} 
							else if (!parent && document.getElementsByClassName) {
								res = document.getElementsByClassName(obj);
								if (!res.length) {
									return null;
								}
							}
							else {
								var reg = new RegExp(' ' + obj + ' ', 'i');
								var ele = null;
								if (parent.getElementsByTagName) {
									ele = parent.getElementsByTagName('*');
								} else {
									ele = document.getElementsByTagName('*');
								}
								for (var i = 0; i < ele.length; i++) {
									if (reg.test(' ' + ele[i].className + ' ')) {
										res.push(ele[i]);
									}
								}
							}
							if (res) {
								if (res.length === 0) {
									res = null;
								}
							}
							break;
						case '#':
							obj = obj.substr(1, obj.length);
							if (parent.getElementById) {
								res = parent.getElementById(obj);
							} else {
								res=document.getElementById(obj);
							}
							break;
						default:
							var reg = new RegExp(' ' + obj + ' ', 'i');
							if (parent.getElementsByTagName) {
								res = parent.getElementsByTagName(obj);
							} else {
								res = document.getElementsByTagName(obj);
							}
							if (res) {
								if (obj == 'body' || obj == 'document' || obj == 'html') {
									res = res[0];
								} else if (res.length === 0) {
									res = null;
								}
							} else {
								res = null;
							}
							break;
					}
				}
				else {
					res = obj;
				}
			}
			else {
				res = document;
			}
			
			if (res) {
				if (valType(res) == 'htmlobject' || valType(res) == 'object' || valType(res) == 'document') {
					res.ckplayer = 'Thanks for using';
					/*
					 * find
					 * 功能：在当前节点中查找指定节点
					*/
					res.find = function(obj) {
						return $(obj, this);
					};
					/*
					 * attr
					 * 功能：修改或获取节点的属性值
					 * @key不能为空，指属性名称，$value不为空则设置属性值，为空则获取属性值
					*/
					res.attr = function(key, value) {
						if (isUndefined(value)) {
							return this.getAttribute(key);
						}
						else {
							this.setAttribute(key, value);
							return this;
						}
					};
					/*
					 * removeAtt
					 * 功能：删除节点的属性值
					 * @key不能为空，指属性名称
					*/
					res.removeAttr = function(key) {
						this.removeAttribute(key);
						return this;
					};
					/*
					 * css
					 * 功能：修改或获取节点的样式样式
					 * @key不能为空，指属性名称，$value不为空则设置属性值，为空则获取属性值
					*/
					res.css = function(key, value) {
						// 拆解字符串并将第二单词首字母大写
						var keyNew = function(str) {
							// 当属性名有横杠时
							if (str.indexOf('-') != -1) {
								var arr = str.split('-');
								var a = arr[0];
								var b = '',
									c = '';
								if (arr.length > 1) {
									b = arr[1].substr(0, 1).toLocaleUpperCase() + arr[1].substr(1, arr[1].length - 1);
								}
								if (arr.length > 2) {
									b = arr[2].substr(0, 1).toLocaleUpperCase() + arr[2].substr(1, arr[2].length - 1);
								}
								return a + b + c;
							}
							// 没有横杠就不进行字符串拆解
							return str;
						};
						if (isUndefined(value)){
							if (!isUndefined(key) && valType(key) == 'string') {
								if (this.currentStyle) {
									return this.currentStyle[key];
								} else {
									return document.defaultView.getComputedStyle(this, null)[key];
								}
							}
							if (isUndefined(key)) {
								if (this.currentStyle) {
									return this.currentStyle;
								} else {
									return document.defaultView.getComputedStyle(this, null);
								}
							}
						}
						// 当传进来的参数key不是一个对象，给节点添加css样式
						if (valType(key) != 'object') {
							var newKey = keyNew(key);
							if (this.length > 1) {
								// 如果this有多个值，那给每个节点都添加样式
								for (var i = 0; i < this.length; i++) {
									this[i].style[newKey] = value;
								}
							} else {
								this.style[newKey] = value;
							}
						} else {
							//如果第一个值是一个对象，遍历这个对象，并将属性名传进函数进行拆解
							for (var item in key) {
								var objKey = keyNew(item);
								if (valType(this) == 'htmlarray') {
									for (var i = 0; i < this.length; i++) {
										this[i].style[objKey] = key[item];
									}
								} else {
									this.style[objKey] = key[item];
								}
							}
						}
						return this;
					};
					res.hasClass = function(cName) {
						if (isUndefined(cName)) return false;
						var reg = new RegExp('(\\s|^)' + cName + '(\\s|$)');
						if (this.className && this.className.match(reg)) {
							return true;
						}
						return false;
					};
					res.addClass = function(cName) {
						if (!this.hasClass(cName)) {
							if (this.className && this.className.substr(this.className.length - 1, 1) != ' ') {
								this.className += ' ';
							}
							this.className += cName;
						};
						return this;
					};
					res.removeClass = function(cName) {
						if (this.hasClass(cName)) {
							this.className = this.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
							if (this.className.substr(this.className.length - 1, 1) == ' ') {
								this.className = this.className.substr(0, this.className.length - 1);
							}
							if (!this.className) {
								this.removeAttribute('class');
							}
						};
						return this;
					};
					res.searchClass = function(cName) {
						var arr = this.className.split(' ');
						for (var i = 0; i < arr.length; i++) {
							if (arr[i].substr(0, cName.length) == cName) {
								return arr[i];
							}
						}
						return this;
					};
					res.removeCss=function(cName){
						var cs=this.attr('style');
						if(cs){
							var arr=cs.split(';');
							var obj={};
							for(var i=0;i<arr.length;i++){ 2 10 var arrt="arr[i].split(':');" if(arrt.length="=2" && arrt[0] arrt[0].trim()!="cName){" obj[arrt[0].trim()]="arrT[1].trim();" } this.attr('style',''); this.css(obj); }; res.addlistener="function(e," f, t) { return addlistener(this, e, t); res.removelistener="function(e," removelistener(this, res.prev="function()" prev(this); res.next="function()" next(this); res.append="function(ele){" this.appendchild(ele); this; res.remove="function()" if(!isundefined(this.parentnode)){ this.parentnode.removechild(this); null; res.bind="function(e," res.unbind="function(e,f){" i="0;var" arr="[];" if(!isundefined(f)){ res.removelistener(e,f); else if(!isundefined(e)){ if(!isundefined(this.listenerlist)){ for(i="0;i<arr.length;i++){" if(arr[i][0]="=e){" res.removelistener(e,arr[i][1]); else{ res.removelistener(arr[i][0],arr[i][1]); * htm 功能：设置或获取html res.htm="function(val){" if(!isundefined(val)){ res.innerhtml="val;" res.innerhtml; htmreplace 功能：将html中ar替换成val res.htmreplace="function(ar,val,html){" if(!isundefined(val) !isundefined(ar)){ if(isundefined(this.attr('data-htm'))){ this.attr('data-htm',html); reg="new" regexp(ar , 'g'); val); this.htm(htm); offset 功能：获取节点的绝对坐标 res.offset="function()" par="this.offsetParent," 获取当前节点的父参照物（不一定是父节点） left="this.offsetLeft," 获取当前节点相对父节点左偏离 top="this.offsetTop;" 获取当前节点相对父节点上偏移 while (par par.tagname !="=" 'body') 判断是否已经到了最外一层 并且判断父参照物存不存在 if (! msie 8\.0 .test(navigator.useragent)){ 利用正则表达式判断 +="par.clientLeft;" 获得节点距离父节点左偏移多少 获得节点距离父节点上偏移多少 top: top, left: fixed 功能：判断节点是否悬浮于页面 res.fixed="function()" (this.css('position')="=" 'fixed') true; (!isundefined(this.offsetparent)) $(this.offsetparent).fixed(); false; getwidth 功能：获取节点的宽 res.getwidth="function()" this.offsetwidth; getheight 功能：获取节点的高 res.getheight="function()" this.offsetheight; if(isundefined(res.width)){ res.width="function(){" if(isundefined(res.height)){ res.height="function(){" resize 功能：监听窗口尺寸变化 @fn：窗口变化时执行的函数 res.resize="function(fn)" addlistener(window, 'resize', fn); click 功能：节点单击时执行的函数 @fn：执行的函数 res.click="function(fn){" addlistener(this,'click',fn); singleclick 功能：节点单击事件，当使用该事件时会同时注册双击事件，此时不要使用click函数进行单击事件监听 res.singleclick="function(fn){" if(isundefined(this.dbclick)){ doubleclickevent(this); this.dbclick="true;" this.addlistener('sigclick',fn); doubleclick 功能：节点双击事件，当使用该事件时会同时注册双击事件，此时不要使用click函数进行单击事件监听 res.doubleclick="function(fn){" this.addlistener('dobclick',fn); mouseover 功能：鼠标经过节点时执行的函数 res.mouseover="function(fn){" addlistener(this,'mouseover',fn); mouseout 功能：鼠标离开节点时执行的函数 res.mouseout="function(fn){" addlistener(this,'mouseout',fn); mousedown 功能：鼠标在节点上按下时执行的函数 res.mousedown="function(fn){" addlistener(this,'mousedown',fn); mouseup 功能：节点上鼠标弹起时执行的函数 res.mouseup="function(fn){" addlistener(this,'mouseup',fn); mousemove 功能：鼠标在节点上划行时执行的函数 res.mousemove="function(fn){" addlistener(this,'mousemove',fn); mousewheel 功能：鼠标滚轮在节点上划行时执行的函数 res.mousewheel="function(fn){" addlistener(this,'mousewheel',fn); addlistener(this,'dommousescroll',fn,false); mouseleave 功能：鼠标指针移出节点时执行的函数 res.mouseleave="function(fn){" addlistener(this,'mouseleave',fn); touchstart 功能：移动端鼠标在节点上按下时执行的函数 res.touchstart="function(fn){" addlistener(this,'touchstart',fn); touchmove 功能：移动端鼠标在节点上划行时执行的函数 res.touchmove="function(fn){" addlistener(this,'touchmove',fn); touchend 功能：移动端节点上鼠标弹起时执行的函数 res.touchend="function(fn){" addlistener(this,'touchend',fn); show 功能：显示节点 res.show="function(){" this.css('display','block'); hide 功能：隐藏节点 res.hide="function(){" this.css('display','none'); animate 功能：缓动效果 parameter:string="需要改变的属性：left,top,width,height,alpha," totaltime:number="运动的总毫秒数" easing:string="效果名称," callback:完成后的回调函数 res.animate="function(parameter,totalTime,easing,callBack)" if(isundefined(this.ck)){ res; thistemp="this;" parnode="this.CK;" w="parNode.getWidth(),h" = parnode.getheight(); speed="10;//跳针时间" this.timertween="null;" this.tweenplay="true;" if(isundefined(parameter)){ (isundefined(totaltime) || totaltime="=" 0) if(isundefined(easing) easing="=''){" ; effarr="easing.split('.');" tween="{" none: 均速运动 easein: function(t, b, c, d) c t d b; }, easeout: easeinout: quadratic: (t - 2) ((t < 1) ((--t) cubic: quartic: quintic: sine: math.cos(t (math.pi 2)) math.sin(t (math.cos(math.pi exponential: ? b: math.pow(2, 1)) b c: ( -10 c; --t) circular: (math.sqrt(1 math.sqrt(1 elastic: d, a, p) (!p) p="d" .3; (!a a math.abs(c)) s="p" 4; (2 math.pi) math.asin(c a); (a math.sin((t s) p)) b); (.3 1.5); .5 back: (s="=" undefined) ((s (((s s)) bounce: tween.bounce.easeout(d t, 0, (1 2.75)) (7.5625 .75) (2.5 .9375) .984375) 2){ tween.bounce.easein(t 2, tween.bounce.easeout(t if(effarr.length!="2){" (!(effarr[0] in tween)) (!(effarr[1] tween[effarr[0]])) tweenfun="tween[effArr[0]][effArr[1]];" getstartandend="function(arr){//分析初始化位置和结束位置" vars="arr[1];" current="0,result=0;" switch (arr[0]) case 'width': (vars.substring(vars.length 1, vars.length)="=" '%') result="parseInt(vars)" h 0.01; break; 'height': 'left': if(!isundefined(thistemp.css('left'))){ thistemp.css('right','auto'); 'right': if(!isundefined(thistemp.css('right'))){ thistemp.css('left','auto'); 'top': if(!isundefined(thistemp.css('top'))){ thistemp.css('bottom','auto'); 'bottom': if(!isundefined(thistemp.css('bottom'))){ thistemp.css('top','auto'); 'alpha': if(!isundefined(thistemp.css('filter')) thistemp.css('filter')!="none" ){ if(!isundefined(thistemp.css('opacity')) thistemp.css('opacity')!="none" result-="current;" if(current!="result){" 'type':arr[0], 'current':current, 'result':result stoptween="function()" (thistemp.timertween clearinterval(thistemp.timertween); thistemp.timertween="null;" parameter="parameter.replace(/[" ]*,[ ]*|[ ]+ g, ';'); newcss="[];" parameterarr="parameter.split(';');" for(var cssarr="parameterArr[i].split(':');" if(cssarr.length="=2){" temp="getStartAndEnd(cssArr);" if(temp){ newcss.push(temp) funtime="0;" timefun="function(){" styleobj="{};" if(thistemp.tweenplay){ (funtime totaltime) ob="newCss[i];" ap="Math.ceil(tweenFun(funTime," ob['current'], ob['result'], totaltime)); switch(ob['type']){ styleobj['width']="ap" 'px'; styleobj['overflow']="hidden" styleobj['height']="ap" styleobj['left']="ap" styleobj['right']="ap" styleobj['top']="ap" styleobj['bottom']="ap" styleobj['filter']="alpha(opacity:" ap*0.01 ')'; styleobj['opacity']="ap*0.01;" thistemp.css(styleobj); stoptween(); if(!isundefined(callback)){ callback(thistemp); animateplay 功能：播放缓动动画 res.animateplay="function(){" if(!isundefined(this.timertween)){ animatepause 功能：暂停缓动动画 res.animatepause="function(){" each 功能：当相同节点数量大于0时，使用该函数可以进行循环节点 @fn：循环节点时执行的函数 res.each="function(fn)" for (var this) (this.hasownproperty(i)) (valtype(this[i])="=" 'htmlobject') fn(i, this[i]); try (!this[0].nodename) catch (e) eq 功能：根据索引返回指定节点 @m：为索引数字 res.eq="function(m)" (valtype(this)="=" 'htmlarray') (this.length>= m + 1) {
								return this[m];
							}
							return null;
						}
						return null;
					};
					for (var i = 0; i < res.length; i++) {
						if ($) {
							try {
								res[i] = $(res[i]);
							} catch (event) {}
						}
					}
				}
	
			}
			return res;
		},
		/*
		 * createlDiv
		 * 功能：新建一个DIV节点
		*/
		createlDiv=function(className,html) {
			var ele = document.createElement('div');
			var eleObject = $(ele);
			if (className) {
				eleObject.addClass(className);
			}
			if(html){
				eleObject.htm(html);
			}
			return eleObject;
		},
		/*
		 * createlVideo
		 * 功能：新建一个video节点
		*/
		createlVideo=function() {
			var ele = document.createElement('video');
			var eleObject = $(ele);
			return eleObject;
		},
		/*
		 * createlButton
		 * 功能新建一个button节点
		*/
		createlButton=function(className,html) {
			var ele = document.createElement('button'); 
			var eleObject = $(ele);
			eleObject.attr('type','button');
			if (className) {
				eleObject.addClass(className);
			}
			if(html){
				eleObject.htm(html);
			}
			return eleObject;
		},
		/*
		 * createlA
		 * 功能新建一个a节点
		*/
		createlA=function(html,href,className) {
			var ele = document.createElement('a'); 
			var eleObject = $(ele);
			if(html){
				eleObject.htm(html);
			}
			if(!isUndefined(href) && href){
				eleObject.attr('href',href);
				eleObject.attr('target','_blank');
			}
			if (className) {
				eleObject.addClass(className);
			}
			return eleObject;
		},
		/*
		 * createlJsLink
		 * 功能新建一个a节点
		*/
		createlJsLink=function(html,js) {
			var ele = document.createElement('a'); 
			var eleObject = $(ele);
			if(html){
				eleObject.htm(html);
			}
			if(!isUndefined(js) && js){
				eleObject.attr('href','javascript:'+js+'()');
			}
			else{
				eleObject.attr('href','javascript:;');
			}
			return eleObject;
		},
		/*
		 * createlImg
		 * 功能新建一个img节点
		*/
		createlImg=function(file,className) {
			var ele = document.createElement('img'); 
			var eleObject = $(ele);
			if (className) {
				ele.className = className;
			}
			if(file){
				ele.src=file;
			}
			return eleObject;
		},
		/*
		 * getClient
		 * 功能：获取clientX和clientY
		*/
		getClient=function(event) {
			var eve = event || window.event;
			if (isUndefined(eve)) {
				eve = {
					clientX: 0,
					clientY: 0
				};
			}
			var x=eve.clientX + (document.documentElement.scrollLeft || $('body').scrollLeft),
			y=eve.clientY + (document.documentElement.scrollTop || $('body').scrollTop);
			if(isUndefined(x.toString()) || x.toString()=='NaN'){
				x=eve.touches[0].clientX
			}
			if(isUndefined(y.toString()) || y.toString()=='NaN'){
				y=eve.touches[0].clientY
			}
			if(x.toString()=='NaN'){
				x=0;
			}
			if(y.toString()=='NaN'){
				y=0;
			}
			return {
				x: x,
				y: y
			}
		},
		/*
		 * getLiveTime
		 * 功能：获取直播回放时间
		*/
		getLiveTime=function(){
			var notTime=Date.now();
			var varsTime=vars['live'];
			if(varsTime.toString().length<13){ 4 varstime="varsTime*1000;" } return nottime-varstime; }, * formatlivetime 功能：将直播的时间戳格式化成标准时间 var if(varstime.tostring().length<13){ varstime+="time;" language['lookback']+date('h:i:s',varstime); loadjs 功能：加载js文件并在加载完成后执行callback函数 @file：js文件地址 @callback：加载完成后执行的函数 callback) { fn="function()" {}; if(!isundefined(callback)){ if(checkjs(file)){ fn(); return; script="document.createElement('script');" script.type="text/javascript" ; isready="false;" timer="null;" doready="function()" if(timer){ clearinterval(timer); if(isready) if(valtype(fn)="=" 'function') }; bodyload="function()" try if(!isundefined(script.readystate) && script.readystate="=" 'complete') doready(); catch(event) 10); w3c="function()" removelistener(script, 'load', w3c); 'error', w3cerror); w3cerror="function()" addlistener(script, bodyload(); script.src="file;" $('head').eq(0).append(script); doubleclickevent 功能：注册对象双击功能 @ele：注册对象，可以是页面中的任意节点，不支持数组形式 settime="null;//注册延时函数" clicktime="0;//记录点击时间" ele="$(ele);" ele.click(function(){ if(!settime){ try{ ele.dispatchevent(new event('sigclick')); 注册单击，针对视频播放器使用 catch(event){ e="document.createEvent('HTMLEvents');" e.initevent('sigclick', false, true); ele.dispatchevent(e); },260); if(!clicktime){ date().gettime(); else{ if(new date().gettime()-clicktime<230){ 认为是双击 event('dobclick')); 注册双击 e.initevent('dobclick', cleartimeout(settime); }); noscrolling 功能，禁止页面滚动操作 if(isundefined(b)) b="false;" bodyscroll="function" (event){ event.preventdefault(); if(b){ 禁止滚动 $('body').addlistener('touchmove', bodyscroll, {passive: false 开启滚动 $('body').removelistener('touchmove',bodyscroll, false}); into(videoobj); ajax 功能：ajax功能 @cobj:传递的参数，包含请求地址，请求类型，编码等 function ajax(cobj) callback="null;" obj="{" method: 'get', 请求类型 datatype: 'json', 请求的数据类型 charset: 'utf-8', async: true, true表示异步，false表示同步 url: '', data: null, success: error:null cobj); if (isundefined(obj['url'])) errorfun *功能：执行error if(!isundefined(obj['error']) valtype(obj['error'])="='function'){" obj['error'](info); obj['success'](null); successfun *功能：执行success if(!isundefined(obj['success']) valtype(obj['success'])="='function'){" obj['success'](success); createxhr *功能：用来为ajax函数提供支持 (window.xmlhttprequest) new xmlhttprequest(); else (window.activexobject) activexobject('microsoft.xmlhttp'); activexobject('msxml2.xmlhttp'); {} formatparams 功能：将对象转成地址字符串，为ajax函数提供支持 @obj：传递一个对象 arr="[];" for (var key in obj) arr.push(encodeuricomponent(key) + '=" + encodeURIComponent(obj[key]));
			}
			return arr.join(" &'); (valtype(cobj) !="object" ) if(!isundefined(obj['error'])){ obj.error(event); (obj.datatype="==" 'json' || obj.datatype="==" 'text' 'html' 'xml') xhr="createXHR();" 判断http的交互是否成功 (xhr.status="==" 200) 'json') successfun(eval('(' xhr.responsetext ')')); 回调传递参数 successfun(null); successfun(xhr.responsetext); errorfun({code:xhr.status,message:xhr.statustext}); obj.data="formatParams(obj.data);" 通过params()将名值对转换成字符串 (obj.method="==" 'get' !isundefined(obj.data)) (obj.data (obj.url.indexof('?')="=" -1) obj.url obj.data; (obj.async="==" true) addlistener(xhr,'readystatechange',function(event){ (this.readystate="==" 判断对象的状态是否交互完成 callback(); 回调 xhr.open(obj.method, obj.url, obj.async); 'post') xhr.setrequestheader('content-type', 'application x-www-form-urlencoded'); xhr.setrequestheader('charset', obj['charset']); xhr.send(obj.data); xhr.send(null); get方式则填null false) 同步 'jsonp') ohead="document.getElementsByTagName('head')[0];" oscript="document.createElement('script');" callbackname="callback" params="formatParams(obj.data)" '&callback=" + callbackName; //按时间戳拼接字符串
			//拼接好src
			oScript.src = obj.url.split(" ?') '?' params; 插入script标签 ohead.insertbefore(oscript, ohead.firstchild); jsonp的回调函数 window[callbackname]="function(json)" obj['success'](json); ohead.removechild(oscript); documentready 功能：判断页面加载完成 @fn：页面加载完成后执行的函数 documentready(fn) if(timer) if(!isundefined(document.readystate) document.readystate="=" removelistener(window, if(!isundefined(document.body)){ addlistener(window, getpath 功能：获取该js文件所在路径 getpath(siz) scriptlist="document.scripts," thispath="scriptList[scriptList.length" - 1].src; i="0;" < scriptlist.length; i++) scriptname="scriptList[i].getAttribute('name')" scriptlist[i].getattribute('data-name'); src="scriptList[i].src.slice(scriptList[i].src.lastIndexOf('/')" 1, scriptlist[i].src.lastindexof('.')); ((scriptname (scriptname="=" 'ckplayer' 'ckplayer.min')) (scriptlist[i].src (src="=" 'ckplayer.min'))) break; path="thisPath.substring(0," thispath.lastindexof(' js ') 1); if(!isundefined(siz)){ path+="siz+'/';" path; checkjs 功能：判断js是否已加载 @file：js文件路径 checkjs(file) if(scriptlist[i].src="=file){" scriptlist[i]; false; getmaxzindex 功能：获取当前页面最大深度 getmaxzindex() document.queryselectorall('*'); maxz="-1;" arr.length; temp="null;" null).zindex; catch (event) (arr[i].style) (temp parseint(temp)> maxZ) {
				maxZ = parseInt(temp);
			}
		}
		return maxZ;
	}
	/*
	 * getWindowSize
	 * 功能：获取window的宽和高
	*/
	function getWindowSize() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}
	/*
	 * standardization
	 * 功能：将对象Object标准化，将n对象替换进o对象
	 * @o:标准化对象，@n：外部传递对象
	*/
	function standardization(o, n) { //n替换进o
		var h = {};
		var k;
		for (k in o) {
			h[k] = o[k];
		}
		for (k in n) {
			if(k in h){
				h[k] = n[k];
			}
		}
		return h;
	}
	/*
	 * mergeObj
	 * 功能：将新对象合并到原对象中，需要确保原对像里有对应的值并且类型一样
	 * @o:原对象，@n：新对象
	*/
	function mergeObj(o,n){
		var h = {};
		var k;
		for (k in o) {
			h[k] = o[k];
		}
		for (k in n) {
			if(k in h){
				switch(valType(h[k])){
					case 'object':
						if(valType(n[k])=='object'){
							h[k] = mergeObj(h[k],n[k]);
						}
						break;
					default:
						if(valType(h[k])==valType(n[k])){
							h[k] = n[k];
						}
						break;
				}
			}
		}
		return h;
	}
	/*
	 * valType
	 * 功能：判断变量类型
	*/
	function valType(val) {
		if(typeof val==='undefined') return 'undefined';
		var str=Object.prototype.toString.call(val).split(' ')[1].replace(']','').toLowerCase();
		if(str.substr(0,4)=='html' && (str.substr(-7)=='element' || str.substr(-8)=='document' || str=='window')){
			str='htmlobject';
		}
		if(str=='htmlcollection' || str=='nodelist'){
			str='htmlarray';
		}
		return str;
	}
	/*
	 * isUndefined
	 * 功能：判断变量是否存在或值是否为undefined
	*/
	function isUndefined(val) {
		try {
			return valType(val)==='undefined' || val === undefined || val === null || (valType(val)==='number' && isNaN(val));
		} catch (event) {
			return true;
		}
		return false;
	}
	/*
	 * prev
	 * 功能：获取指定节点前一个同胞节点
	 * @ele：要获取的节点
	*/
	function prev(ele) {
		var e = ele.previousSibling;
		if (e == null) { //测试同胞节点是否存在，否则返回空
			return null;
		}
		if (e.nodeType == 3) { //如果同胞节点为文本节点
			var t = prev(e);
			if (t && t.nodeType == 1) {
				return t;
			}
		} else {
			if (e.nodeType == 1) { //确认节点为节点节点才返回
				return e;
			} else {
				return false;
			}
		}
	}
	/*
	 * next
	 * 功能：获取指定节点下一个同胞节点
	 * @ele：要获取的节点
	*/
	function next(ele) {
		var e = ele.nextSibling;
		if (e == null) { //测试同胞节点是否存在，否则返回空
			return null;
		}
		if (e.nodeType == 3) { //如果同胞节点为文本节点
			var t = next(e);
			if (t && t.nodeType == 1) {
				return t;
			}
		} else {
			if (e.nodeType == 1) { //确认节点为节点才返回
				return e;
			} else {
				return false;
			}
		}
	}
	/*
	 * addListener
	 * 功能：事件监听
	 * @ele：监听对象，@e：事件名称，@f：返回事件函数
	*/
	function addListener(ele, e, f, t) {
		if (isUndefined(t)) {
			t = false;
		}
		if (ele.addEventListener) {
			try {
				ele.addEventListener(e, f, t);
			} catch (event) {}
		} else if (ele.attachEvent) {
			try {
				ele.attachEvent('on' + e, f);
			} catch (event) {}
		} else {
			ele['on' + e] = f;
		}
		if(isUndefined(ele.listenerList)){
			ele.listenerList=[];
		}
		ele.listenerList.push([e,f]);
		return ele;
	};
	/*
	 * removeListener
	 * 功能：删除事件监听
	 * @ele：监听对象，@e：事件名称，@f：返回事件函数
	*/
	function removeListener(ele, e, f, t) {
		if (isUndefined(t)) {
			t = false;
		}
		if (ele.removeEventListener) {
			try {
				ele.removeEventListener(e, f, t);
			} catch (e) {}
		} else if (ele.detachEvent) {
			try {
				ele.detachEvent('on' + e, f);
			} catch (e) {}
		} else {
			ele['on' + e] = null;
		}
		if(!isUndefined(ele.listenerList)){
			var temp=[];
			for(var i=0;i<ele.listenerList.length;i++){ 1 10 60 if(ele.listenerlist[i][0]!="e" || ele.listenerlist[i][1]!="f){" temp.push(ele.listenerlist[i]); } ele.listenerlist="temp;" return ele; * formatseconds 功能：將秒转化成时分秒 function formatseconds(val) { if(isundefined(val)) val="0;" var result="parseInt(val);" if(isundefined(result)) if(result<0) h="Math.floor(result" 3600) < ? '0' + math.floor(result : 3600), m="Math.floor((result" % 60)) math.floor((result 60)), s="Math.floor((result" res ; if(h !="=" '00') res; date 功能：格式化的时间字符串 date(format, timestamp) if(isundefined(timestamp)){ timestamp="new" date(); if(timestamp.tostring().length<13) a, jsdate="((timestamp)" new date(timestamp) date()); pad="function(n," c) if((n="n" '').length array(++c - n.length).join('0') n; else }; txt_weekdays="['Sunday'," 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; txt_ordin="{" 1: 'st', 2: 'nd', 3: 'rd', 21: 22: 23: 31: 'st' txt_months="[''," 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']; f="{" day d: function() pad(f.j(), 2) }, f.l().substr(0, 3) j: jsdate.getdate() l: txt_weekdays[f.w()] n: f.w() s: txt_ordin[f.j()] 'th' w: jsdate.getday() z: return(jsdate date(jsdate.getfullyear() ' 1')) 864e5>> 0
			},
	
			// Week 
			W: function() {
				var a = f.z(),
					b = 364 + f.L() - a;
				var nd2, nd = (new Date(jsdate.getFullYear() + '/1/1').getDay() || 7) - 1;
				if(b <= 2 && ((jsdate.getday() || 7) - 1) <="2" b) { return 1; } else if(a nd>= 4 && a >= (6 - nd)) {
						nd2 = new Date(jsdate.getFullYear() - 1 + '/12/31');
						return date('W', Math.round(nd2.getTime() / 1000));
					} else {
						return(1 + (nd <= 3 ? ((a + nd) 7) : (a - (7 nd))>> 0);
					}
				}
			},
	
			// Month 
			F: function() {
				return txt_months[f.n()]
			},
			m: function() {
				return pad(f.n(), 2)
			},
			M: function() {
				return f.F().substr(0, 3)
			},
			n: function() {
				return jsdate.getMonth() + 1
			},
			t: function() {
				var n;
				if((n = jsdate.getMonth() + 1) == 2) {
					return 28 + f.L();
				} else {
					if(n & 1 && n < 8 || !(n & 1) && n > 7) {
						return 31;
					} else {
						return 30;
					}
				}
			},
	
			// Year 
			L: function() {
				var y = f.Y();
				return(!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0
			},
			//o not supported yet 
			Y: function() {
				return jsdate.getFullYear()
			},
			y: function() {
				return(jsdate.getFullYear() + '').slice(2)
			},
	
			// Time 
			a: function() {
				return jsdate.getHours() > 11 ? 'pm' : 'am'
			},
			A: function() {
				return f.a().toUpperCase()
			},
			B: function() {
				// peter paul koch: 
				var off = (jsdate.getTimezoneOffset() + 60) * 60;
				var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
				var beat = Math.floor(theSeconds / 86.4);
				if(beat > 1000) beat -= 1000;
				if(beat < 0) beat += 1000;
				if((String(beat)).length == 1) beat = '00' + beat;
				if((String(beat)).length == 2) beat = '0' + beat;
				return beat;
			},
			g: function() {
				return jsdate.getHours() % 12 || 12
			},
			G: function() {
				return jsdate.getHours()
			},
			h: function() {
				return pad(f.g(), 2)
			},
			H: function() {
				return pad(jsdate.getHours(), 2)
			},
			i: function() {
				return pad(jsdate.getMinutes(), 2)
			},
			s: function() {
				return pad(jsdate.getSeconds(), 2)
			},
			//u not supported yet 
	
			// Timezone 
			//e not supported yet 
			//I not supported yet 
			O: function() {
				var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
				if(jsdate.getTimezoneOffset() > 0) t = '-' + t;
				else t = '+' + t;
				return t;
			},
			P: function() {
				var O = f.O();
				return(O.substr(0, 3) + ':' + O.substr(3, 2))
			},
			//T not supported yet 
			//Z not supported yet 
	
			// Full Date/Time 
			c: function() {
				return f.Y() + '-' + f.m() + '-' + f.d() + 'T' + f.h() + ':' + f.i() + ':' + f.s() + f.P()
			},
			//r not supported yet 
			U: function() {
				return Math.round(jsdate.getTime() / 1000)
			}
		};
	
		return format.replace(/([a-zA-Z])/g,function(t, s) {
			var ret='';
			if(t != s) {
				// escaped 
				ret = s;
			} else if(f[s]) {
				// a date function exists 
				ret = f[s]();
			} else {
				// nothing special 
				ret = s;
			}
			return ret;
		});
	}
	/*
	 * dataURLtoBlob
	 * 功能，base64转blob
	 */
	function dataURLtoBlob(dataurl) {
		var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], { type: mime });
	}
	/*
	 * decodeURIString
	 * 功能，解码中文
	 */
	function decodeURIString(obj){
		for(var k in obj){
			if(valType(obj[k])=='string' && obj[k]){
				try{
					obj[k]=decodeURI(obj[k]);
				}
				catch(event){}
			}
			if(valType(obj[k])=='object'){
				obj[k]=decodeURIString(obj[k]);
			}
		}
		return obj;
	}
	/*
	 * getApp
	 * 功能，获取平台类型是否是iphone
	 */
	function getApp(){
		var u = navigator.userAgent.toLowerCase();
		if(u.indexOf('iphone')>-1){
			return 'iphone';
		}
	}
	/*
	 * cookie
	 * 功能，操作cookie
	 */
	function cookie(name,value,domain,path){
		if(isUndefined(domain)){
			domain='';
		}
		if(isUndefined(path)){
			path='/';
		}
		var ckStr=';domain='+domain+';path='+path;
		if(location.protocol=='https'){
			ckStr+=';SameSite=None;Secure=true';
		}
		var set=function(name,value){
			var time = 360*24*60*60*1000;
			var exp = new Date();
			exp.setTime(exp.getTime() + time);
			try{
				document.cookie = name + '='+ escape (value) + ';expires=' + exp.toGMTString()+ckStr;
			}
			catch(event){console.error(event)}
		},
		get=function(name){
			var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
			if(arr=document.cookie.match(reg)){
				return unescape(arr[2]);
			}
			else{
				return null;
			}
		},
		del=function(name){
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=get(name);
			if(cval!=null){
				document.cookie= name + '='+cval+';expires='+exp.toGMTString()+ckStr;
			}
		};
		if(!isUndefined(name) && !isUndefined(value)){
			if(value=='delete'){
				del(name);
				return null;
			}
			else{
				set(name,value);
				return get(name);
			}
			
		}
		else if(!isUndefined(name) && isUndefined(value)){
			return get(name);
		}
		else if(!isUndefined(name)){
			
		}
	}
	/*
	 * arrayToString
	 * 功能，二维数组传化成字符串
	 */
	function arrayToString(arr) {
		var str='';
		if(!isUndefined(arr)){
			for(var i=0;i<arr.length;i++){ var temp="arr[i];" if(i>0){
					str+=',';
				}
				for(var y=0;y<temp.length;y++){ if(y>0){
						str+=';';
					}
					if(valType(temp[y])=='number'){
						str+=parseInt(temp[y]*100);
					}
					else{
						str+=temp[y];
					}
					
				}
			}
		}
		return str;
	}
	/*
	 * stringToArray
	 * 功能，字符串转化成二维数组
	 */
	function stringToArray(str) {
		var newArr=[];
		if(!isUndefined(str)){
			var arr=str.split(',');
			for(var i=0;i</temp.length;y++){></arr.length;i++){></=></=></ele.listenerList.length;i++){></13){></arr.length;i++){></bufferEnd){></0){></0){></slider.getWidth()*.5){></firstSeekTime){></oldTime){></firstSeekTime){></sliderDownTime){></0){></0){></ckW){></=ckH){></ckW></0){></maxI;i++){></0)></0){></files.length;i++){></0)left=0;></vars['prompt'].length;i++){></arr.length;i++){></arr.length;i++){></duration){></arr.length;i++){></firstSeekTime){></oldTime){></0)fn=0;></arr.length;i++){></10){></10){></ad['front']['list'].length-1){></ad['front']['list'].length;i++){></1?v+=.1:1);></1?v+=.1:1);></1?v+=.1:1);></parseInt(duration*100)*0.01){></firstSeekTime){></oldTime){></oldTime){></arr.length;i++){></19){></arr.length;i++){></temp.length;i++){></vstr.length;i++){>