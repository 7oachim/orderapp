#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { OrderappStackJw } from '../lib/orderapp-stack';


const app = new cdk.App();
new OrderappStackJw(app, 'OrderappStackJw');
