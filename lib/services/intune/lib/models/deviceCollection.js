/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DeviceCollection class.
 * @constructor
 * @member {array} value
 * 
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 * 
 */
function DeviceCollection() {
}

util.inherits(DeviceCollection, Array);

/**
 * Defines the metadata of DeviceCollection
 *
 * @returns {object} metadata of DeviceCollection
 *
 */
DeviceCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceCollection',
    type: {
      name: 'Composite',
      className: 'DeviceCollection',
      modelProperties: {
        value: {
          required: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DeviceElementType',
                type: {
                  name: 'Composite',
                  className: 'Device'
                }
            }
          }
        },
        nextlink: {
          required: false,
          serializedName: 'nextlink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceCollection;