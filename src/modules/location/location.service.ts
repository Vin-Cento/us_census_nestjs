import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City } from 'src/database/entities/city.entity';

@Injectable()
export class LocationService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private cityRepository: Repository<City>,
  ) { }

  async listCity(searchQuery: string): Promise<any[]> | null {
    const data = await this.cityRepository
      .createQueryBuilder('city')
      .select('city.city_ascii')
      .addSelect('city.state_id')
      .addSelect('city.lat')
      .addSelect('city.lng')
      .where(
        "LOWER(city.city_ascii) || ' ' || LOWER(city.state_id) LIKE :city_ascii",
        {
          city_ascii: `%${searchQuery.toLowerCase()}%`,
        },
      )
      .limit(5)
      .getMany();
    return data;
  }
}
