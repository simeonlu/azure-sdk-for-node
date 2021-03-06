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
 * Api Operation details.
 *
 * @extends models['Resource']
 */
class OperationContract extends models['Resource'] {
  /**
   * Create a OperationContract.
   * @member {array} [templateParameters] Collection of URL template
   * parameters.
   * @member {string} [description] Description of the operation. May include
   * HTML formatting tags.
   * @member {object} [request] An entity containing request details.
   * @member {string} [request.description] Operation request description.
   * @member {array} [request.queryParameters] Collection of operation request
   * query parameters.
   * @member {array} [request.headers] Collection of operation request headers.
   * @member {array} [request.representations] Collection of operation request
   * representations.
   * @member {array} [responses] Array of Operation responses.
   * @member {string} [policies] Operation Policies
   * @member {string} displayName Operation Name.
   * @member {string} method A Valid HTTP Operation Method. Typical Http
   * Methods like GET, PUT, POST but not limited by only them.
   * @member {string} urlTemplate Relative URL template identifying the target
   * resource for this operation. May include parameters. Example:
   * /customers/{cid}/orders/{oid}/?date={date}
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationContract
   *
   * @returns {object} metadata of OperationContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationContract',
      type: {
        name: 'Composite',
        className: 'OperationContract',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          templateParameters: {
            required: false,
            serializedName: 'properties.templateParameters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ParameterContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterContract'
                  }
              }
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            constraints: {
              MaxLength: 1000
            },
            type: {
              name: 'String'
            }
          },
          request: {
            required: false,
            serializedName: 'properties.request',
            type: {
              name: 'Composite',
              className: 'RequestContract'
            }
          },
          responses: {
            required: false,
            serializedName: 'properties.responses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResponseContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResponseContract'
                  }
              }
            }
          },
          policies: {
            required: false,
            serializedName: 'properties.policies',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 300,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          method: {
            required: true,
            serializedName: 'properties.method',
            type: {
              name: 'String'
            }
          },
          urlTemplate: {
            required: true,
            serializedName: 'properties.urlTemplate',
            constraints: {
              MaxLength: 1000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationContract;
