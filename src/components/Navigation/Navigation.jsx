// Import External Dependencies
import React from 'react';
import Banner from 'react-banner';
import DocSearch from 'docsearch.js';

// Import Utilities/Images
import GitHubIcon from '../../styles/icons/github.svg';

// Import Components
import Link from '../Link/Link';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown/Dropdown';

// Load Styling
import 'docsearch.js/dist/cdn/docsearch.css';
import './Navigation.scss';
import './Search.scss';

export default class Navigation extends React.Component {
  render() {
    let { pathname, links, toggleSidebar } = this.props;

    return (
      <Banner
        blockName="navigation"
        logo={ <Logo light={ true } /> }
        url={ pathname }
        items={[
          ...links,
          {
            title: 'GitHub Repository',
            url: '//github.com/webpack/webpack',
            className: 'navigation__item--icon',
            content: <i className="icon-github" />
          },
          {
            title: 'Webpack on Stack Overflow',
            url: '//stackoverflow.com/questions/tagged/webpack',
            className: 'navigation__item--icon',
            content: <i className="icon-stack-overflow" />
          },
          {
            className: 'navigation__item--icon',
            content: (
              <Dropdown
                className="navigation__languages"
                items={[
                  { title: 'English', url: 'https://webpack.js.org/' },
                  { title: '中文', url: 'https://doc.webpack-china.org/' }
                ]} />
            )
          }
        ]}
        link={ Link }
        onMenuClick={ toggleSidebar } />
    );
  }

  componentDidMount() {
    DocSearch({
      apiKey: 'fac401d1a5f68bc41f01fb6261661490',
      indexName: 'webpack-js-org',
      inputSelector: '.navigation-search__input'
    });
  }
}
