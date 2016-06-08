require('./UiMain.less');
let Menu = require('../../components/menu');
let Head = require('../../components/head');


class UiMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            globalData:window.globalData,
            loadHeight:0,
            headHeight:50,
            menuWidth:240
        };

    }
    componentWillMount(){
        let t = this;
        // $('.body').scroll = t.scroll.bind(t);

        t._resize();
        $(window).resize(function() { 
           t._resize();
        });

       
    }

    _resize(){
        let t = this;
        t.state.globalData = window.globalData;
        let menuWidth = t.state.menuWidth;
        let headHeight= t.state.headHeight;


        let bodyStyle = {};
        bodyStyle.width = t.state.globalData.clientWidth-(menuWidth+26)+'px';
        bodyStyle.left = (menuWidth+26)+'px';
        bodyStyle.height = t.state.globalData.clientHeight-(headHeight+1)+'px';
        bodyStyle.top = headHeight + 1 +'px';

        t.state.bodyStyle = bodyStyle;
        t.setState(t.state);
        t.props.resize(bodyStyle);
    }

    componentDidMount() {
        let t = this;
        //这里既有可能dom还没有渲染完，所以延迟一秒执行
        setTimeout(t.scroll.bind(t,'first'),1000);
    }
    
    refresh(){
        let t = this;
        $('.body').scrollTop(0);
        setTimeout(function(){
            t.scroll('first');
        },500);
    }
    scroll(sign){

        
        let t = this;
        //如果是第一次加载
        if(sign!='first'){
            // console.log(t.state.loadHeight,$('.body').scrollTop());
            //如果加载过了就 return
            if(t.state.loadHeight > $('.body').scrollTop()){
                return
            }
        }
        


        t.state.loadHeight = $('.body').scrollTop();
        
        
        $(".main-continer").find('img').each(function(){
            let position = t.getElementTopLeft(this);
            // console.log(position.top, $('.body').scrollTop() + t.state.globalData.clientHeight);
            if(position.top < $('.body').scrollTop() + t.state.globalData.clientHeight){
                $(this).attr('src',$(this).attr('data-src'));
            }
        });

        
    }

   getElementTopLeft(obj) {  
      var top = 0;  
      var left = 0;  

      while(obj){  
          top += obj.offsetTop;  
          left += obj.offsetLeft;  

          obj = obj.offsetParent;  
      }  

      return {top:top,left:left};  
    }

    render() {
        let t = this;
        
        //arguments[0]  标签类型；arguments[1]  添加哪些 props，arguments[2]  react 虚拟节点  
        let children =React.createElement('div',{},t.props.children);

        
        let bodyStyle = t.state.bodyStyle;
        let menuWidth = t.state.menuWidth;
        let headHeight = t.state.headHeight;

        return ( <div className="UiMain">
                    <Head height={headHeight}/>
                     <Menu width={menuWidth} headHeight={headHeight} onChange={t.props.onMenuChange.bind(t)}/>
                    <div className='body' style={bodyStyle} onScroll={t.scroll.bind(t)}>
                        <div className='main-continer'>
                            {children}
                        </div>
                    </div> 

                 </div>);
    }
}




module.exports = UiMain;