import { BaseService } from './base.service.js';
import User from '../models/user.model.js';

class UserService extends BaseService {
  constructor(model) {
    super(model);
  }

  async find(filter) {
    return await this.model.findOne(
      filter,
      '-phone_number -residential_address -business_type -investment_amount_range -net_worth -investment_experience -source_of_funds -password  '
    );
  }

  async findWithDetails(filter) {
    return await this.model.findOne(filter);
  }

  async findAll(filter) {
    return await this.model.find(
      filter,
      '-posts -replies -likes -password -deleted'
    );
  }

  async updateOne(filter, data) {
    return await this.model.updateOne(filter, { $push: { posts: data } });
  }
}

export const userService = new UserService(User);
