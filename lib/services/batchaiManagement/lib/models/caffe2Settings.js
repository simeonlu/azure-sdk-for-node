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
 * Specifies the settings for Caffe2 job.
 *
 */
class Caffe2Settings {
  /**
   * Create a Caffe2Settings.
   * @member {string} pythonScriptFilePath The path and file name of the python
   * script to execute the job.
   * @member {string} [pythonInterpreterPath] The path to python interpreter.
   * @member {string} [commandLineArgs] Command line arguments that needs to be
   * passed to the python script.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Caffe2Settings
   *
   * @returns {object} metadata of Caffe2Settings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Caffe2Settings',
      type: {
        name: 'Composite',
        className: 'Caffe2Settings',
        modelProperties: {
          pythonScriptFilePath: {
            required: true,
            serializedName: 'pythonScriptFilePath',
            type: {
              name: 'String'
            }
          },
          pythonInterpreterPath: {
            required: false,
            serializedName: 'pythonInterpreterPath',
            type: {
              name: 'String'
            }
          },
          commandLineArgs: {
            required: false,
            serializedName: 'commandLineArgs',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Caffe2Settings;