/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents the properties of the Dns Resource Reference Request.
 *
 */
class DnsResourceReferenceRequest {
  /**
   * Create a DnsResourceReferenceRequest.
   * @member {array} [targetResources] A list of references to azure resources
   * for which referencing dns records need to be queried.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DnsResourceReferenceRequest
   *
   * @returns {object} metadata of DnsResourceReferenceRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DnsResourceReferenceRequest',
      type: {
        name: 'Composite',
        className: 'DnsResourceReferenceRequest',
        modelProperties: {
          targetResources: {
            required: false,
            serializedName: 'properties.targetResources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DnsResourceReferenceRequest;
