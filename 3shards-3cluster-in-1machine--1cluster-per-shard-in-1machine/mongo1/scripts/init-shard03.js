#!/bin/bash

mongo << EOF
var config = {
  "_id": "rs-shard-03",
  "version": 1,
  "members": [
    {
			"_id": 0,
			"host": "192.168.30.58:25002",
			"priority": 0.5
		},
		{
			"_id": 1,
			"host": "192.168.30.59:25002",
			"priority": 0.5
		},
		{
			"_id": 2,
			"host": "192.168.30.62:25002",
			"priority": 1
		}
  ]
};
rs.initiate(config, { force: true });
EOF