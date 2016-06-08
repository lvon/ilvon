require('./Menu.less');
let global = require('../../components/common/data');
let menuJson = [{
                    name: global.douyuCn,
                    code: global.douyu,
                },{
                    name: global.huyaCn,
                    code: global.huya,
                },{
                    name: global.pandaCn,
                    code: global.panda,
                },{
                    name: global.zhanqiCn,
                    code: global.zhanqi,
                },{
                    name: global.longzhuCn,
                    code: global.longzhu,
                }]

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           active: menuJson[0]
        };

        
    }

    componentDidMount() {
      
    }

    itemOnClick(item){
        let t = this;

        t.props.onChange(item);
        t.state.active = item;
        t.setState(t.state);

    }
    goTo(url){
        window.open(url);
    }
    render() {
        let t = this;
        

        t.props.headHeight = t.props.headHeight;
        let style={
            width:t.props.width+'px',
            height:window.globalData.clientHeight - t.props.headHeight + 'px',
            top: t.props.headHeight+'px'
        }
        return (<div className="Menu" style={style}>
                  


                    <div className='title'><span className='relative'><i className='icon'></i></span>直播来源</div>
                   
                    {
                        menuJson.map((item)=>{
                            if(item.code ==  t.state.active.code){
                                return <div className='item-active'>{item.name}<span className='code'>-{item.code}</span></div>
                            }
                            return <div onClick={t.itemOnClick.bind(t,item)} className='item'>{item.name}<span className='code'>-{item.code}</span></div>
                        })
                    }

                    <div className='title' style={{marginTop:'10px'}}><span className='relative'><i className='icon icon-my'></i></span>个人中心</div>
                    <div className='item' onClick={t.goTo.bind(t,"login.html")}>我的收藏</div>
                    <div className='item' onClick={t.goTo.bind(t,"login.html")}>设置</div>


                    
                </div>);
    }
}



module.exports = Menu;
