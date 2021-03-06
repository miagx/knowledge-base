import * as React from 'react';
import * as logo from '../../../assets/images/logo.svg';
import * as bars from '../../../assets/images/icons/bars.svg';
import * as close from '../../../assets/images/icons/close.svg';
import Link from 'gatsby-link';
import Search from '../../Search/Search';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import ExternalLink from '../../ExternalLink/ExternalLink';
import Caret from './Caret/Caret';
import './Navigation.scss';

interface Props {
  showSearch: boolean;
}

interface State {
  isMobileVisible: boolean;
}

class Navigation extends React.PureComponent<Props, State> {
  state: State = {
    isMobileVisible: false
  };

  render() {
    const { showSearch } = this.props;
    const { isMobileVisible } = this.state;

    return (
      <div className="navigation container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-gutter-lr">
            <MobileNavigation isVisible={isMobileVisible} />
            <div className="hamburger-toggle show-xs-only" onClick={this.handleClick}>
              <img src={(isMobileVisible && close) || bars} />
            </div>
            <div className="branding">
              <Link to="/">
                <img src={logo} height={42} alt="MyCrypto logo" />
              </Link>
            </div>
            <ul className="menu hide-xs-only">
              <li>
                <Link to="/" activeClassName="active">
                  Knowledge base
                  <Caret />
                </Link>
              </li>
              <li>
                <Link to="/contact-us" activeClassName="active">
                  Contact us
                  <Caret />
                </Link>
              </li>
              <li>
                <ExternalLink to="https://mycrypto.com" currentTab={true}>
                  Back to MyCrypto
                  <Caret />
                </ExternalLink>
              </li>
            </ul>
          </div>
          {showSearch && (
            <div className="col-xs-12 col-md-offset-2 col-md-4 col-gutter-lr last-md xs-end align-end navigation-search">
              <Search />
            </div>
          )}
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isMobileVisible: !this.state.isMobileVisible
    });
  };
}

export default Navigation;
