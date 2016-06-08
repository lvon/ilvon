require('./PageDemo.less');

var reactMixin = require('react-mixin');

let i18n = require('i18n');

let Actions = require('./actions');
let Store = require('./store');

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    

    render() {
        let me = this;
        return (
            <div className="mPageDemo">
                321
            </div>
        );
    }
}

reactMixin.onClass(Page, Reflux.connect(Store));

ReactDOM.render(<Page/>, document.getElementById('App'));

module.exports = Page;
