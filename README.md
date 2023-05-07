# node-cli-compare-httpcall
Repository to learn how to create cli app with nodejs.  

For that purpose, this repository is monorepo.  
Each package uses different libraries and implements the same interface below.  

## Command Interface
```bash
httpcall post https://example.com --json '{"data":"something"}' --header 'Accept:application/json'
{
  "data": "response"
}
```

## Packages

| name | library name | |  
| ---- | ---- | ---- |
| httpcall | (nothing) | |  
| httpcall-commander | commander.js | |
| httpcall-meow | meow | work in progress.. |

