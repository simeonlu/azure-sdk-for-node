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
 * @summary Usage metrics for a pool across an aggregation interval.
  *
 */
class PoolUsageMetrics {
  /**
   * Create a PoolUsageMetrics.
   * @member {string} poolId The ID of the pool whose metrics are aggregated in
   * this entry.
   * @member {date} startTime The start time of the aggregation interval
   * covered by this entry.
   * @member {date} endTime The end time of the aggregation interval covered by
   * this entry.
   * @member {string} vmSize The size of virtual machines in the pool. All VMs
   * in a pool are the same size. For information about available sizes of
   * virtual machines for Cloud Services pools (pools created with
   * cloudServiceConfiguration), see Sizes for Cloud Services
   * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
   * Batch supports all Cloud Services VM sizes except ExtraSmall,
   * STANDARD_A1_V2 and STANDARD_A2_V2. For information about available VM
   * sizes for pools using images from the Virtual Machines Marketplace (pools
   * created with virtualMachineConfiguration) see Sizes for Virtual Machines
   * (Linux)
   * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
   * or Sizes for Virtual Machines (Windows)
   * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
   * Batch supports all Azure VM sizes except STANDARD_A0 and those with
   * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
   * @member {number} totalCoreHours The total core hours used in the pool
   * during this aggregation interval.
   * @member {number} dataIngressGiB The cross data center network ingress to
   * the pool during this interval, in GiB.
   * @member {number} dataEgressGiB The cross data center network egress from
   * the pool during this interval, in GiB.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PoolUsageMetrics
   *
   * @returns {object} metadata of PoolUsageMetrics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PoolUsageMetrics',
      type: {
        name: 'Composite',
        className: 'PoolUsageMetrics',
        modelProperties: {
          poolId: {
            required: true,
            serializedName: 'poolId',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          vmSize: {
            required: true,
            serializedName: 'vmSize',
            type: {
              name: 'String'
            }
          },
          totalCoreHours: {
            required: true,
            serializedName: 'totalCoreHours',
            type: {
              name: 'Number'
            }
          },
          dataIngressGiB: {
            required: true,
            serializedName: 'dataIngressGiB',
            type: {
              name: 'Number'
            }
          },
          dataEgressGiB: {
            required: true,
            serializedName: 'dataEgressGiB',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = PoolUsageMetrics;
