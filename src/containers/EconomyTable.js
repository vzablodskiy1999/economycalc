import {connect} from "react-redux";
import {EconomyTable} from "../components/EconomyTable/EconomyTable";
import {removeColumn} from "../actions";

const mapStateToProps = (state) => ({
    common: state.commonReducer,
    cols: state.colsReducer
});

const mapDispatchToProps = (dispatch) => {
    return {
        removeColumn: (id) => dispatch(removeColumn(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EconomyTable);