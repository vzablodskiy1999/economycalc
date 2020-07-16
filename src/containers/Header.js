import {connect} from "react-redux";
import {Header} from "../components/Header/Header";

const mapStateToProps = (state) => ({
    app: state.commonReducer
})

export default connect(mapStateToProps)(Header);