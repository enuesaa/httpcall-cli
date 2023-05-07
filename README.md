# node-cli-compare-httpcall
Sample app to learn how to create cli with nodejs.  
For that purpose, this repository is monorepo to compare libraries.  
Each package implements the same interface below.  

## Command Interface
```bash
httpcall post https://example.com --json '{"data":"something"}' --header 'Accept:application/json'
{
  "data": "response"
}
```

## Packages
|name|library name|
|httpcall-simple|(nothing)|
|httpcall-commander|commander.js|
|httpcall-meow|meow|
