#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { OrderappStackJw } from '../lib/orderapp-stack';
import { BackendStack } from '../lib/backend-stack';
import { FrontendStack } from '../lib/frontend-stack';


const app = new cdk.App();
const orderappStackJw = new OrderappStackJw(app, 'OrderappStackJw');
const backendStack = new BackendStack(app, 'BackendStackJw');
const frontendStack = new FrontendStack(app, 'FrontendStackJw');

const ownerTag = new cdk.Tag("owner", "Max.Mustermann");
[orderappStackJw, backendStack, frontendStack].forEach(stack => ownerTag.visit(stack));
