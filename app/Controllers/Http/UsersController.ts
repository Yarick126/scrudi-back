import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Users from 'App/Models/Users';

export default class UsersController {

  // GET method
  public async index(ctx: HttpContextContract){
    return Users.all();// select * from users
  }

  // POST method
  public async store({request, response}: HttpContextContract){
    const body = request.body(); // TODO:validation

    const user = await Users.create(body);// create user
    response.status(201);
    return user;
  }
  // GET method
  public async show({params}: HttpContextContract){
    return Users.findOrFail(params.id);
  }
  // PUT, PATH method
  public async update({params, request}: HttpContextContract){

    const body = request.body();
    const user = await Users.findOrFail(params.id);

    user.login = body.login;
    user.password = body.password;

    return user.save();
  }
  //DELETE method
  public async destroy({params}: HttpContextContract){
    const user = await Users.findOrFail(params.id);
    return user.delete();
  }
}
