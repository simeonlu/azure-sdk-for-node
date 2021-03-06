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
 * @summary Options when disabling a job.
  *
 */
class JobDisableParameter {
  /**
   * Create a JobDisableParameter.
   * @member {string} disableTasks What to do with active tasks associated with
   * the job. Values are:
   *
   * requeue - Terminate running tasks and requeue them. The tasks will run
   * again when the job is enabled.
   * terminate - Terminate running tasks. The tasks will not run again.
   * wait - Allow currently running tasks to complete. Possible values include:
   * 'requeue', 'terminate', 'wait'
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobDisableParameter
   *
   * @returns {object} metadata of JobDisableParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobDisableParameter',
      type: {
        name: 'Composite',
        className: 'JobDisableParameter',
        modelProperties: {
          disableTasks: {
            required: true,
            serializedName: 'disableTasks',
            type: {
              name: 'Enum',
              allowedValues: [ 'requeue', 'terminate', 'wait' ]
            }
          }
        }
      }
    };
  }
}

module.exports = JobDisableParameter;
