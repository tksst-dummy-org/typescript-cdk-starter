#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkInitStack } from '../lib/cdk-init-stack';

const app = new cdk.App();
new CdkInitStack(app, 'CdkInitStack');
