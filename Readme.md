# Welcome to the Metar-o-matic

## Install

run 

```npm install```

you may need to run 

```chmod +x bin/metar```

If you want to run the app from the command line you can run 

```npm link```

## Run the app

```metar <string to parse>```

 to run it against a file

 ```metar -f <path to file>```

 ## Notes

 As timestamps were not standard unix timestamps I decided to make the assumption that records would come in order.  