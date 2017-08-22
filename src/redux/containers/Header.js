
import { connect } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent.js';
import { toggleProfileiState } from '../services/profile/actions';
import { toggleUiState } from '../services/ui/actions';


const mapStateToProps = (state) => ({
     profileState : state.profile.profileTest,
     uiState: state.ui.uiTest
});

const mapDispatchToProps = (dispatch) => ({ 
      toggleProfileiState: () => dispatch(toggleProfileiState()),
      toggleUiState : () => dispatch(toggleUiState())
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default Header;
