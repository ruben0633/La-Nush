import React from 'react';

import {Route, Switch} from 'react-router-dom';

import {
	Main,
	HIFU,
	Contact,
	Services,
	NailDesign,
	MicroBladin,
	DateBooking,
	Wimpernwelle,
	LashesExtension,
	Confidentiality,
	ElectricEpilation,
	PermanentHairRemoval
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
					<Route exact path="/dateBooking" component={DateBooking} />
					<Route exact path="/microbladin" component={MicroBladin} />
					<Route exact path="/wimpernwelle" component={Wimpernwelle} />
					<Route exact path="/confidentiality" component={Confidentiality} />
					<Route exact path="/lashesextension" component={LashesExtension} />
					<Route exact path="/electricepilation" component={ElectricEpilation} />
					<Route exact path="/permanenthairremoval" component={PermanentHairRemoval} />
				</Switch>
			<Footer/>
		</>
	)
};



export default App;
