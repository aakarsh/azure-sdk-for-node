/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const ServiceClient = msRestAzure.AzureServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');
const operations = require('./operations');


/**
 * Checks whether a domain name in the cloudapp.azure.com zone is available for
 * use.
 *
 * @param {string} location The location of the domain name.
 *
 * @param {string} domainNameLabel The domain name to be verified. It must
 * conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DnsNameAvailabilityResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _checkDnsNameAvailability(location, domainNameLabel, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (location === null || location === undefined || typeof location.valueOf() !== 'string') {
      throw new Error('location cannot be null or undefined and it must be of type string.');
    }
    if (domainNameLabel === null || domainNameLabel === undefined || typeof domainNameLabel.valueOf() !== 'string') {
      throw new Error('domainNameLabel cannot be null or undefined and it must be of type string.');
    }
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability';
  requestUrl = requestUrl.replace('{location}', encodeURIComponent(location));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  let queryParameters = [];
  queryParameters.push('domainNameLabel=' + encodeURIComponent(domainNameLabel));
  queryParameters.push('api-version=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DnsNameAvailabilityResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a NetworkManagementClient. */
class NetworkManagementClient extends ServiceClient {
  /**
   * Create a NetworkManagementClient.
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   * @param {string} subscriptionId - The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   */
  constructor(credentials, subscriptionId, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.apiVersion = '2018-02-01';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://management.azure.com';
    }
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.applicationGateways = new operations.ApplicationGateways(this);
    this.applicationSecurityGroups = new operations.ApplicationSecurityGroups(this);
    this.ddosProtectionPlans = new operations.DdosProtectionPlans(this);
    this.availableEndpointServices = new operations.AvailableEndpointServices(this);
    this.expressRouteCircuitAuthorizations = new operations.ExpressRouteCircuitAuthorizations(this);
    this.expressRouteCircuitPeerings = new operations.ExpressRouteCircuitPeerings(this);
    this.expressRouteCircuitConnections = new operations.ExpressRouteCircuitConnections(this);
    this.expressRouteCircuits = new operations.ExpressRouteCircuits(this);
    this.expressRouteServiceProviders = new operations.ExpressRouteServiceProviders(this);
    this.expressRouteCrossConnections = new operations.ExpressRouteCrossConnections(this);
    this.expressRouteCrossConnectionPeerings = new operations.ExpressRouteCrossConnectionPeerings(this);
    this.loadBalancers = new operations.LoadBalancers(this);
    this.loadBalancerBackendAddressPools = new operations.LoadBalancerBackendAddressPools(this);
    this.loadBalancerFrontendIPConfigurations = new operations.LoadBalancerFrontendIPConfigurations(this);
    this.inboundNatRules = new operations.InboundNatRules(this);
    this.loadBalancerLoadBalancingRules = new operations.LoadBalancerLoadBalancingRules(this);
    this.loadBalancerNetworkInterfaces = new operations.LoadBalancerNetworkInterfaces(this);
    this.loadBalancerProbes = new operations.LoadBalancerProbes(this);
    this.networkInterfaces = new operations.NetworkInterfaces(this);
    this.networkInterfaceIPConfigurations = new operations.NetworkInterfaceIPConfigurations(this);
    this.networkInterfaceLoadBalancers = new operations.NetworkInterfaceLoadBalancers(this);
    this.networkSecurityGroups = new operations.NetworkSecurityGroups(this);
    this.securityRules = new operations.SecurityRules(this);
    this.defaultSecurityRules = new operations.DefaultSecurityRules(this);
    this.networkWatchers = new operations.NetworkWatchers(this);
    this.packetCaptures = new operations.PacketCaptures(this);
    this.connectionMonitors = new operations.ConnectionMonitors(this);
    this.operations = new operations.Operations(this);
    this.publicIPAddresses = new operations.PublicIPAddresses(this);
    this.routeFilters = new operations.RouteFilters(this);
    this.routeFilterRules = new operations.RouteFilterRules(this);
    this.routeTables = new operations.RouteTables(this);
    this.routes = new operations.Routes(this);
    this.bgpServiceCommunities = new operations.BgpServiceCommunities(this);
    this.usages = new operations.Usages(this);
    this.virtualNetworks = new operations.VirtualNetworks(this);
    this.subnets = new operations.Subnets(this);
    this.virtualNetworkPeerings = new operations.VirtualNetworkPeerings(this);
    this.virtualNetworkGateways = new operations.VirtualNetworkGateways(this);
    this.virtualNetworkGatewayConnections = new operations.VirtualNetworkGatewayConnections(this);
    this.localNetworkGateways = new operations.LocalNetworkGateways(this);
    this.models = models;
    this._checkDnsNameAvailability = _checkDnsNameAvailability;
    msRest.addSerializationMixin(this);
  }

  /**
   * Checks whether a domain name in the cloudapp.azure.com zone is available for
   * use.
   *
   * @param {string} location The location of the domain name.
   *
   * @param {string} domainNameLabel The domain name to be verified. It must
   * conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DnsNameAvailabilityResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  checkDnsNameAvailabilityWithHttpOperationResponse(location, domainNameLabel, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._checkDnsNameAvailability(location, domainNameLabel, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Checks whether a domain name in the cloudapp.azure.com zone is available for
   * use.
   *
   * @param {string} location The location of the domain name.
   *
   * @param {string} domainNameLabel The domain name to be verified. It must
   * conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DnsNameAvailabilityResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DnsNameAvailabilityResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  checkDnsNameAvailability(location, domainNameLabel, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._checkDnsNameAvailability(location, domainNameLabel, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._checkDnsNameAvailability(location, domainNameLabel, options, optionalCallback);
    }
  }

}

module.exports = NetworkManagementClient;
module.exports['default'] = NetworkManagementClient;
module.exports.NetworkManagementClient = NetworkManagementClient;
module.exports.NetworkManagementModels = models;