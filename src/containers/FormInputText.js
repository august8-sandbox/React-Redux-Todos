import { connect } from 'react-redux';
import InputText from '../components/InputText';
import { actionTextLength } from '../actions/Action';

const mapDispatchToProps = dispatch => ({
  lengthCheck: () => { dispatch(actionTextLength()); },
  initialValue: '',
});

export default connect(mapDispatchToProps)(InputText);
