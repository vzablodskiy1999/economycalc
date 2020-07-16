import {connect} from "react-redux";
import {EconomyTableSettings} from "../components/EconomyTableSettings/EconomyTableSettings";
import {addColumn, changeCurrency} from "../actions";

const mapStateToProps = (state) => ({
    common: state.commonReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        addColumn: (name) => dispatch(addColumn(name)),
        changeCurrency: (currency) => dispatch(changeCurrency(currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EconomyTableSettings);