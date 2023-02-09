import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class PointItem extends Model {
    static table = "points"

    @field('point_id')
    point_id!: string;

    @field('latitude')
    latitude!: number;

    @field('longitude')
    longitude!: number;

    @field('speed')
    speed!: number;

    @field('time')
    time!: string;

    @field('isSynchronized')
    isSynchronized!: boolean;
}

export { PointItem }