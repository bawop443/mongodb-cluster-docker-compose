#!/bin/bash

mongo <<EOF
var config = {
    "_id": "rs-shard-01",
    "version": 1,
    "members": [
        {
            "_id": 0,
            "host": "shard01-primary:27017",
			"priority": 1
        },
        {
            "_id": 1,
            "host": "shard01-secondary-01:27017",
			"priority": 0.5
        },
        {
            "_id": 2,
            "host": "shard01-secondary-02:27017",
			"priority": 0.5
        }
    ]
};
rs.initiate(config, { force: true });
EOF