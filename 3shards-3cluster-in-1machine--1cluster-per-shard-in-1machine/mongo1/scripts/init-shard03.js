#!/bin/bash

mongo << EOF
var config = {
  "_id": "rs-shard-03",
  "version": 1,
  "members": [
    {
			"_id": 0,
			"host": "192.168.30.91:25002",
			"priority": 0.5
		},
		{
			"_id": 1,
			"host": "192.168.30.92:25002",
			"priority": 0.5
		},
		{
			"_id": 2,
			"host": "192.168.30.93:25002",
			"priority": 1
		}
  ]
};
rs.initiate(config, { force: true });
EOF