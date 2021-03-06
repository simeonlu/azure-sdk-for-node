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
 * The campaigns list result.
 */
class DevicesQueryResult extends Array {
  /**
   * Create a DevicesQueryResult.
   * @member {string} [nextLink] If partial results are returned, this property
   * describes a URI path to get the next result page.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DevicesQueryResult
   *
   * @returns {object} metadata of DevicesQueryResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DevicesQueryResult',
      type: {
        name: 'Composite',
        className: 'DevicesQueryResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeviceQueryResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeviceQueryResult'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DevicesQueryResult;
