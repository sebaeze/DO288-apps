#! /bin/bash
#
FECHA=$(date "+%b %d, %y@%H:%M:%S")
#
echo Build on $FECHA
echo Build on $FECHA > info.html
#
pwd
ls -lta
#
cp info.html  /var/www/html
#
