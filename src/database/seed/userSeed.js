import { User } from "../models/index.js";

const userSeed = async () => {
    try{
        await User.bulkCreate([
            {email:'admin@admin.com', password:'hola1234', roleId:1},
            {email:'usuario1@usuario.com', password:'hola1234', roleId:2},
            {email:'usuario2@usuario.com', password:'hola1234', roleId:1},
        ])
    }catch(error){
        console.log(error.message)
    }
}
export default userSeed;