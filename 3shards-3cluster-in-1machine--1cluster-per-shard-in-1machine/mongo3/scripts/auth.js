#!/bin/bash

mongo <<EOF
use admin;
db.createUser({user: "adminsmart", pwd: "password", roles:[{role: "root", db: "admin"}]});
exit;
EOF