/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ConsistencyPolicy class.
 * @constructor
 * The consistency policy for the Cosmos DB database account.
 *
 * @member {string} defaultConsistencyLevel The default consistency level and
 * configuration settings of the Cosmos DB account. Possible values include:
 * 'Eventual', 'Session', 'BoundedStaleness', 'Strong', 'ConsistentPrefix'
 * @member {number} [maxStalenessPrefix] When used with the Bounded Staleness
 * consistency level, this value represents the number of stale requests
 * tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when
 * defaultConsistencyPolicy is set to 'BoundedStaleness'.
 * @member {number} [maxIntervalInSeconds] When used with the Bounded Staleness
 * consistency level, this value represents the time amount of staleness (in
 * seconds) tolerated. Accepted range for this value is 5 - 86400. Required
 * when defaultConsistencyPolicy is set to 'BoundedStaleness'.
 */
export interface ConsistencyPolicy {
  defaultConsistencyLevel: string;
  maxStalenessPrefix?: number;
  maxIntervalInSeconds?: number;
}

/**
 * @class
 * Initializes a new instance of the Capability class.
 * @constructor
 * Cosmos DB capability object
 *
 * @member {string} [name] Name of the Cosmos DB capability
 */
export interface Capability {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * A region in which the Azure Cosmos DB database account is deployed.
 *
 * @member {string} [id] The unique identifier of the region within the
 * database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
 * @member {string} [locationName] The name of the region.
 * @member {string} [documentEndpoint] The connection endpoint for the specific
 * region. Example:
 * https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
 * @member {string} [provisioningState]
 * @member {number} [failoverPriority] The failover priority of the region. A
 * failover priority of 0 indicates a write region. The maximum value for a
 * failover priority = (total number of regions - 1). Failover priority values
 * must be unique for each of the regions in which the database account exists.
 */
export interface Location {
  readonly id?: string;
  locationName?: string;
  readonly documentEndpoint?: string;
  provisioningState?: string;
  failoverPriority?: number;
}

/**
 * @class
 * Initializes a new instance of the FailoverPolicy class.
 * @constructor
 * The failover policy for a given region of a database account.
 *
 * @member {string} [id] The unique identifier of the region in which the
 * database account replicates to. Example:
 * &lt;accountName&gt;-&lt;locationName&gt;.
 * @member {string} [locationName] The name of the region in which the database
 * account exists.
 * @member {number} [failoverPriority] The failover priority of the region. A
 * failover priority of 0 indicates a write region. The maximum value for a
 * failover priority = (total number of regions - 1). Failover priority values
 * must be unique for each of the regions in which the database account exists.
 */
export interface FailoverPolicy {
  readonly id?: string;
  locationName?: string;
  failoverPriority?: number;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * A database account resource.
 *
 * @member {string} [id] The unique resource identifier of the database
 * account.
 * @member {string} [name] The name of the database account.
 * @member {string} [type] The type of Azure resource.
 * @member {string} location The location of the resource group to which the
 * resource belongs.
 * @member {object} [tags]
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccount class.
 * @constructor
 * An Azure Cosmos DB database account.
 *
 * @member {string} [kind] Indicates the type of database account. This can
 * only be set at database account creation. Possible values include:
 * 'GlobalDocumentDB', 'MongoDB', 'Parse'. Default value: 'GlobalDocumentDB' .
 * @member {string} [provisioningState]
 * @member {string} [documentEndpoint] The connection endpoint for the Cosmos
 * DB database account.
 * @member {string} [databaseAccountOfferType] The offer type for the Cosmos DB
 * database account. Default value: Standard. Possible values include:
 * 'Standard'
 * @member {string} [ipRangeFilter] Cosmos DB Firewall Support: This value
 * specifies the set of IP addresses or IP address ranges in CIDR form to be
 * included as the allowed list of client IPs for a given database account. IP
 * addresses/ranges must be comma separated and must not contain any spaces.
 * @member {boolean} [enableAutomaticFailover] Enables automatic failover of
 * the write region in the rare event that the region is unavailable due to an
 * outage. Automatic failover will result in a new write region for the account
 * and is chosen based on the failover priorities configured for the account.
 * @member {object} [consistencyPolicy] The consistency policy for the Cosmos
 * DB database account.
 * @member {string} [consistencyPolicy.defaultConsistencyLevel] The default
 * consistency level and configuration settings of the Cosmos DB account.
 * Possible values include: 'Eventual', 'Session', 'BoundedStaleness',
 * 'Strong', 'ConsistentPrefix'
 * @member {number} [consistencyPolicy.maxStalenessPrefix] When used with the
 * Bounded Staleness consistency level, this value represents the number of
 * stale requests tolerated. Accepted range for this value is 1 –
 * 2,147,483,647. Required when defaultConsistencyPolicy is set to
 * 'BoundedStaleness'.
 * @member {number} [consistencyPolicy.maxIntervalInSeconds] When used with the
 * Bounded Staleness consistency level, this value represents the time amount
 * of staleness (in seconds) tolerated. Accepted range for this value is 5 -
 * 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
 * @member {array} [capabilities] List of Cosmos DB capabilities for the
 * account
 * @member {array} [writeLocations] An array that contains the write location
 * for the Cosmos DB account.
 * @member {array} [readLocations] An array that contains of the read locations
 * enabled for the Cosmos DB account.
 * @member {array} [failoverPolicies] An array that contains the regions
 * ordered by their failover priorities.
 */
export interface DatabaseAccount extends Resource {
  kind?: string;
  provisioningState?: string;
  readonly documentEndpoint?: string;
  readonly databaseAccountOfferType?: string;
  ipRangeFilter?: string;
  enableAutomaticFailover?: boolean;
  consistencyPolicy?: ConsistencyPolicy;
  capabilities?: Capability[];
  readonly writeLocations?: Location[];
  readonly readLocations?: Location[];
  readonly failoverPolicies?: FailoverPolicy[];
}

/**
 * @class
 * Initializes a new instance of the FailoverPolicies class.
 * @constructor
 * The list of new failover policies for the failover priority change.
 *
 * @member {array} failoverPolicies List of failover policies.
 */
export interface FailoverPolicies {
  failoverPolicies: FailoverPolicy[];
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountCreateUpdateParameters class.
 * @constructor
 * Parameters to create and update Cosmos DB database accounts.
 *
 * @member {string} [kind] Indicates the type of database account. This can
 * only be set at database account creation. Possible values include:
 * 'GlobalDocumentDB', 'MongoDB', 'Parse'. Default value: 'GlobalDocumentDB' .
 * @member {object} [consistencyPolicy] The consistency policy for the Cosmos
 * DB account.
 * @member {string} [consistencyPolicy.defaultConsistencyLevel] The default
 * consistency level and configuration settings of the Cosmos DB account.
 * Possible values include: 'Eventual', 'Session', 'BoundedStaleness',
 * 'Strong', 'ConsistentPrefix'
 * @member {number} [consistencyPolicy.maxStalenessPrefix] When used with the
 * Bounded Staleness consistency level, this value represents the number of
 * stale requests tolerated. Accepted range for this value is 1 –
 * 2,147,483,647. Required when defaultConsistencyPolicy is set to
 * 'BoundedStaleness'.
 * @member {number} [consistencyPolicy.maxIntervalInSeconds] When used with the
 * Bounded Staleness consistency level, this value represents the time amount
 * of staleness (in seconds) tolerated. Accepted range for this value is 5 -
 * 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
 * @member {array} locations An array that contains the georeplication
 * locations enabled for the Cosmos DB account.
 * @member {string} [ipRangeFilter] Cosmos DB Firewall Support: This value
 * specifies the set of IP addresses or IP address ranges in CIDR form to be
 * included as the allowed list of client IPs for a given database account. IP
 * addresses/ranges must be comma separated and must not contain any spaces.
 * @member {boolean} [enableAutomaticFailover] Enables automatic failover of
 * the write region in the rare event that the region is unavailable due to an
 * outage. Automatic failover will result in a new write region for the account
 * and is chosen based on the failover priorities configured for the account.
 * @member {array} [capabilities] List of Cosmos DB capabilities for the
 * account
 */
export interface DatabaseAccountCreateUpdateParameters extends Resource {
  kind?: string;
  consistencyPolicy?: ConsistencyPolicy;
  locations: Location[];
  ipRangeFilter?: string;
  enableAutomaticFailover?: boolean;
  capabilities?: Capability[];
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountPatchParameters class.
 * @constructor
 * Parameters for patching Azure Cosmos DB database account properties.
 *
 * @member {object} [tags]
 * @member {array} [capabilities] List of Cosmos DB capabilities for the
 * account
 */
export interface DatabaseAccountPatchParameters {
  tags?: { [propertyName: string]: string };
  capabilities?: Capability[];
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountListReadOnlyKeysResult class.
 * @constructor
 * The read-only access keys for the given database account.
 *
 * @member {string} [primaryReadonlyMasterKey] Base 64 encoded value of the
 * primary read-only key.
 * @member {string} [secondaryReadonlyMasterKey] Base 64 encoded value of the
 * secondary read-only key.
 */
export interface DatabaseAccountListReadOnlyKeysResult {
  readonly primaryReadonlyMasterKey?: string;
  readonly secondaryReadonlyMasterKey?: string;
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountListKeysResult class.
 * @constructor
 * The access keys for the given database account.
 *
 * @member {string} [primaryMasterKey] Base 64 encoded value of the primary
 * read-write key.
 * @member {string} [secondaryMasterKey] Base 64 encoded value of the secondary
 * read-write key.
 * @member {string} [primaryReadonlyMasterKey] Base 64 encoded value of the
 * primary read-only key.
 * @member {string} [secondaryReadonlyMasterKey] Base 64 encoded value of the
 * secondary read-only key.
 */
export interface DatabaseAccountListKeysResult {
  readonly primaryMasterKey?: string;
  readonly secondaryMasterKey?: string;
  readonly primaryReadonlyMasterKey?: string;
  readonly secondaryReadonlyMasterKey?: string;
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountConnectionString class.
 * @constructor
 * Connection string for the Cosmos DB account
 *
 * @member {string} [connectionString] Value of the connection string
 * @member {string} [description] Description of the connection string
 */
export interface DatabaseAccountConnectionString {
  readonly connectionString?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountListConnectionStringsResult class.
 * @constructor
 * The connection strings for the given database account.
 *
 * @member {array} [connectionStrings] An array that contains the connection
 * strings for the Cosmos DB account.
 */
export interface DatabaseAccountListConnectionStringsResult {
  connectionStrings?: DatabaseAccountConnectionString[];
}

/**
 * @class
 * Initializes a new instance of the DatabaseAccountRegenerateKeyParameters class.
 * @constructor
 * Parameters to regenerate the keys within the database account.
 *
 * @member {string} keyKind The access key to regenerate. Possible values
 * include: 'primary', 'secondary', 'primaryReadonly', 'secondaryReadonly'
 */
export interface DatabaseAccountRegenerateKeyParameters {
  keyKind: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.ResourceProvider
 * @member {string} [resource] Resource on which the operation is performed:
 * Profile, endpoint, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 * @member {string} [description] Description of operation
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider:
 * Microsoft.ResourceProvider
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Profile, endpoint, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 * @member {string} [display.description] Description of operation
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the MetricName class.
 * @constructor
 * A metric name.
 *
 * @member {string} [value] The name of the metric.
 * @member {string} [localizedValue] The friendly name of the metric.
 */
export interface MetricName {
  readonly value?: string;
  readonly localizedValue?: string;
}

/**
 * @class
 * Initializes a new instance of the Usage class.
 * @constructor
 * The usage data for a usage request.
 *
 * @member {string} [unit] The unit of the metric. Possible values include:
 * 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond', 'BytesPerSecond',
 * 'Milliseconds'
 * @member {object} [name] The name information for the metric.
 * @member {string} [name.value] The name of the metric.
 * @member {string} [name.localizedValue] The friendly name of the metric.
 * @member {string} [quotaPeriod] The quota period used to summarize the usage
 * values.
 * @member {number} [limit] Maximum value for this metric
 * @member {number} [currentValue] Current value for this metric
 */
export interface Usage {
  unit?: string;
  readonly name?: MetricName;
  readonly quotaPeriod?: string;
  readonly limit?: number;
  readonly currentValue?: number;
}

/**
 * @class
 * Initializes a new instance of the PartitionUsage class.
 * @constructor
 * The partition level usage data for a usage request.
 *
 * @member {string} [partitionId] The parition id (GUID identifier) of the
 * usages.
 * @member {string} [partitionKeyRangeId] The partition key range id (integer
 * identifier) of the usages.
 */
export interface PartitionUsage extends Usage {
  readonly partitionId?: string;
  readonly partitionKeyRangeId?: string;
}

/**
 * @class
 * Initializes a new instance of the MetricAvailability class.
 * @constructor
 * The availability of the metric.
 *
 * @member {string} [timeGrain] The time grain to be used to summarize the
 * metric values.
 * @member {string} [retention] The retention for the metric values.
 */
export interface MetricAvailability {
  readonly timeGrain?: string;
  readonly retention?: string;
}

/**
 * @class
 * Initializes a new instance of the MetricDefinition class.
 * @constructor
 * The definition of a metric.
 *
 * @member {array} [metricAvailabilities] The list of metric availabilities for
 * the account.
 * @member {string} [primaryAggregationType] The primary aggregation type of
 * the metric. Possible values include: 'None', 'Average', 'Total',
 * 'Minimimum', 'Maximum', 'Last'
 * @member {string} [unit] The unit of the metric. Possible values include:
 * 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond', 'BytesPerSecond',
 * 'Milliseconds'
 * @member {string} [resourceUri] The resource uri of the database.
 * @member {object} [name] The name information for the metric.
 * @member {string} [name.value] The name of the metric.
 * @member {string} [name.localizedValue] The friendly name of the metric.
 */
export interface MetricDefinition {
  readonly metricAvailabilities?: MetricAvailability[];
  readonly primaryAggregationType?: string;
  unit?: string;
  readonly resourceUri?: string;
  readonly name?: MetricName;
}

/**
 * @class
 * Initializes a new instance of the MetricValue class.
 * @constructor
 * Represents metrics values.
 *
 * @member {number} [_count] The number of values for the metric.
 * @member {number} [average] The average value of the metric.
 * @member {number} [maximum] The max value of the metric.
 * @member {number} [minimum] The min value of the metric.
 * @member {date} [timestamp] The metric timestamp (ISO-8601 format).
 * @member {number} [total] The total value of the metric.
 */
export interface MetricValue {
  readonly _count?: number;
  readonly average?: number;
  readonly maximum?: number;
  readonly minimum?: number;
  readonly timestamp?: Date;
  readonly total?: number;
}

/**
 * @class
 * Initializes a new instance of the Metric class.
 * @constructor
 * Metric data
 *
 * @member {date} [startTime] The start time for the metric (ISO-8601 format).
 * @member {date} [endTime] The end time for the metric (ISO-8601 format).
 * @member {string} [timeGrain] The time grain to be used to summarize the
 * metric values.
 * @member {string} [unit] The unit of the metric. Possible values include:
 * 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond', 'BytesPerSecond',
 * 'Milliseconds'
 * @member {object} [name] The name information for the metric.
 * @member {string} [name.value] The name of the metric.
 * @member {string} [name.localizedValue] The friendly name of the metric.
 * @member {array} [metricValues] The metric values for the specified time
 * window and timestep.
 */
export interface Metric {
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly timeGrain?: string;
  unit?: string;
  readonly name?: MetricName;
  readonly metricValues?: MetricValue[];
}

/**
 * @class
 * Initializes a new instance of the PercentileMetricValue class.
 * @constructor
 * Represents percentile metrics values.
 *
 * @member {number} [p10] The 10th percentile value for the metric.
 * @member {number} [p25] The 25th percentile value for the metric.
 * @member {number} [p50] The 50th percentile value for the metric.
 * @member {number} [p75] The 75th percentile value for the metric.
 * @member {number} [p90] The 90th percentile value for the metric.
 * @member {number} [p95] The 95th percentile value for the metric.
 * @member {number} [p99] The 99th percentile value for the metric.
 */
export interface PercentileMetricValue extends MetricValue {
  readonly p10?: number;
  readonly p25?: number;
  readonly p50?: number;
  readonly p75?: number;
  readonly p90?: number;
  readonly p95?: number;
  readonly p99?: number;
}

/**
 * @class
 * Initializes a new instance of the PercentileMetric class.
 * @constructor
 * Percentile Metric data
 *
 * @member {date} [startTime] The start time for the metric (ISO-8601 format).
 * @member {date} [endTime] The end time for the metric (ISO-8601 format).
 * @member {string} [timeGrain] The time grain to be used to summarize the
 * metric values.
 * @member {string} [unit] The unit of the metric. Possible values include:
 * 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond', 'BytesPerSecond',
 * 'Milliseconds'
 * @member {object} [name] The name information for the metric.
 * @member {string} [name.value] The name of the metric.
 * @member {string} [name.localizedValue] The friendly name of the metric.
 * @member {array} [metricValues] The percentile metric values for the
 * specified time window and timestep.
 */
export interface PercentileMetric {
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly timeGrain?: string;
  unit?: string;
  readonly name?: MetricName;
  readonly metricValues?: PercentileMetricValue[];
}

/**
 * @class
 * Initializes a new instance of the PartitionMetric class.
 * @constructor
 * The metric values for a single partition.
 *
 * @member {string} [partitionId] The parition id (GUID identifier) of the
 * metric values.
 * @member {string} [partitionKeyRangeId] The partition key range id (integer
 * identifier) of the metric values.
 */
export interface PartitionMetric extends Metric {
  readonly partitionId?: string;
  readonly partitionKeyRangeId?: string;
}


/**
 * @class
 * Initializes a new instance of the DatabaseAccountsListResult class.
 * @constructor
 * The List operation response, that contains the database accounts and their
 * properties.
 *
 */
export interface DatabaseAccountsListResult extends Array<DatabaseAccount> {
}

/**
 * @class
 * Initializes a new instance of the MetricListResult class.
 * @constructor
 * The response to a list metrics request.
 *
 */
export interface MetricListResult extends Array<Metric> {
}

/**
 * @class
 * Initializes a new instance of the UsagesResult class.
 * @constructor
 * The response to a list usage request.
 *
 */
export interface UsagesResult extends Array<Usage> {
}

/**
 * @class
 * Initializes a new instance of the MetricDefinitionsListResult class.
 * @constructor
 * The response to a list metric definitions request.
 *
 */
export interface MetricDefinitionsListResult extends Array<MetricDefinition> {
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list Resource Provider operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PercentileMetricListResult class.
 * @constructor
 * The response to a list percentile metrics request.
 *
 */
export interface PercentileMetricListResult extends Array<PercentileMetric> {
}

/**
 * @class
 * Initializes a new instance of the PartitionMetricListResult class.
 * @constructor
 * The response to a list partition metrics request.
 *
 */
export interface PartitionMetricListResult extends Array<PartitionMetric> {
}

/**
 * @class
 * Initializes a new instance of the PartitionUsagesResult class.
 * @constructor
 * The response to a list partition level usage request.
 *
 */
export interface PartitionUsagesResult extends Array<PartitionUsage> {
}
