import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda')
import apigw = require('@aws-cdk/aws-apigateway')

export class OrderappStackJw extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const echo = new lambda.Function(this, "EchoFunctionJW", {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.asset('echo-handler'),
      handler: "main.handler"
    });
  }
}