import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import PluginComponent from './pluginComponent';
require('./plugin.scss');

let goonj_root = document.createElement('div');
goonj_root.id = 'goonj_root';
let a = document.body.appendChild(goonj_root);
render(<PluginComponent/>,a);