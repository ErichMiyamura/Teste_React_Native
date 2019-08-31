/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/Page1';
import Routes from "./src";

AppRegistry.registerComponent(appName, () => Routes);


