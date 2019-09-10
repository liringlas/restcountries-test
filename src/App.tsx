import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import { Wrapper } from './styled/Wrapper';
import { Header } from './styled/Header';
import { HeaderHeading } from './styled/HeaderHeading';
import { cssVars } from './styled/vars';

import { MainPage } from './pages/MainPage';
import { RegionPage } from './pages/RegionPage';
import { CountryPage } from './pages/CountryPage';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${cssVars.color.light};    
  }
`

const App: React.FC = () => {
  // I had to hardcore those values since I found no API reference 
  // for fetching them from https://restcountries.eu
  // Also, data memoization was omitted for the sake of simplicity of this project
  const regions = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <HeaderHeading>
            <Link to={"/"}>restcountries.eu | Regions data</Link>
          </HeaderHeading>
        </Header>

        <Switch>
          <Route exact path="/"
            render={props => <MainPage {...props} 
                regions={regions}
              />
            }
          />
          <Route path="/region/:name" 
            render={props => <RegionPage {...props} 
            regions={regions}
          />
        }
          />
          <Route path="/country/:name"
            render={props => <CountryPage {...props} 
            regions={regions}
          />
        }
          />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
