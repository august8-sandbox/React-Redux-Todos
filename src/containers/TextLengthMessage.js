import { connect } from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = state => ({
  length: state.textLength.get('length'),
});

export default connect(mapStateToProps)(Message);
