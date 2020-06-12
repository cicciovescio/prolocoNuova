#! /bin/bash

# this script build docker images and push them on the ibmcloud registry

script_dir=$(dirname "$0")
root=$(cd $script_dir/.. && pwd)

cd $root

npm run build

tdm_storytelling_version=0.1

docker build -f $root/Dockerfile \
             -t registry.eu-de.bluemix.net/sistabene/tdm-storytelling:$tdm_storytelling_version .             
docker push registry.eu-de.bluemix.net/sistabene/tdm-storytelling:$tdm_storytelling_version

