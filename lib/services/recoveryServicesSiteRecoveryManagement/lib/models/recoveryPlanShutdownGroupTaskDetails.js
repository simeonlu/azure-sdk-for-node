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
 * This class represents the recovery plan shutdown group task details.
 *
 * @extends models['GroupTaskDetails']
 */
class RecoveryPlanShutdownGroupTaskDetails extends models['GroupTaskDetails'] {
  /**
   * Create a RecoveryPlanShutdownGroupTaskDetails.
   * @member {string} [name] The name.
   * @member {string} [groupId] The group identifier.
   * @member {string} [rpGroupType] The group type.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecoveryPlanShutdownGroupTaskDetails
   *
   * @returns {object} metadata of RecoveryPlanShutdownGroupTaskDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPlanShutdownGroupTaskDetails',
      type: {
        name: 'Composite',
        className: 'RecoveryPlanShutdownGroupTaskDetails',
        modelProperties: {
          childTasks: {
            required: false,
            serializedName: 'childTasks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ASRTaskElementType',
                  type: {
                    name: 'Composite',
                    className: 'ASRTask'
                  }
              }
            }
          },
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          groupId: {
            required: false,
            serializedName: 'groupId',
            type: {
              name: 'String'
            }
          },
          rpGroupType: {
            required: false,
            serializedName: 'rpGroupType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPlanShutdownGroupTaskDetails;