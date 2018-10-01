#!/bin/bash

echo -n "Hi there, type a message to display and press [Enter]: "
read message
MSG=message
echo -n "Now please type today's date and press [Enter]: "
read date
DATE=date

cd /d/Github_Repos/cli_json
echo $MSG $DATE|node index.js
