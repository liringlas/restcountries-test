import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Wrapper } from './styled/Wrapper';
import { Header } from './styled/Header';
import { HeaderHeading } from './styled/HeaderHeading';

import { MainPage } from './pages/MainPage';
import { RegionPage } from './pages/RegionPage';
import { CountryPage } from './pages/CountryPage';

// I had to hardcore those values since I found no API reference for fetching them on https://restcountries.eu

const App: React.FC = () => {
  const regions = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ statusCode, setStatusCode ] = React.useState<number>(200);

  return (
    <Router>
      <Wrapper>
        <Header>
          <HeaderHeading>restcountries.eu | Regions data</HeaderHeading>
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
