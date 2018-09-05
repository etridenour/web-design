sequelize model:generate --name artist \
  --attributes Artist:string

sequelize model:generate --name track \
  --attributes Name:string,Duration:time,

sequelize model:generate --name album \
  --attributes Album:string

