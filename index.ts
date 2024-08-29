// import * as pulumi from "@pulumi/pulumi";
// import * as awsx from "@pulumi/awsx";
import * as aws from "@pulumi/aws";


const partition = aws.getPartition({});
const region = aws.getRegion({});
const callerId = aws.getCallerIdentity({});

export const currentRegion = region.then(r => r.name);
export const currentAccountId = callerId.then(c => c.accountId);
export const currentPartition = partition.then(p => p.partition);
