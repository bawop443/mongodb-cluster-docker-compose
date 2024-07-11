#!/bin/bash

mongo <<EOF
var config = {
    "_id": "rs-shard-01",
    "version": 1,
    "members": [
        {
            "_id": 0,
            "host": "192.168.30.62:27122",
			"priority": 1
        },
        {
            "_id": 1,
            "host": "192.168.30.62:27123",
			"priority": 0.5
        },
        {
            "_id": 2,
            "host": "192.168.30.62:27124",
			"priority": 0.5
        }
    ]
};
rs.initiate(config, { force: true });
EOF