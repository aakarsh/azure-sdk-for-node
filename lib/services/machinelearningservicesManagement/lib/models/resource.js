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
 * Azure Resource Manager resource envelope.
 *
 * @extends models['BaseResource']
 */
class Resource extends models['BaseResource'] {
  /**
   * Create a Resource.
   * @member {string} [id] Specifies the resource ID.
   * @member {string} [name] Specifies the name of the resource.
   * @member {object} [identity] The identity of the resource.
   * @member {string} [identity.principalId] The principal ID of resource
   * identity.
   * @member {string} [identity.tenantId] The tenant ID of resource.
   * @member {string} [identity.type] The identity type. Possible values
   * include: 'SystemAssigned'
   * @member {string} [location] Specifies the location of the resource.
   * @member {string} [type] Specifies the type of the resource.
   * @member {object} [tags] Contains resource tags defined as key/value pairs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Resource
   *
   * @returns {object} metadata of Resource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Resource',
      type: {
        name: 'Composite',
        className: 'Resource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          identity: {
            required: false,
            readOnly: true,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'Identity'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Resource;