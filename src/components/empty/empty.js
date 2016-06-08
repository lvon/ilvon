require('./empty.less');



class Empty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };

        
    }

    componentDidMount() {
      
    }

    render() {
        let t = this;
        return (
            <div className="empty"> empty </div>
        );
    }
}



module.exports = Empty;
