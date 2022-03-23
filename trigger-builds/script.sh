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
echo "....voy a copiar en /var"
cp info.html  /var/www/html
#
