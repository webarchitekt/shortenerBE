## ABOUT

Start program with `npm run devStart`

## FOLDERS

`ROUTES` - all routes with special requests for database
`MODELS` - application has only one model regarding object which is created after request from FE to BE
`UTILS` - folder for files with special shared functions across application
`SERVICES` - contain configuration file for connect to database

## FILES

`route.http` - test file for endpoints
`.env` - contain database url for connect to specific database with access data to database
`app.ts` - file with all configuration regarding communication with database and frontend
`server.ts` - file for starting express server
