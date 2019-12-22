import React from 'react';

import { Route, Switch} from 'react-router-dom';

import {
	Main,
	HIFU,
	Contact,
	Services,
	Impressum,
	NailDesign,
	MicroBlading,
	DateBooking,
	Wimpernwelle,
	LashesExtension,
	Confidentiality,
	ElectricEpilation,
	DauerhafteHaarentfernung
} from './containers';

import {Header, Footer} from './components';


const App = () => {
	return (
		<>
			<Header />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/HIFU" component={HIFU} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/naildesign" component={NailDesign} />
					<Route exact path = "/impressum" component={Impressum} />
					<Route exact path="/dateBooking" component={DateBooking} />
					<Route exact path="/microblading" component={MicroBlading} />
					<Route exact path="/wimpernwelle" component={Wimpernwelle} />
					<Route exact path="/confidentiality" component={Confidentiality} />
					<Route exact path="/lashesextension" component={LashesExtension} />
					<Route exact path="/electricepilation" component={ElectricEpilation} />
					<Route exact path="/dauerhafteHaarentfernung" component={DauerhafteHaarentfernung} />
				</Switch>
			<Footer/>
		</>
	)
};



export default App;
