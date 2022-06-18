import { IListDTO } from '@boards/types'
import { DeepPartial, EntityTarget, MongoRepository } from 'typeorm'
import { database } from '../database'

export class Provider<Entity> {
  /**
   * The MongoDB collection
   */
	private repo: MongoRepository<Entity>

  /**
   * Creates a new instance of the model provider
   * @param entityClass TypeORM's model decorated with `@Entity()`
   */
	constructor(entityClass: EntityTarget<Entity>) {
		this.repo = database.getMongoRepository(entityClass)
	}

  /**
   * Returns a DTO with the list of data itself and its metadata
   */
	async getMany(): Promise<IListDTO<Entity>> {
		const list = await this.repo.find()
		return {
			list,
			size: list.length,
		}
	}

  /**
   * Finds a document by given parameters.
   * @param where `where` condition for finding a document
   * @returns The document if it was found or null - if it wasn't
   */
  async getOneBy(where: DeepPartial<Entity>): Promise<Entity | null> {
    return this.repo.findOneBy({ ...where })
  }

  /**
   * Creates the document with given input data.
   * @param input The input data for a new document
   * @returns Freshly created document
   */
  async createOne(input: DeepPartial<Entity>): Promise<Entity> {
		const item = this.repo.create(input)
		return this.repo.save(item)
  }

  /**
   * Finds the document by given parameters
   * and changes some properties in it
   * @param where `where` condition for finding a document
   * @param input The input data for a new document 
   * @returns The edited document with updated properties
   */
  async editOne(where: DeepPartial<Entity>, input: DeepPartial<Entity>): Promise<Entity> {
    const item = await this.getOneBy({ ...where })
    return this.repo.save({ ...item, ...input })
  }
}
