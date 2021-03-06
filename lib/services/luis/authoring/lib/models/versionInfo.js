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

/**
 * Object model of an application version.
 *
 */
class VersionInfo {
  /**
   * Create a VersionInfo.
   * @property {string} version The version ID. E.g.: "0.1"
   * @property {date} [createdDateTime] The version's creation timestamp.
   * @property {date} [lastModifiedDateTime] Timestamp of the last update.
   * @property {date} [lastTrainedDateTime] Timestamp of the last time the
   * model was trained.
   * @property {date} [lastPublishedDateTime] Timestamp when was last
   * published.
   * @property {string} [endpointUrl] The Runtime endpoint URL for this model
   * version.
   * @property {object} [assignedEndpointKey] The endpoint key.
   * @property {object} [externalApiKeys] External keys.
   * @property {number} [intentsCount] Number of intents in this model.
   * @property {number} [entitiesCount] Number of entities in this model.
   * @property {number} [endpointHitsCount] Number of calls made to this
   * endpoint.
   * @property {string} trainingStatus The current training status. Possible
   * values include: 'NeedsTraining', 'InProgress', 'Trained'
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionInfo
   *
   * @returns {object} metadata of VersionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VersionInfo',
      type: {
        name: 'Composite',
        className: 'VersionInfo',
        modelProperties: {
          version: {
            required: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          createdDateTime: {
            required: false,
            serializedName: 'createdDateTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedDateTime: {
            required: false,
            serializedName: 'lastModifiedDateTime',
            type: {
              name: 'DateTime'
            }
          },
          lastTrainedDateTime: {
            required: false,
            serializedName: 'lastTrainedDateTime',
            type: {
              name: 'DateTime'
            }
          },
          lastPublishedDateTime: {
            required: false,
            serializedName: 'lastPublishedDateTime',
            type: {
              name: 'DateTime'
            }
          },
          endpointUrl: {
            required: false,
            serializedName: 'endpointUrl',
            type: {
              name: 'String'
            }
          },
          assignedEndpointKey: {
            required: false,
            serializedName: 'assignedEndpointKey',
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
          },
          externalApiKeys: {
            required: false,
            serializedName: 'externalApiKeys',
            type: {
              name: 'Object'
            }
          },
          intentsCount: {
            required: false,
            serializedName: 'intentsCount',
            type: {
              name: 'Number'
            }
          },
          entitiesCount: {
            required: false,
            serializedName: 'entitiesCount',
            type: {
              name: 'Number'
            }
          },
          endpointHitsCount: {
            required: false,
            serializedName: 'endpointHitsCount',
            type: {
              name: 'Number'
            }
          },
          trainingStatus: {
            required: true,
            serializedName: 'trainingStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'NeedsTraining', 'InProgress', 'Trained' ]
            }
          }
        }
      }
    };
  }
}

module.exports = VersionInfo;
