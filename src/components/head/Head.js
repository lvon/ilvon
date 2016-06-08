require('./Head.less');

class Head extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };

        
    }

    componentDidMount() {
      
    }

   render() {
        let t = this;
        
        // //arguments[0]  标签类型；arguments[1]  添加哪些 props，arguments[2]  react 虚拟节点  
        // let children =React.createElement('div',{},t.props.children);

        let style={
            height:t.props.height+'px'
        }
        return (<div className="Head" style={style}>
                
                </div>);
    }
}



module.exports = Head;
