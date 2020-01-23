import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

require('dotenv').config({path:'.env.test'});
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
