#!/bin/bash

mongo <<EOF
var config = {
	"_id": "rs-config-server",
	"configsvr": true,
	"version": 1,
	"members": [
		{
			"_id": 0,
			"host": "192.168.30.58:25100",
			"priority": 1
		},
		{
			"_id": 1,
			"host": "192.168.30.59:25100",
			"priority": 0.5
		},
		{
			"_id": 2,
			"host": "192.168.30.62:25100",
			"priority": 0.5
		}
	]
};
rs.initiate(config, { force: true });
EOF