# sequelize model:generate --name student \
#   --attributes firstName:string,lastName:string,email:string,phone:string

# sequelize model:generate --name user \
#   --attributes firstName:string,lastName:string,email:string,phone:string

sequelize db:migrate

