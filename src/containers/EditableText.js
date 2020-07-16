import {connect} from "react-redux";
import {EditableText} from "../components/EditableText/EditableText";
import {changeFieldValue} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        changeFieldValue: (field, id, value) => dispatch(changeFieldValue(field, id, value))
    }
}

export default connect(null, mapDispatchToProps)(EditableText);