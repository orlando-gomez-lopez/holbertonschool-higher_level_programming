#!/bin/bash
# point 7 get the status code
curl -s -o /dev/null -I -w "%{http_code}" "$1"
