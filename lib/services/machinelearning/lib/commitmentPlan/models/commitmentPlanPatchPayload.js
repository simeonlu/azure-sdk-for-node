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
 * The properties of a commitment plan which may be updated via PATCH.
 *
 */
class CommitmentPlanPatchPayload {
  /**
   * Create a CommitmentPlanPatchPayload.
   * @member {object} [tags] User-defined tags for the commitment plan.
   * @member {object} [sku] The commitment plan SKU.
   * @member {number} [sku.capacity] The scale-out capacity of the resource. 1
   * is 1x, 2 is 2x, etc. This impacts the quantities and cost of any
   * commitment plan resource.
   * @member {string} [sku.name] The SKU name. Along with tier, uniquely
   * identifies the SKU.
   * @member {string} [sku.tier] The SKU tier. Along with name, uniquely
   * identifies the SKU.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CommitmentPlanPatchPayload
   *
   * @returns {object} metadata of CommitmentPlanPatchPayload
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CommitmentPlanPatchPayload',
      type: {
        name: 'Composite',
        className: 'CommitmentPlanPatchPayload',
        modelProperties: {
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
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'ResourceSku'
            }
          }
        }
      }
    };
  }
}

module.exports = CommitmentPlanPatchPayload;
